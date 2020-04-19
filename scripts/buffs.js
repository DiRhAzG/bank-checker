///<reference path="/alt1lib.js">
///<reference path="/runeappslib.js">
///<reference path="/imagedetect.js">
///<reference path="/apps/alt1/alt1doc.js">
"use strict";

ImageData.fromBase64(function (i) { BuffReader.buffimg = i }, "iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAQklEQVRIS+3WsQ0AIAwDQcMWrMZgrEuIxAhPCuSXXF/rNtfYqiqxk14vnX7NkowhGUMyhmQMyRiSMSRjSP9ihY9YCup7UwjtjX6fAAAAAElFTkSuQmCC");
ImageData.fromBase64(function (i) { BuffReader.debuffimg = i }, "iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAARUlEQVRIS+3WsQ0AIAwDQZuV2H8DmMlIKCOYFMhXOdW34QKEJjc2Jdb9zCY1ardIzCIxi8QsErNIzCIxi8Qs/o01fsTAAd/6CZWIeSAVAAAAAElFTkSuQmCC");
ImageData.fromBase64(function (i) { BuffReader.prayerstone = i }, "iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJCAIAAACJ2loDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAADiSURBVChTY9DVtTE0sHdz8svNrC7MbYSg4oJmCKqt7KuunMZgYuTgZOcZ4BWSkVIEl4Oguqr+yf0rqiqnMzjYegAVeTj7RYXGIasAmjG5b1lf15Ks7G4GoAoIcnf2S03IhahobpgxsWfJ1AkrgQhFERAlRqcBVfR1LpzSvwKiYvqk1eiKvN2Dq8vaIdJANG3iKnRF3u5hBTktrQ2T+7sWQBTNm7Ghs21hTm4fVFGAT1RuVkNNeQ8QNdZMmNC9EKIIaExh0VQGBxt3T5fA4rxGiAoIaqqdOLV/6fyZG0GKiqYCAKjnj3J0JQBRAAAAAElFTkSuQmCC");
BuffReader.timeimgs = new ImageSet("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAAJCAYAAABkF+E+AAABN0lEQVRIS41OCxbDIAza/S/dCQaLzLTjPZrwidvnui4RcN35Dvc9S8+1PEeXnzyhy9x/y47UAvh0f7S4rhy6PMC7zArLL096eU7PMMsD5NOTX1OlLRtgf65t1hIfgIeYVFaguDPvPWXub53iyaOB6dnpFtP8fMv1U9YSn7fD7iFgRFsmuK97IHuAPPrWBTwTT//H4b+tbO1NpknSyOKLpsA8+PIAebrf3sF+6haYF5TJUPbjNTfLBOy2m9WIH3nTmOEl/SbhvVmyLvbUtZ/0yTt1hkXPM+05+Z2OTTucy605IxeBtXundnraB5hxubvbXWjOyKfob5Lbe7Xn5FcEhj+DoiO1oK7n+c4U57cff9OyvHc68j2nv6E9J7+LdrB5YmpRXc/dE//tys8stVP9pw7oufZ9Xp8vXK7ichbpSisAAAAASUVORK5CYII=", [0, 7, 11, 18, 24, 29, 35, 42, 48, 55, 62]);

function BuffReader() {
	var me = this;
	this.pos = null;
	this.tracking = false;
	this.config = {
		timers: {
			buffCheck: 10000
		}
	};

	this.buffTimer = 0;

	this.buffexists = false;
	this.message = qw;

	let buffsize = 27;

	//private vars
	let trackInterval = null;
	let trackCallback = null;

	this.find = function (img) {
		if (me.buffTimer > 0) {
			me.buffTimer -= me.config.timers.buffCheck
			console.log(me.buffTimer + ' ' + 'true');
			return true;
		}

		if (!img) { img = a1lib.bindfullrs(); }

		let buff = a1lib.findsubimg(img, BuffReader.prayerstone);

		if (buff.length == 0 || buff == false) {
			console.log(me.buffTimer + ' ' + 'false');
			return false;
		}

		let loc = { x: buff[0].x - 8, y: buff[0].y - 6, width: 27, height: 27 };

		let buffarea = {
			x: loc.x,
			y: loc.y,
			w: loc.width,
			h: loc.height,
			scrollbar: null,
		};

		me.pos = {
			area: buffarea
		};

		let buffer = img.toData(me.pos.area.x, me.pos.area.y, me.pos.area.w, me.pos.area.h);
		let time = readTime(buffer, 2, 16);

		me.buffTimer = time;

		return true;
	}

	this.track = function (callback) {
		me.stopTrack();
		trackInterval = setInterval(trackTick, me.config.timers.buffCheck);
		trackCallback = callback;
		me.tracking = true;
	}
	this.stopTrack = function () {
		if (trackInterval) { clearInterval(trackInterval); }
		trackInterval = null;
		me.tracking = false;
	}

	let trackTick = function () {
		me.find();
	}

	let readTime = function (buffer, ox, oy) {
		let str = "";
		let dx = 0;
		let anymatch = true;

		while (anymatch && dx < buffsize) {
			anymatch = false;
			for (var a = 0; a < BuffReader.timeimgs.buffers.length; a++) {
				var buf = BuffReader.timeimgs.buffers[a];
				var match = true;

				for (var x = 0; x < buf.width; x++) {
					for (var y = 0; y < buf.height; y++) {
						if (buf.data[4 * x + 4 * buf.width * y] != 255) { continue; }
						var i = 4 * (ox + dx + x) + 4 * buffer.width * (oy + y);
						if (isNumberCol(buffer.data, i)) { continue; }
						match = false;
						break;
					}
					if (!match) { break; }
				}
				if (!match) { continue; }
				str += "0123456789m"[a];
				dx += buf.width;
				anymatch = true;
				break;
			}
		}
		let m;
		let time = 0;

		if (m = str.match(/^(\d+)$/)) { time = + m[1]; }
		if (m = str.match(/^(\d+)m$/)) { time = m[1] * 60; }
		return time * 1000;
	}
	
	let isNumberCol = function (data, i) {
		let r =
			data[i] == 255 && data[i + 1] == 255 && data[i + 2] == 0 ||//yellow (1)
			data[i] == 255 && data[i + 1] == 255 && data[i + 2] == 255 ||//white (K)
			data[i] == 0 && data[i + 1] == 255 && data[i + 2] == 128 ||//green (M)
			data[i] == 255 && data[i + 1] == 203 && data[i + 2] == 5;//yellowish (tab seperator)

		return r;
	}
}
