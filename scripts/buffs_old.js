"use strict";

ImageData.fromBase64(function (i) { BuffReader.buffimg = i }, "iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAQklEQVRIS+3WsQ0AIAwDQcMWrMZgrEuIxAhPCuSXXF/rNtfYqiqxk14vnX7NkowhGUMyhmQMyRiSMSRjSP9ihY9YCup7UwjtjX6fAAAAAElFTkSuQmCC");
ImageData.fromBase64(function (i) { BuffReader.debuffimg = i }, "iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAARUlEQVRIS+3WsQ0AIAwDQZuV2H8DmMlIKCOYFMhXOdW34QKEJjc2Jdb9zCY1ardIzCIxi8QsErNIzCIxi8Qs/o01fsTAAd/6CZWIeSAVAAAAAElFTkSuQmCC");
ImageData.fromBase64(function (i) { BuffReader.prayerstone = i }, "iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJCAIAAACJ2loDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAADiSURBVChTY9DVtTE0sHdz8svNrC7MbYSg4oJmCKqt7KuunMZgYuTgZOcZ4BWSkVIEl4Oguqr+yf0rqiqnMzjYegAVeTj7RYXGIasAmjG5b1lf15Ks7G4GoAoIcnf2S03IhahobpgxsWfJ1AkrgQhFERAlRqcBVfR1LpzSvwKiYvqk1eiKvN2Dq8vaIdJANG3iKnRF3u5hBTktrQ2T+7sWQBTNm7Ghs21hTm4fVFGAT1RuVkNNeQ8QNdZMmNC9EKIIaExh0VQGBxt3T5fA4rxGiAoIaqqdOLV/6fyZG0GKiqYCAKjnj3J0JQBRAAAAAElFTkSuQmCC");
BuffReader.timeimgs = new ImageSet("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAAJCAYAAABkF+E+AAABN0lEQVRIS41OCxbDIAza/S/dCQaLzLTjPZrwidvnui4RcN35Dvc9S8+1PEeXnzyhy9x/y47UAvh0f7S4rhy6PMC7zArLL096eU7PMMsD5NOTX1OlLRtgf65t1hIfgIeYVFaguDPvPWXub53iyaOB6dnpFtP8fMv1U9YSn7fD7iFgRFsmuK97IHuAPPrWBTwTT//H4b+tbO1NpknSyOKLpsA8+PIAebrf3sF+6haYF5TJUPbjNTfLBOy2m9WIH3nTmOEl/SbhvVmyLvbUtZ/0yTt1hkXPM+05+Z2OTTucy605IxeBtXundnraB5hxubvbXWjOyKfob5Lbe7Xn5FcEhj+DoiO1oK7n+c4U57cff9OyvHc68j2nv6E9J7+LdrB5YmpRXc/dE//tys8stVP9pw7oufZ9Xp8vXK7ichbpSisAAAAASUVORK5CYII=", [0, 7, 11, 18, 24, 29, 35, 42, 48, 55, 62]);

BuffReader.buffsize=27;
function BuffReader() {
	var me = this;
	var gridsize = 30;
	this.pos = null;
	this.debuffs = false;

	this.find = function (img) {
        if (!img) { img = a1lib.bindfullrs(); }
		if (!img) { return false; }
		var poslist = a1lib.findsubimg(img, BuffReader.prayerstone);
		if (poslist.length == 0) { return false; }
		var grids = [];
		for (var a in poslist) {
			var ongrid = false;
			for (var b in grids) {
				if (negmod(grids[b].x - poslist[a].x, gridsize) == 0 && negmod(grids[b].x - poslist[a].x, gridsize) == 0) {
					grids[b].x = Math.min(grids[b].x, poslist[a].x);
					grids[b].y = Math.min(grids[b].y, poslist[a].y);
					grids[b].n++;
					ongrid = true;
					break;
				}
			}
			if (!ongrid) { grids.push({ x: poslist[a].x, y: poslist[a].y, n: 1 }); }
		}
		var max = 0, above2 = 0, best = null;
		for (var a in grids) {
			qw("buff grid [" + grids[a].x + "," + grids[a].y + "], n:" + grids[a].n);
			if (grids[a].n > max) { max = grids[a].n; best = grids[a]; }
			if (grids[a].n >= 2) { above2++; }
		}
		if (above2 > 1) { qw("Warning, more than one possible buff bar location"); }
		me.pos = { x: best.x, y: best.y };
		return true;
	}

	this.read = function (img, forceread) {
		var r = [];
		var buffer = a1lib.getregion(me.pos.x, me.pos.y, 180, 90);
		for (var i = 0; i < 18; i++) {
			var x = i % 6 * gridsize;
			var y = Math.floor(i / 6) * gridsize;
			var isbuff = false !== a1lib.simplecompare(buffer, BuffReader.buffimg, x, y);
			var isdebuff = !isbuff && false !== a1lib.simplecompare(buffer, BuffReader.debuffimg, x, y);
			if (!isbuff && !isdebuff) { break; }
			r.push({
				type: isbuff ? "buff" : "debuff",
				buffer: buffer,
				bufferx: x, buffery: y,
				readTime: BuffReader.readTime.bind(null, buffer, x + 2, y + 17),
				compareBuffer: BuffReader.compareBuffer.bind(null, buffer, x + 1, y + 1),
				countMatch: BuffReader.countMatch.bind(null, buffer, x + 1, y + 1)
			});
		}
		return r;
	}
}

BuffReader.compareBuffer = function (buffer, ox, oy, buffimg) {
	var r = BuffReader.countMatch(buffer, ox, oy, buffimg, true);
	if (r.failed > 0) { return false; }
	if (r.tested < 50) { return false; }
	return true;
}
BuffReader.countMatch = function (buffer, ox, oy, buffimg, agressive) {
	var r = { tested: 0, failed: 0, skipped: 0, passed: 0 };
	var data1 = buffer.data;
	var data2 = buffimg.data;
	//var debug = new ImageData(buffimg.width, buffimg.height);
	for (var y = 0; y < buffimg.height; y++) {
		for (var x = 0; x < buffimg.width; x++) {
			var i1 = buffer.pixelOffset(ox + x, oy + y);
			var i2 = buffimg.pixelOffset(x, y);

			//debug.data[i2] = 255; debug.data[i2 + 1] = debug.data[i2 + 2] = 0; debug.data[i2 + 3] = 255;
			if (data2[i2 + 3] != 255) { r.skipped++; continue; }//transparent buff pixel
			if (data1[i1] == 255 && data1[i1 + 1] == 255 && data1[i1 + 2] == 255) { r.skipped++; continue; }//white pixel - part of buff time text
			if (data1[i1] == 0 && data1[i1 + 1] == 0 && data1[i1 + 2] == 0) { r.skipped++; continue; }//black pixel - part of buff time text

			var d = coldiff(data1[i1], data1[i1 + 1], data1[i1 + 2], data2[i2], data2[i2 + 1], data2[i2 + 2]);
			r.tested++;
			//debug.data[i2] = debug.data[i2 + 1] = debug.data[i2 + 2] = d * 10;
			if (d > 20) {
				//qw(pixelschecked); debug.show();
				r.failed++;
				if (agressive) { return r; }
			}
			else {
				r.passed++;
			}
		}
	}
	//debug.show(); qw(pixelschecked);
	return r;
}

BuffReader.isolateBuffer = function (buffer, ox, oy, buffimg) {
	var count = BuffReader.countMatch(buffer, ox, oy, buffimg);
	if (count.passed < 50) { return; }

	var removed = 0;
	var data1 = buffer.data;
	var data2 = buffimg.data;
	//var debug = new ImageData(buffimg.width, buffimg.height);
	for (var y = 0; y < buffimg.height; y++) {
		for (var x = 0; x < buffimg.width; x++) {
			var i1 = buffer.pixelOffset(ox + x, oy + y);
			var i2 = buffimg.pixelOffset(x, y);

			//debug.data[i2] = 255; debug.data[i2 + 1] = debug.data[i2 + 2] = 0; debug.data[i2 + 3] = 255;
			if (data2[i2 + 3] != 255) { continue; }//transparent buff pixel
			//==== new buffer has text on it ====
			if (data1[i1] == 255 && data1[i1 + 1] == 255 && data1[i1 + 2] == 255 || data1[i1] == 0 && data1[i1 + 1] == 0 && data1[i1 + 2] == 0) {
				continue;
			}

			//==== old buf has text on it, use the new one ====
			if (data2[i2] == 255 && data2[i2 + 1] == 255 && data2[i2 + 2] == 255 || data2[i2] == 0 && data2[i2 + 1] == 0 && data2[i2 + 2] == 0) {
				data2[i2 + 0] = data1[i1 + 0];
				data2[i2 + 1] = data1[i1 + 1];
				data2[i2 + 2] = data1[i1 + 2];
				data2[i2 + 3] = data1[i1 + 3];
				removed++;
			}

			var d = coldiff(data1[i1], data1[i1 + 1], data1[i1 + 2], data2[i2], data2[i2 + 1], data2[i2 + 2]);
			//debug.data[i2] = debug.data[i2 + 1] = debug.data[i2 + 2] = d * 10;
			if (d > 0) {
				//qw(pixelschecked); debug.show();
				data2[i2 + 0] = data2[i2 + 1] = data2[i2 + 2] = data2[i2 + 3] = 0;
				removed++;
			}
		}
	}
	//debug.show(); qw(pixelschecked);
	if (removed > 0) { qw(removed + " pixels remove from buff template image"); }
}

BuffReader.readTime = function (buffer, ox, oy) {
	var str = "";
	for (var dy = -10; dy <10; dy += 10) {//the timer can be spread to a second line at certain times (229m)
		for (var dx = 0, foundchar = true; foundchar && dx < 25;) {
			var foundchar = false;
			for (var a = 0; a < BuffReader.timeimgs.buffers.length; a++) {
				if (false !== a1lib.simplecompare(buffer, BuffReader.timeimgs.buffers[a], ox + dx, oy + dy)) {
					str += "0123456789mh"[a];
					dx += BuffReader.timeimgs.buffers[a].width;
					foundchar = true;
					break;
				}
			}
		}
	}
	var m;
	if (m = str.match(/^(\d+)h$/)) { return m[1] * 60 * 60; }
	if (m = str.match(/^(\d+)m$/)) { return m[1] * 60; }
	if (m = str.match(/^(\d+)$/)) { return +m[1]; }
	return 0;
}

BuffReader.matchBuff = function (state, buffimg) {
	for (var a in state) {
		if (state[a].compareBuffer(buffimg)) { return state[a]; }
	}
	return null;
}

BuffReader.matchBuffMulti = function (state, buffinfo) {
	if (buffinfo.final) {//cheap way if we known exactly what we're searching for
		return BuffReader.matchBuff(state, buffinfo.imgdata);
	}
	else {//expensive way if we are not sure the template is final
		var bestindex = -1;
		var bestscore = 0;
		if (buffinfo.imgdata) {
			for (var a in state) {
				var count = BuffReader.countMatch(state[a].buffer, state[a].bufferx + 1, state[a].buffery + 1, buffinfo.imgdata, false);
				if (count.passed > bestscore) {
					bestscore = count.passed;
					bestindex = a;
				}
			}
		}
		if (bestscore < 50) { return null; }

		//update the isolated buff
		BuffReader.isolateBuffer(state[bestindex].buffer, state[bestindex].bufferx + 1, state[bestindex].buffery + 1, buffinfo.imgdata);

		return state[bestindex];
	}
}

function BuffInfo(imgdata,name,id,final,debuff) {
	this.imgdata = imgdata;
	this.name = name;
	this.buffid = id;
	this.final = final;
	this.isdebuff = debuff;
}

BuffInfo.buffs = {
	prayerstone: { n: "Gibberish Stone", img: null, isdebuff: true }
};


BuffInfo.prototype.toJSON = function () {
	if (this.buffid != "") { return { buffid: this.buffid }; }
	else { return { name: this.name, final: this.final, buffid: "", imgstr: (this.imgdata? this.imgdata.toJSON():""), isdebuff:this.isdebuff }; }
}

BuffInfo.fromPreset = function (buffid) {
	var buffmeta = BuffInfo.buffs[buffid];
	return new BuffInfo(buffmeta.img, buffmeta.n, buffid, true, buffmeta.isdebuff);
}

BuffInfo.fromObject = function (obj) {
	if (typeof obj != "object" || obj == null) { return null; }
	if (typeof obj.buffid == "string" && obj.buffid != "") {
		if (!(obj.buffid in BuffInfo.buffs)) { return null; }
		return BuffInfo.fromPreset(obj.buffid);
	}
	else {
		//fix the image
		var name = (typeof obj.name == "string" ? obj.name : "Unknown buff");
		var isdebuff = !!obj.isdebuff;
		var final = !!obj.final;
		var r = new BuffInfo(null, name, "", final, isdebuff);

		var imgdata;
		if (obj.imgdata instanceof ImageData) { r.imgdata = obj.imgdata; }
		else if (typeof obj.imgstr == "string") { ImageData.fromBase64(function (i) { r.imgdata = i; }, obj.imgstr); }
		else { return null; }
		return r;
	}
}