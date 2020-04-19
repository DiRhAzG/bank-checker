"use strict";

ImageData.fromBase64(function (i) { BuffReader.buffimg = i }, "iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAQklEQVRIS+3WsQ0AIAwDQcMWrMZgrEuIxAhPCuSXXF/rNtfYqiqxk14vnX7NkowhGUMyhmQMyRiSMSRjSP9ihY9YCup7UwjtjX6fAAAAAElFTkSuQmCC");
ImageData.fromBase64(function (i) { BuffReader.debuffimg = i }, "iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAARUlEQVRIS+3WsQ0AIAwDQZuV2H8DmMlIKCOYFMhXOdW34QKEJjc2Jdb9zCY1ardIzCIxi8QsErNIzCIxi8Qs/o01fsTAAd/6CZWIeSAVAAAAAElFTkSuQmCC");
BuffReader.timeimgs = new ImageSet("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAAJCAYAAABkF+E+AAABN0lEQVRIS41OCxbDIAza/S/dCQaLzLTjPZrwidvnui4RcN35Dvc9S8+1PEeXnzyhy9x/y47UAvh0f7S4rhy6PMC7zArLL096eU7PMMsD5NOTX1OlLRtgf65t1hIfgIeYVFaguDPvPWXub53iyaOB6dnpFtP8fMv1U9YSn7fD7iFgRFsmuK97IHuAPPrWBTwTT//H4b+tbO1NpknSyOKLpsA8+PIAebrf3sF+6haYF5TJUPbjNTfLBOy2m9WIH3nTmOEl/SbhvVmyLvbUtZ/0yTt1hkXPM+05+Z2OTTucy605IxeBtXundnraB5hxubvbXWjOyKfob5Lbe7Xn5FcEhj+DoiO1oK7n+c4U57cff9OyvHc68j2nv6E9J7+LdrB5YmpRXc/dE//tys8stVP9pw7oufZ9Xp8vXK7ichbpSisAAAAASUVORK5CYII=", [0, 7, 11, 18, 24, 29, 35, 42, 48, 55, 62]);

BuffReader.buffsize=27;
function BuffReader() {
	var me = this;
	var gridsize = 30;
	this.pos = null;
	this.debuffs = false;

	this.find = function () {
		var img = a1lib.bindfullrs();
		if (!img) { return false; }
		var poslist = a1lib.findsubimg(img, (me.debuffs ? BuffReader.debuffimg : BuffReader.buffimg));
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

	this.read = function () {
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
	familiar: { n: "Familiar", img: null, isdebuff: false },
	adren: { n: "Adrenaline potion", img: null, isdebuff: true },
	overload: { n: "Overload", img: null, isdebuff: false },
	perfectplus: { n: "Perfect plus", img: null, isdebuff: false },
	prayrenewal: { n: "Prayer renewal", img: null, isdebuff: false },
	aggression: { n: "Aggression potion", img: null, isdebuff: false }
};
ImageData.fromBase64(i=>BuffInfo.buffs.familiar.img = i, "iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAB6UlEQVRIS72UPUsDQRRF0woi2FiIIoJgYyo/moCVoCBGEMFCsLNSJIJ/QGIVGxG1l1goaGGXSoyFKIi/QOyttLATMu4Z89bdl5fsWqzFYWbu7t6b92YmOefcv2GKWWGKWWGKmsvXz2CIa5vl/RYtCVPUHF3duO2Ds2D6sy5ubLnCzHy4TospaorlPTe1tBIGRoP/gilqCBvMTzoqIghK1xfOam8nTFEzlh93hYV1t1za9SEE9/YN+XBarN9vhylGwZgQquFQYM66u6vHh6Lv1O7dcf0peN32EExRwKxyeu6qD42wfRJMgCDPFitVP57UG+7w5cP1D4wENr9+MfMoo4VZN7e65oOoyJ/AZisxZB+ZM7KmMkLYR7h9+wps4p6xRRTCCOGIUyHIHmEcRQLg+b3hYa49YwuBiggjiBGGpydCYx1AFVG0n9Ai+NYEFXCvCGUuVREiF1yMJUz7WJgiyJ4QKi0lDF32icMjVervLUwR5BD4gxG0E2M/Dw4JIz9Ef5OEKQJhXGBGqpMTKScQ9DdJmCL7IkhFfv+a7QOe6e+SMEX2AWQtLSUYJCz6ThpMUYNpNID2ZhYGGEuABPPvot/rhClaECJQmX6eBlNsR+3u0d+pv1YkmGISaS+xxhSzwhSzwhSzweW+AbQ+QlX0mRk7AAAAAElFTkSuQmCC");
ImageData.fromBase64(i=>BuffInfo.buffs.adren.img = i, "iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAIAAAACtmMCAAACCElEQVRIS7XWX0vTcRTH8QkSyFwhKSpY0YVg4Gihc6JsiUoWmVYIEsIEUW/U+edG8EKQwJtChJ5AF130PLz2CXTbg/DW9/jI2fH85lai8GF8PTvnxfntN7elStnM/FBaWZt4cLuYgJZqYO3NtjVIaCaiqqKv+pnj+Q6SSrX4UPE9xI9HUR2CjFs/LHzfzpGTo7GNpWGhShKtivZHkjtdroo/j/MEDlQidWJtAb0SA6cZE+GSIrF+j0bRugnDb5fKyrtPH8j49Pvi5Jub0CjqCWslTK6slhVDRwslL5I6oi2YFCsHe0QoHOfB7FAQiUSh18TQRxjePf2lbH79NvJ5MckRbXNNVCn0ES8u7Bzdl/hj51Fo+1fRcxK5P7ffkUndliByr/tbu3yn0lxkbPt5jsxtVOC4LYizxS8q7pd6fbPGG4ni/kxOEaFa0IrlJ6+Ysv7mYnvbQ2b+vsxfvC6ePctx5mJ55EyF+lbn4/8QeQW5RvYyQqg/h/+cOqJQE3UrQGe6eiBYSuFMBS68McXVRL+mFpTIgVsBYaI4XlDCp4ZQDdYRhdqCDXbEQrQ1TRR1owhX6B74nR4A4hHIztRLIx8RtaZfsCYG1LjzzqciuNhQ0YdQ4Ejte0ZPKLS+6EszSThwjXo/+iI91m9c/OYi1iRUkz5WtE4/fiUG1GJP+eGm/Xf9myKbuQSEJ1EoVwG7xAAAAABJRU5ErkJggg==");
ImageData.fromBase64(i=>BuffInfo.buffs.overload.img = i, "iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAIAAAACtmMCAAABUUlEQVRIS73WMUvDUBSG4Ti2Rh38CV0tCFYUQZEMYgehzsUOIigUFFwENwedxM3dn+p3ecPxeHMT01gK7xTOeThTkmxQ9IeTnEbTLXV6m7eMeWWCtKxqjefrk6demzTpdagg1llXrxsqy9Z8PPRj2oIGDWKdBff+sKs+Xo7UfDoyVPkVbgoiB5po06T9r7d9lRSJRTuzFJPc3ec2IpwuRdRzsknWSzF5IAtaPp/OaHx5QcfFWRVlnTODmOSUNq9vZhbi4cFJ3ZmtxPvnR+XFneGeF5UtCkmIflRpOe9t+iKOEiKPli9Gc2rJYpVT3cUkR3XoasUGjiKU9ZWIoH9y5NGE6M/sJoIkxJYcgbL4S/TvnkVFOEQ58ftRLSQqUHbl/IjdzvQcr7IgVr8zLVHPKSGq/HJxZuRqoTmbVHZgKXo0cpsDIrgg/uefQrFiwqDofwPpgNSSjcGGfQAAAABJRU5ErkJggg==");
ImageData.fromBase64(i=>BuffInfo.buffs.perfectplus.img = i, "iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAC80lEQVRIS72U60uTYRiHRXQrKNLU5tw8b842D0PNch86mrY2c6OZTpunFMlzSbZVamYpHpIwTxSJkkUgiqGVGqF+SAkJqUjI/phf96tEY9xu+aE+XDzPe90n7r3bvAD8N1j5r2DlTjybtNPBx/4GVrqj8EYJHXzME6x0R5Stng4+5glW7kT8nX5EFzfSlY97gpUcurFpxDkeQW1/TI98jidYyRHfMogQw2XIs0twuKGXFJ/nDlZyxNR0QHQwmK7wiq3rhDhg+74bWOmKbmwKqvo/A5SVbTRYsnXfDazkiKlrR3znOJIGJhGQdpYUn+cOVnIk9c8ieXgeEf/jq69pG0FEyU1Eld+mRz7HE6x0JbHnFSLLmiDyPwRN61NSfJ4nWOmKumkIYXk18NnvD23vJJRVD0jzue5gpSvq5gF6V7XwCVchsWuCvpndCLtYTiE+fydYKaC63gNVw0MoajsRfcUBGf2YRXEpSLg3ilPjq0hpHYbMXEqpfD0HKwWU1e1Q1tOw6g5EltohNRZCY++DceYLMp4v4cTgNI60DEBhraR0vocrrBQINZchvNiBsKJGKCvvQmqpgH7qE7LnNmB4vY7MF8s4SQO11+5DrEmmEr6PM6wUkF0ogkRfAMm5AoTn1yA05ypMb9ZgWdyE+d1XGCc+Iv3JDFIdPfBLOEolfB9nWCkgzy6G9Pz2MJkhH5LMXGTPrCBv+SdyFr7DNL2GzJG3SGvuQ5BWRyV8H2dYKSA30TD6l5cZbbQhDcu4BBMNswrD3m/APPMZ+tE56GjYXu0xKuH7OMNKAVlWIeRZNsgEjMKGuVvDhM0sC9vDhM1Sb3VDrNZSCd/HGVb+RmqwIZi2C6GPU6q3wjS7irylTVjmv8E0uYL0oSkkVDTCd98BSud7OMNKZ4LOWGirfHp/VphpWO6HH3Suw/hyEce7RhF62khpfK0rrHRFFBgCcaAUCkspYgvroCiogiKnHH5KDYX5Gg5WusPbdw+8fcVbuMbcA69fyI/29WmtmR0AAAAASUVORK5CYII=");
ImageData.fromBase64(i=>BuffInfo.buffs.prayrenewal.img = i, "iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAADRElEQVRIS7WV60uUURDGt/8iCPKDEBkZpGl+yMjVIjWUXJYyL2gaWl6QLpaZlqwKaWblWpurFKGoZUmmqLFlYkIraBZZeAnMlNLIwCzM0Kedcc9e311dqw/P8r5zZua3M2fOeWUAViWZbI3hxyzbdSlJGpeTAMTnqBGVq10xUNLoTCJxXF4VKrs/oujxCA4dL14RUNLoTAJ0rWscX+aAsdlFlHRNQJmR/39hBHo/s4gCQ3UxWerVwShIyNFadOYVBlIbBUjK31L2BmNQVLrKYQJhpwGJP69x6Gcr6xdjUHhyDi639MMr6KDDRMLuaF1K5gdjkDzqFE5Ud0PbOYLIwnrsCIlzKaEzLf0YkwXEZqFMN4SKnim0DM3ynpzWNMNnX+w/AZpAEWn5XBGBaMJorPWf5lHYMYZ0bRuv/y2QYTQMVw17RIe0bWQW338DC4tgaG3/V2h0g8i71Y6AvdGSMPEnhGzXhUyO/opkHL7Riuv6SfR+nmfQkw9zONf0DopcDTx890gmE7Zj+ZUIVCZJ+ghZBciVKcjStuOibpQrItDJskZs3BYsmUTYvAMV3JnU0jq4efhJ+rK/6cHosHmnEqnqZh6UiMxyePqFSAYLG4FiVHd4enPqX2B3Yi7cPeXSMVYvRgeqsPBu97KgxDOlfOtn1L5Edd8UVE1vcORmB1/MYn8tY00JTAajQ1h0mp2z5Tp1gCqqez3NR+T5+C8G3tZPoOhBDx8jn/ADVjmsQELCQTjZ2n1DExB76R7S63t5oAamFzD5c+kL8HT0B842D/NaaGoBdgWau2MFWU4UQFNX9qiX94gqoYoIREeFRGC6EGid/LLLG8xdkkrqSBRA+5lR2gDV/T6+8evfznBFAkZwaivt34WaLv46bPUxTrNUUkfiAIPozCly1Uip0XN1zwytG/y2wCA6m9RGavP2yKNYu37TEshVGEkEesoV/K+LH/Zxcrp5qKL81mEeENrXde7eJhDHWiZaqUSCoLAEnrqUqi6+6vIaX3FF1Opgw41kCeI48eCqRCI6wDR1FboBZFd3wn9/kl1FphjLF1clEm7wkvMlQF9uN/ctkiD2tzW4KpE4ObuEry5HIJKdYTUSAGcgALI/e5pKefLwVWwAAAAASUVORK5CYII=");
ImageData.fromBase64(i=>BuffInfo.buffs.aggression.img = i, "iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAClklEQVRIS72W/UtTYRTHDyTZL+ElqH6QCswKAq2cL7hmL6ai4pZTCbTMDB1aips236Z3253CdvdKpauGIAT1Z347z3JxuzsbJqwfPj/s+5zzfDg8Z2ME4L8hhrVCDO3kDBfMUDf01Xb+KNecBjG08/NwAN8/9iEff4xw4OxCMbTz42AAx9lefNrrwfayA20tlzmWa6shhlZi+1meqh8FsxeZiAsbSy7MzC7wkVxfDTG0Ek98RsI8hJnMw4hlsPZBx7xvGZp2iY/lnkqIoZ105iuSqTyiRhor/i243eMcy7XVEEM7mew3pFgYNVJYWg6ipbWNY7m2GmJoJ5srQE0X28vUXqYmUzIjlmbZOu7dd3As11ZDDK2YycOiKJn6gkg0BX9gG9OvfXwk11dDDK1kWZJLsSx+gIiewNZmDIsLgdps45F5hELyCAf7eWTDOcRDJkJ+Hd1dPXws91RCDEuEG1/C7HqH45089jt8iLbPYefOLILNU5i+PsQlcl8lxLDEbsMoIpoXe9cmsaM9x5bmQZDcWKFBTJOLS+S+SoihYvOch0VjzHiRXW30j8xPQ5ihR+ijFi6V+yXEUKHzRFGWlFCyEMvWT2RvWDZOHVwq90uIocIqUugWWYBlb+kJXlAXOukml8t32BFDvcELgwVWwjxpUXZByYYxR08xSU546PS/JmKoJimXjf2WXXRjlWU+eoZX9BBeakc3NXNb+T12yoJdnsDQJspQy6I2siRbZNkM9WCCOjFIrdz69z0SYqioJNs4kb2n/uJGjtADLpfvsCOGCrUQSlBaEKtMbeM8v9nIP7yXQgxLOOtvwVl/u7j26qug3mzt/DDc5MBdauQSua8SYijRVHcVTXVXcIPO9mdHIYa1AfQLMXTLFSHSKD0AAAAASUVORK5CYII=");

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