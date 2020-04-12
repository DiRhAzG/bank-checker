///<reference path="/alt1lib.js">
///<reference path="/runeappslib.js">
///<reference path="/imagedetect.js">
///<reference path="/apps/alt1/alt1doc.js">
///<reference path="/imagelibs/tooltip.js">
///<reference path="tooltip.js">
"use strict";

BankReader.bankinterface = new InterfaceTracker(new Rect(-159, 28, 1, 1), 'data:image/png;base64,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');
BankReader.itemnumbers = new ImageSet("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAJCAYAAAB3wKHKAAABTUlEQVRIS42QUWLDMAxCe/9LZyGYCmTF3QdBPGS72+e6riWYZhesZynCLY2deRZzdaBxYpIHGzPc8uihZxfsnTUgl2ifZ00ZUUw8u87JlIu5vIOTOScTp4PTvVufnx0Z5+LKzmjaX4AXw5VLfrnvnbr8QXnmjZHDvZvOwov3u05vTx3zvCc5u81DL+dcHN53d+4/QAvKziDfhb6Dafo9Nt6f7HOubqH7M90nBudszAP1K5PBdy7mfH8UwjztKu8dxMxuZ/MZqMY627Nr4sUi9PItw5N1+RnDjzrIXcw9c57yxKYdII7VaVZ2nd/5Avc8kA/Bs5ec5aOcyTSrE9/nvYNnT/5+puvtLbk03VEs4ANiednqMkseip0eVabOb1Y3/SGSx+ltKf9RuZfzfkcxg2CEnUk9S9r13pn0313x3vXs0v5pB/K+7566YtfnD8l4/lbi9qaRAAAAAElFTkSuQmCC", [0, 7, 11, 18, 24, 29, 35, 42, 48, 55, 62, 69]);
ImageData.fromBase64(function (i) { BankReader.scrollstart = i }, "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAAkUlEQVQIW2Pk1TT/z/DmEYOIAAtDYaggQ6gpC8PTu88Z1h7/xbD0DBvD+28MDAwicgyMvFrm/xnfPGZozpBgSPPgYWD4+o3h4c0nDJ/efmNYeoKJYf5ZLob/wrIMjCATGd8+Zri5RoNBgOUPisJ3734zhC0XZPgvgqTw5U5tBobvP1EU/vzyi8F7oRCqiYQUAgCDTVcjawB2BwAAAABJRU5ErkJggg==");
ImageData.fromBase64(function (i) { BankReader.scrollend = i }, "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAAhUlEQVQIW2Pk1TT/z/j2McPLndoMDN9/MjB8/cbw8OYThk9vvzH8/PKLwXuhEMN/YVkGRpjCm2s0GARY/qAofPfuN0PYckESFIogmdicIcGQ5sGDYuKyE0wM885yIUxkePOIQUSAhaEwVJAh1IyV4emdZwxrj/9iWHqGjeH9NwYGBhE5BgC60VYjPg0gygAAAABJRU5ErkJggg==");
ImageData.fromBase64(function (i) { BankReader.emptycoins = i }, "iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAIAAACPoCp1AAADDUlEQVRIS7WT3UvTURjHz4Xku5tbuS2U1FDyLXNL8W04dItNc1taiVYKGqZYqRn5UiZehiBZQVdBXXUXdB0F3fQXFN0E3fZn9Pnt0eOv45xeLPhy+O38nvP57HnOpp5t72w9f/mfAlwtrT094TjpPtvorWny1DZnJaAAgl1aXVeLy2u5zrLWWwux2ZXYvSckend31Q/6Y9odnf1TsysAwc4/WlN3Fh7mlnoqIiPnoiN1MSvywKof9Me0Ozr2TYBgpxeX1dTc/VyX93TftfKu/iPjLMg5GKNGAhAscDVxe/qYAljfv7748/O95MenzW8fll9vb6R1iAC4GhufPI4ACjigB/Pl3Uy1q9ioFwFwNTx6Qwt87ZcOCwJh2dHk46ubbzZ7eGvUiwC46h8ezXX7fMGEpzWSISCgC05na6Zpfbx+Pl7JW6MeIFjgKpq8mneq3Nc54Ar0ZYgWAN150EoEPRn0Et4a9QDBAleRwSs8uTsuGxVGQHAHWsAq9GG/m/DWHuoBgu2LD9kELaEM4ZgxIjogXIP9dyW3QrEIwgj6EsMicJ7vzpSCnLcbozhkPoQO5FcrXHvolXqwfHvVm7QErraos6krbYoiJTrC1cMxuAQ0zVEgAuB7AqZ8CDr0K0J44PDvz1NMQDQ4eKYna2Krfpkb+/pWdgXhuHUHCPLbCh2NnSUN7ax2tKZbrFU/dG54rtuDQK5ddlgJm/E6hxYAV6FUB06/JQBUXNdqRwudasaNABDhbgFNBNz7156hg+7U/6C4pReB4Aw6ShHAMgTSltGBXRDiVxSMWx1ogUEvqvUTqmUaxoikA0NgH1FwcEh1J6wOHBd60gtqWoh0oEf0eKBcj4hkGFFKkBpRSUOHIdB07eCw/LlkRFCOvGTgKYG36qBAHAXVTdBl5YwRTJku2Vu118GeIG2gHxbRJLtqCGhpSzYBgv2nA+Pw8SNEHdncF3Qmr4ugkFnXBrIVEQBXHYmxfG9l6cVIaSBsrdkLWOCqPTmaV1ZRcKY+6wELXPljQ83heHMkkf2E4/7Y0F+cv82FFdwxCwAAAABJRU5ErkJggg==");
ImageData.fromBase64(function (i) { BankReader.searchimg = i }, "iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAIAAACPoCp1AAADNElEQVRIS7WT/U9SURjHT7+EWSpiKTRdWZPlCykQDVSKecGBJO/qQM3MF2KawWiiWM5e1szKZVab/lBrc/0h/VBztfqX+l4ePF6O1mrdts/ODuee5/M9z7lc9nR949nLzf8E5CybXz5adbLmfJu+yVRnbFcFqCCENrt4n2VyeY221jaa9qUWfLfvAe9sceQT/vPQFc5+VWoBQmjvzOdZMn1XU13X4Bm64B1q9snQBCOf8J+HrnCUixBCO53JsYmZOY1Of1oaqO/qUxEIoYWcjU1O/0kAY0eUCE8PQgGQs8T1m78PIGNfrys+GJ6ZTIDhaHFR2KmEAiBn0fgwDzDYewVg6fdJyfHhrdfPd7bfvNvaeLiUWcqmsrPjFCPs51AA5KwvGtfUGAzOYJ3NI0AHh3r3y6fvXz/DDjZfPBIyhCoCQmghZ95QrOxUvaHTr7NKAijGhcD+49sujk8dvH21tvY4v7I4t5CZxlPsEaoICKGFnHn6w5jVOK4JO+Tju504Ps5Odh6wvrpMTWRSo9SEUAsghFYKRBQBZpcSlI3GYzvvt7idB6ADfksTIzE5oLQWUIAbAVIwSgHai91KUIYb+PhhG1IegIbwDg4GUImu4wovpwCcnvWE5ADdZa/W1KWEAmCHFCNNYMf9rD7I4R3QFRUDSmsBhNBCvhdglYQdKBsI+yHCeeElYOfHz6Wn+Dch1AIIiwHugPwOKKCqrbOy1Y4Rc0xQiUuADsALnqzMkx1/ITxK3ZCPX9nqwGYqKRjw00EBkDNXoQOtRapssVc02wiaoxgHhAhGtAI13QzZcXy6H9rMyzEBEBY76C58BxXmHnosQBnp5AguBF6C7LfGotSBUFLE3AOtC/8iZ0DugAJOGC0HgQJMxf14pYDfO0FzoYQHOPsjrDsod1DVcVV+1mT+FdxI8M2Y43uUV5T7jRYI9wIKV4TXUrLjbzg0A0JoIS8E6BspoPycSQmtCCOhnAPYgXKbHKBv3OugEIAHKkIBJR0IO/6R/YDO0CAFHEezRqtaUADkzBFMHNOfrb7kqba65VE9oIWc2UPxstqG8jMtqgMt5Mzii7S7A+2eoPq4AxZf5CcT1m3Mu9H7egAAAABJRU5ErkJggg==");
ImageData.fromBase64(function (i) { BankReader.slotoutline = i }, "iVBORw0KGgoAAAANSUhEUgAAACgAAAAlCAYAAAAwYKuzAAACFElEQVRYR83YzStEYRTH8aMYxrssWGCB1HiJYjakxIaVnZVCWJCaDc1ixOSluHPNGO/XRpONTFNKSaT508b53q5/4TqL33Sfe5/pfDpPz3SfkXQ6XbX2+Vmd+vqqSaXeIyaiFkzYhIv49Nxw/+DIdk9/7MxCsGDCJsfH3zXciLR3ZjWuJqM5/6dQG0MWEzaAEVX/TTit6+g+0qQ1hyGHmkcYsGDCJvulkg/koWY/2tWX1OxpdkMONZMYsGDCJo7zAdAJcExKaHYaeoe2www1g9p7WDBhk0KhUKvr7egDOpfQyVuaTc16yKHmVoBMYsImnucBzCDX0LnNpoGxVc1KyFmlNgYsmLDpJinVBcBdnUC71/lCc2x8OcxQk9oYsGDCJq77CtA1CHSxSfLpxywQmzjFYlQHFwaBF9jYJNHY2ETWGhATNr+DVoF+B/WjXgc5g8AcNvtAXeeG0fjUpTUgJmz8DgLMGwTmsQFsNAxslHz+BeCVQeAVNjYJwGuDwGtsLHGTVSA2OfHeAN4YBN5gA9isJ6hba0BM2CT3/GwWiI1dDPDOIPAOG0vcooN7g8B7bLywmgVio4OtOngwCHzAxiYxC8Tmd3BydsGzBsTkd1BP72aB2OTMK7YFQFMHd0zY/CWemV880Jum/vpQ4IECW3ijrl/aSMyB1JuPFoIFEzYpl8tVXNBJWmohWDBhk0qlYjgV+QUq5JJ+2gDDBQAAAABJRU5ErkJggg==");t57Rpc2xd9JGI2iKzp2azLM4Qk5X6qZdVQ8vzxgEvsna
ImageData.fromBase64(function (i) { BankReader.tabsep = i }, "iVBORw0KGgoAAAANSUhEUgAAAAcAAAAJCAIAAABxOqH0AAAATUlEQVQYV2P8f5qVARV0rFNmkDN0A7KUpBnvbmCBiAIBiAWUkBL9zsx2noX9r5SWLVCECSyHDqgp+vErwg1Q0UevOT3rdZmYwW5nYAAAnAEOeTAI58QAAAAASUVORK5CYII=");

ImageData.fromBase64(function (i) { BankReader.topleft = i }, "iVBORw0KGgoAAAANSUhEUgAAAAoAAAALBAMAAAC0QAErAAAAMFBMVEUAAAENGB4NGiETICYTIysWKC4TJjEVKDIaKzIcMTsjMjsrOkItP0kAAAAAAAAAAAAhBG+zAAAAQklEQVQY02PQ8HBqcmFwcVJRUWFwdlJx8WBQUmtR8WBQ6ejqWMWgpLKBgYFBRf0AkFTVAJEiYBENlwlAUqlpAwMDANLTDYb74IU1AAAAAElFTkSuQmCC");
ImageData.fromBase64(function (i) { BankReader.botright = i }, "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAAEx0lEQVRIS7WVW2gcVRjH58zMzuzsbHY3t01iL5sNjZqKtTEptWKstUGhKKlSIdJSUEFSKWhFRB988EURShUq7YPUF21V0tZiWwRFjG2MQptaYwirSYybNMlOstmd285l5+Y3mU1IdpO+NP3zXzjn7Hd+c8433zmDjn5yGLs7Qh8dPXz6F7XQWzvt38ngpuUYtrnmBixumJgJrbU2YHEjj1m2ueYGLG4YgLZWM4RoUlZKjfPjw2BoQBcGi8JKDVgy767aKiR/uWBneWGufWvjM+0HyisiuZyUTCZ/+rX3+hhHhStxknSDHMfUVEMW7LyOCJJkgyQThL8AS7S0bktwEuZA0HLbjiFlO3duP9jZSZBI0xVVkxFh1m+IGvz0+EyOoPxAtjQlHpj9/O36d1958MX2WAWuXOmfxn30fdEI8VDztpG0UAJ2YBXVpP36qy9peu5qb+/xU19c6bvuQ0ZZyB+OMMOJ/wycRgSR59Mnj0RnMuj9E4NSjti/d/vDcfy7nmS8JopbJmDsUhuK3LG7LW9oQ0ODJ76+JFLl4O4fb44Mj0EFPBCvggDHtghLra+hT317q3+KPn75VudbZ1u3bDzQxvJZEbcsSNcKggzWx9ZBHn7r66cilTjlB0Pj75FJyEO0OgwBbpgFW8RwlMcpmgqVj8zhZy/f3Ndemc1kcdvGkG2X2jHyAYbNKWJiYoIkKW8QGlOzsmU4NEVDAIzA8OgI197MmDkJsy2S9v98Y/KeClNVNXfVJXmetw11owI6KyoIJ7xBaKi6ZZoOQpRjWQAoJxWEsGd3sFtqJT07Z6kKaaqWLDgOclcNyV7RwNW0HIYgwPFGgKLogHSrzs5r68j06ffqYzX+73u5T7tq39mjPrWJP/Q0eWNIZAJBomlz6wSfcWOXyNI1NcPVVdEclx74M6GrqiEJnvMSH1sfTk2LQUI8+ebWICl+eXHywwumkOVb4vgjTUwypX5wzqqr2YSef+HQ7+OjBeSC1LnUGy/vYgMhkqRp2q1fXdcUVVA1FZRNC4xjvPbcRkfnPj4zcH4g4GPLbMMwtZxbMz6aDAQfbWjyEgL7XWYoauCybLiiPBouq4R2gAkGmDA8A7hVtAJcJSccOXbtwmCQLosQJOVjWKY8Gqiso0MV0F3MdTEaEARB0pTfT7HhkIv2+wMwyGdysbKZg08GuVTy2LmpvmHbFwghhBdPh8XZGO7eH4tVscQIEe4DSILy+QcHEl+dOd/9zaUG4q+OZj0xOvLZDwobicKBnucWzwUDFlbtIKzY8Kdp6ib8dFWUMz09Vysqa0OhSCotXfvH7P6jLlxV42doqJ2iiYsGLG65CSkxhsERV1RZzgmCmG5uaZJluGewYbmhP3N/dTQKXK8EiycuGLBerlcwFAOUhCjNiRK/IVYt8rOiyN+7eT0b8pMkglNzGy54PteAXklQZAAVpKwgzopShuNmOC4FFxOc8kLEbeWi4ZStJgDBAyRZBu/paNu7b7fHhSVDNuAK8cJWFGBxe8kuFg2FCRTPXqjXBqjH9QRhRRMXDVj0+K6uf/nhQuyCrDx8AAQbvp2rC/dRNBv2vjWlaog0orYnusaEYvSdKx5uXPU13qHmXyOk5i4IsGjHY12F3toKw/4H+ZedbvrMU5QAAAAASUVORK5CYII=");
ImageData.fromBase64(function (i) { BankReader.placeholderzero = i }, "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAPElEQVQYV22NUQoAMAhCq4t787XKggYTStGPJ+5eB2gYM5+wmEFZnHBK1dw6P/qXQKetDRhg/hoTQKDIBVugMuDFBvhlAAAAAElFTkSuQmCC");


function BankReader() {
	var me = this;
	this.tooltipReader = new PC.TooltipReader();
	this.pos = null;
	this.state = null;
	this.overlayState = null;
	this.tooltipState = null;
	this.tracking = false;
	this.config = {
		timers: {
			scrollcheck: 70,
			tooltipMeta: 200,
			tooltip: 40,
			overlay: 5000
		},
		overlay: {
			scrolldelay: 0,
			notext: true
		},
		maxcoldif: 130,
		askdifvalue: 10000,//At what value to ask the user about the item
		maxrowcombinedist: 13//max px distance between the estimated y coord to merge 2 rows
	};

	this.isopen = false;
	this.message = qw;

	//private vars
	var hoverwaiting = [];//reads that are waiting for confirmation that scroll didnt change
	var readcount = 0;
	var trackTooltipInterval = null;
	var trackInterval = null;
	var trackCallback = null;

	//constants
	var slotsize = 44;
	var iconsize = 36;

	var backcolor = [30, 49, 70];
	var backcolorlegacy = [62, 53, 40];

	this.find = function (img) {
		if (!img) { img = a1lib.bindfullrs(); }

		//==== find bank ====
		//TODO ditch the interfacereader structure

		var botright = a1lib.findsubimg(img, BankReader.botright);
		var topleft = a1lib.findsubimg(img, BankReader.topleft);
		if (botright.length == 0 || topleft.length == 0) {
			me.message("Couldn't find bank interface");
			return false;
		}
		var loc = { x: topleft[0].x + 5, y: topleft[0].y + 5, width: -1, height: -1 };
		loc.width = botright[0].x + 48 - loc.x;
		loc.height = botright[0].y + 38 - loc.y;
		me.message("Bank found at " + loc.x + "," + loc.y);

		//==== init vars ====
		var bankarea = {
			x: loc.x,
			y: loc.y,
			w: loc.width,
			h: loc.height,
			scrollbar: null,
		};
		var bankinner = {
			x: bankarea.x + 11,
			y: bankarea.y + 78,
			w: bankarea.w - 11 - 239,//TODO get exact numbers
			h: bankarea.h - 78 - 50//TODO
		};

		//==== initial run ====
		me.pos = {
			area: bankarea,
			inner: bankinner,
			columns: Math.floor(bankinner.w / 44),
			legacy: false
		};

		if (!me.state) {
			me.state = {
				slots: [],
				tab: null,
				tabs: [],
				tabspaces: [],
				rows: [],
				scrollbar: null,
				rowoffset: -1,
				pxoffset: -1,
				rawscrolltop: 0,
				tooltip: null,
				allslotsvalid: true,
				scanretried: 0,
				firstscan: 0,
				lastScroll: 0
			};
		}

		return true;
	}

	this.read = function (img, forceread) {
		if (window.alt1 && !alt1.rsActive) {
			me.isopen = false;
			me.stopOverlay();
			return null;
		}
		if (!me.pos) { return null; }
		if (!img) {
			if (window.alt1) {
				img = a1lib.bindregion(me.pos.area.x, me.pos.area.y, me.pos.area.w, me.pos.area.h);
				if (!img) { qw("failed to get image"); return null; }
			}
			else { qw("Can't obtain an image"); return null; }
		}
		var changed = false;
		//can not have a tooltip, added benifit of ignoring it when user is searching
		var searchbuf = img.toData(me.pos.area.x + me.pos.area.w - 48, me.pos.area.y + me.pos.area.h - 38, BankReader.botright.width, BankReader.botright.height);
		var isopen = a1lib.simplecompare(searchbuf, BankReader.botright, 0, 0) !== false;
		if (!isopen) {
			if (isopen != me.isopen) {
				me.isopen = false;
				me.stopOverlay();
				qw("bank window closed");
			}
			return null;
		}
		if (isopen != me.isopen) {
			me.isopen = true;
			me.startOverlay();
		}

		//=== find bank state ===
		var tab = me.readTabNr(img);
		var scrollbar = me.readScrollbar(img, me.state && me.state.scrollbar);

		//check if we are looking at a new screen
		var scrollchanged = (!(me.state.rawscrolltop == 0 && !scrollbar) && me.state.rawscrolltop != scrollbar.scrolltop);
		var tabchanged = me.state.tab != tab;
		var loadretry = false;
		if (scrollchanged) {
			me.state.lastScroll = Date.now();
		}
		if (tabchanged || scrollchanged) {
			me.state.firstscan = Date.now();
			me.state.scanretried = 0;
		}
		else if (me.state.scanretried < 2 && me.state.firstscan + (me.state.scanretried + 1) * 500 < Date.now()) {
			loadretry = true;
			me.state.scanretried++;
		}

		//update bank state with what we know
		me.state.tab = tab;
		me.state.scrollbar = scrollbar;
		me.state.rawscrolltop = (scrollbar && scrollbar.scrolltop) || 0;

		//check if the state changed enough to read the items again
		if (forceread || tabchanged || scrollchanged || loadretry || !me.state.allslotsvalid) {
			var buffer = img.toData(me.pos.area.x, me.pos.area.y, me.pos.area.w, me.pos.area.h);
			qw(new Date().toLocaleTimeString(), "reading bank images");
			if (me.readInner(buffer, scrollbar, tab)) {
				me.readItems(buffer);
				changed = true;
			}
		}
		//scroll didnt change, add reads that needed this confirmation
		if (me.state && !tabchanged && !scrollchanged) {
			for (var a = hoverwaiting.length - 1; a >= 0; a--) {
				if (!me.tooltipIntersect(hoverwaiting[a].slot, me.tooltipState && me.tooltipState.area, 10)) {
					if (me.confirmItem(hoverwaiting[a].slot, img)) {
						hoverwaiting[a].slot.nameread = hoverwaiting[a].nameread;
						changed = true;
					}
					else {
						qw("bank changed");
					}
					hoverwaiting.splice(a, 1);
				}
			}
		}

		if (changed && trackCallback) { trackCallback(me.state); }
		if (changed) { me.invalidateOverlay(); }
		return me.state;
	}

	this.readTabNr = function (img) {
		var x = 55;
		//TODO get exact bound width
		for (var tabnr = 0; tabnr * 48 + 48 < this.pos.area.w; tabnr++) {
			var pixel = img.toData(me.pos.area.x + 54 + 48 * tabnr, me.pos.area.y + 36, 1, 1);
			var sum = pixel.data[0] + pixel.data[1] + pixel.data[2];
			if (sum > 400) { return tabnr + 1; }
			if (sum < 200) { break }
		}
		return 0;
	}

	var isNumberCol = function (data, i) {
		var r =
			data[i] == 255 && data[i + 1] == 255 && data[i + 2] == 0 ||//yellow (1)
			data[i] == 255 && data[i + 1] == 255 && data[i + 2] == 255 ||//white (K)
			data[i] == 0 && data[i + 1] == 255 && data[i + 2] == 128 ||//green (M)
			data[i] == 255 && data[i + 1] == 203 && data[i + 2] == 5;//yellowish (tab seperator)

		//data[i] = data[i + 1] = data[i + 2] = data[i + 3] = 255;
		return r;
	}

	var readbuffer = function (img, slot, imgx, imgy, backx, backy) {
		imgy += 9;
		var clone = img.toData(backx + imgx, backy + imgy - 9, 34, 34);
		var data = clone.data;
		for (var x = 0; x < clone.width; x++) {
			for (var y = 0; y < clone.width; y++) {
				var i = 4 * x + 4 * clone.width * y;
				var r = (me.pos.legacy ? backcolorlegacy[0] : backcolor[0]);
				var g = (me.pos.legacy ? backcolorlegacy[1] : backcolor[1]);
				var b = (me.pos.legacy ? backcolorlegacy[2] : backcolor[2]);
				var colmargin = 0;
				if (slot.hasborder) {
					var islot = 4 * (x + 4) + 4 * BankReader.slotoutline.width * (y + 3);
					var aslot = BankReader.slotoutline.data[islot + 3] / 255;
					var aback = 1 - aslot;
					r = aback * r + aslot * BankReader.slotoutline.data[islot + 0];
					g = aback * g + aslot * BankReader.slotoutline.data[islot + 1];
					b = aback * b + aslot * BankReader.slotoutline.data[islot + 2];
					colmargin = 10;
				}
				var d = Math.abs(r - data[i + 0]) + Math.abs(g - data[i + 1]) + Math.abs(b - data[i + 2]);
				if (d <= colmargin) {
					data[i + 0] = data[i + 1] = data[i + 2] = data[i + 3] = 0;
				}
			}
		}
		return clone;
	}

	this.tooltipIntersect = function (slot, ttarea, margin) {
		if (ttarea) {
			var hhit = ttarea.x - margin < slot.readinfo.x + slotsize && ttarea.x + ttarea.w + margin > slot.readinfo.x;
			var vhit = ttarea.y - margin < slot.readinfo.y + slotsize && ttarea.y + ttarea.h + margin > slot.readinfo.y;
			if (hhit && vhit) { return true; }
		}
		return false;
	}

	this.readItems = function (buffer) {
		qw("reading Items");
		readcount++;
		var allvalid = true;
		var hadempty = false;
		var bufref = new ImgRefData(buffer, new Rect(0, 0, buffer.width, buffer.height));
		for (var bankx = 0; bankx < me.pos.columns; bankx++) {
			var imgx = me.pos.inner.x - me.pos.area.x + bankx * slotsize + 5;
			for (var banky = 0; banky < me.state.rows.length; banky++) {
				var slot = me.state.slots[bankx + banky * me.pos.columns];
				var imgy = me.pos.inner.y - me.pos.area.y + me.state.rows[banky].y + 5;
				slot.readinfo = { x: imgx, y: imgy, readnr: readcount };
				if (slot.isempty) { continue; }
				if (slot.imginfo && slot.imginfo.valid) { continue; }

				//check if we hit a tooltip
				if (me.tooltipIntersect(slot, me.state.tooltip, 5)) {
					allvalid = false;
					continue;
				}

				var transbuf = readbuffer(bufref, slot, imgx, imgy, 0, 0);
				slot.setBuffer(transbuf);
				if (!slot.imginfo.valid) {
					if (!slot.imginfo.empty) { allvalid = false; }
					else { hadempty = true; }
				}
			}
		}
		qw("Columns: " + me.pos.columns);
		qw("Rows: " + me.pos.rows);
		me.state.allslotsvalid = allvalid;
	}

	this.readScrollbar = function (img, old) {
		var bar = {
			raillength: me.pos.inner.h - 29,
			start: -1,
			end: -1,
			x: me.pos.inner.x + me.pos.inner.w + 1,
			y: me.pos.inner.y + 16
		};

		var buffer = img.toData(bar.x + 5, bar.y, 3, bar.raillength);

		//==== find bar imgs ====
		var isbar = function (y) {
			var i1 = 4 * 0 + 4 * buffer.width * y;
			var i2 = 4 * 2 + 4 * buffer.width * y;
			return coldiff(210, 144, 24, buffer.data[i1], buffer.data[i1 + 1], buffer.data[i1 + 2]) < 20
				&& coldiff(18, 24, 26, buffer.data[i2], buffer.data[i2], buffer.data[i2]) < 20;
		}
		var israil = function (y) {
			var i = 4 * 0 + 4 * buffer.width * y;
			return coldiff(14, 22, 26, buffer.data[i], buffer.data[i + 1], buffer.data[i + 2]) < 10;
		}

		var lastrail = true;
		for (var y = 0; y < bar.raillength; y++) {
			if (lastrail && isbar(y)) {
				bar.start = y;
				break;
			}
			lastrail = israil(y);
		}
		var lastbar = false;
		for (var y = 0; y < bar.raillength; y++) {
			if (lastbar && israil(y)) {
				bar.end = y;
				break;
			}
			lastbar = isbar(y);
		}
		if (lastbar) { bar.end = y; }

		//==== check results ===-
		if (bar.start == -1) {
			if (bar.end != -1 && old) { bar.start = bar.end - (old.end - old.start); }
			else if (israil(0) || israil(bar.raillength - 1)) { return old; }
			else { return false; }
		}
		if (bar.end == -1) {
			if (bar.start != -1 && old) { bar.end = bar.start + (old.end - old.start); }
			else if (israil(0) || israil(bar.raillength - 1)) { return old; }
			else { return false; }
		}

		//==== calc scroll ====
		bar.barlength = bar.end - bar.start;
		bar.barfrac = (bar.barlength + 1) / bar.raillength;//The +1 seems to approximate the actual result better
		bar.scrollfrac = (bar.raillength == bar.barlength ? 0 : bar.start / (bar.raillength - bar.barlength));
		bar.scrollheight = Math.round(me.pos.inner.h / bar.barfrac);
		bar.scrolltop = Math.round((bar.scrollheight - me.pos.inner.h) * bar.scrollfrac);
		return bar;
	}

	this.readInner = function (buffer, scrollbar, tab) {
		var tabspaces = (tab == 0 ? findTabSpaces(buffer) : []);
		me.state.slots = [];
		me.state.tabspaces = tabspaces;
		me.state.rowoffset = -1;
		me.state.pxoffset = -1;
		me.state.tooltip = null;
		me.state.allslotsvalid = true;

		if (!me.state.tabs[tab]) {
			var tabname = (tab == 0 ? "all" : "tab " + tab);
			me.state.tabs[tab] = { name: tabname, rows: [], tabspaces: [], height: (scrollbar ? scrollbar.scrollheight : me.pos.inner.h) };
		}

		//==== find the y offset of the first row ====
		if (tabspaces.length != 0) {
			if (tabspaces[0].y - 6 - slotsize >= -5) { me.state.pxoffset = (tabspaces[0].y - 6 + 5) % slotsize - 5; }
			else { me.state.pxoffset = (tabspaces[0].y + 9); }
		}
		else if (!me.state.scrollbar) { me.state.pxoffset = 1; }
		else {
			var a = me.getRowOffset(buffer);
			if (a != null) { me.state.pxoffset = a % slotsize; }
			else { me.message("Need at least one item with a stack amount in the screen to be able to read the icons"); return false; }
		}

		//==== check if we know the exact scroll offset ====
		if (tab != 0) { me.state.rowoffset = Math.round((me.state.rawscrolltop + me.state.pxoffset) / slotsize); }
		else if (!me.state.scrollbar) { me.state.rowoffset = 0; }
		else if (tabspaces.length != 0) {
			var ntabs = (tabspaces[0].y < me.state.pxoffset ? tabspaces[0].tabnr : tabspaces[0].tabnr - 1);
			me.state.rowoffset = Math.round((me.state.scrollbar.scrolltop - ntabs * 15) / slotsize);
		}
		else {
			me.message("Unknown rowoffset");
		}

		me.state.rows = [];
		me.state.slots = [];
		for (var rowy = me.state.pxoffset; rowy + slotsize < me.pos.inner.h + 5; rowy += slotsize) {
			//find any matching rows
			var matchrow = null;
			for (var a = 0; a < me.state.tabs[tab].rows.length; a++) {
				if (Math.abs(me.state.tabs[tab].rows[a].scrolly - rowy - me.state.rawscrolltop) <= me.config.maxrowcombinedist) {
					matchrow = me.state.tabs[tab].rows[a];
				}
			}

			//make and combine new row
			var tabrow = { y: rowy, scrolly: rowy + me.state.rawscrolltop, slots: [] };
			if (!matchrow) { me.state.tabs[tab].rows.push(tabrow); }
			me.state.rows.push(tabrow);
			for (var column = 0; column < me.pos.columns; column++) {
				var slot = matchrow ? matchrow.slots[column] : null;
				if (!slot) {
					var hasborder = false;
					if (tab != 0 && column == 0 && rowy + me.state.rawscrolltop < 10) { hasborder = true; }
					else if (tab == 0 && column == 0 && tabspaces.find(function (space) { return rowy - 30 < space.y && rowy > space.y; })) {
						hasborder = true;
					}
					slot = new ItemSlot(hasborder);
				}
				me.state.slots.push(slot);
				tabrow.slots[column] = slot;
			}

			//check if we have to skip a tabseperator for next row
			if (tabspaces.find(function (space) { return rowy + slotsize / 2 < space.y && rowy + slotsize / 2 * 3 > space.y + 15; })) {
				rowy += 15;
			}
		}

		//add tabspaces
		for (var a = 0; a < tabspaces.length; a++) {
			var tabmatch = false;
			for (var b = 0; b < me.state.tabs[tab].tabspaces.length; b++) {
				if (Math.abs(me.state.tabs[tab].tabspaces[b].scrolly - tabspaces[a].y - me.state.rawscrolltop) <= me.config.maxrowcombinedist) { tabmatch = true; break; }
			}
			if (!tabmatch) { me.state.tabs[tab].tabspaces.push({ y: tabspaces[a].y, scrolly: tabspaces[a].y + me.state.rawscrolltop, tabnr: tabspaces[a].tabnr }); }
		}

		//find possible tooltips
		me.state.tooltip = PC.TooltipReader.searchBuffer(buffer);
		if (me.state.tooltip) {
			var tooltiprect = me.state.tooltip;
			var bordersize = 5;
			tooltiprect.x -= bordersize; tooltiprect.y -= bordersize; tooltiprect.w += 2 * bordersize; tooltiprect.h += 2 * bordersize;
		}
		return true;
	}

	me.confirmItem = function (slot, img) {
		var readinfo = slot.readinfo;
		if (readinfo.readnr != readcount) {
			qw("couldn't confirm slot as it was read in the last read.");
			return true;//TODO handle this?
		}
		if (!slot.imginfo) {
			qw("tried to confirm slot without imginfo");
			return false;
		}
		var buf = readbuffer(img, slot, readinfo.x, readinfo.y, me.pos.area.x, me.pos.area.y);
		var imginfo = getImageInfo(buf, new Rect(0, 9, 32, 32 - 9));
		var r = imginfo.maskhash == slot.imginfo.maskhash;
		if (!r) {
			slot.reset();
			slot.setBuffer(buf);
		}
		return r;
	}

	me.getRowOffset = function (buffer) {
		for (var bankx = 0; bankx < 10; bankx++) {
			var previousyellow = 0;
			for (var imgy = 0; imgy < me.pos.inner.h - 10; imgy++) {
				var yellow = 0;
				for (var imgdx = 0; imgdx < 5; imgdx++) {
					var i = 4 * (me.pos.inner.x - me.pos.area.x + bankx * 44 + 5 + imgdx) + 4 * buffer.width * (imgy + me.pos.inner.y - me.pos.area.y);
					if (isNumberCol(buffer.data, i)) { yellow++; }
				}

				if (yellow != 0 || previousyellow == 0) {
					previousyellow = yellow;
					continue;
				}
				previousyellow = yellow;

				var amount = readAmount(buffer, me.pos.inner.x - me.pos.area.x + bankx * 44 + 6, me.pos.inner.y - me.pos.area.y + imgy - 8);
				if (amount) { return imgy - 8 - 5; }
			}
		}
		return null;
	}
	var findTabSpaces = function (buffer) {
		var locs = a1lib.findsubimg(buffer, BankReader.tabsep, null, 8, me.pos.inner.y - me.pos.area.y, 7, me.pos.inner.h);
		var r = [];
		for (var a = 0; a < locs.length; a++) {
			var n = readAmount(buffer, locs[a].x + 21, locs[a].y);
			r.push({ y: locs[a].y - (me.pos.inner.y - me.pos.area.y) + 1, tabnr: +n - 1 });
		}
		return r;
	}

	me.allTabSlots = function (tab) {
		var slots = [];
		if (!tab) {
			return slots;
		}
		for (var b = 0; b < tab.rows.length; b++) {
			var row = tab.rows[b];
			for (var c = 0; c < row.slots.length; c++) {
				slots.push(row.slots[c]);
			}
		}
		return slots;
	}

	me.getSlotsValue = function (slots) {
		var mintot = 0;
		var maxtot = 0;

		for (var a = 0; a < slots.length; a++) {
			var slot = slots[a];
			var price = slots[a].price;
			if (price) {
				var min = 0;
				var max = 0;
				if (price.userconfirmed) {
					min = max = price.selected.value;
				} else if (price.options.length != 0) {
					min = Infinity;
					for (var b = 0; b < price.options.length; b++) {
						max = Math.max(max, price.options[b].value);
						min = Math.min(min, price.options[b].value);
					}
				}
				mintot += min * slot.amount;
				maxtot += max * slot.amount;
			}
		}

		return { min: mintot, max: maxtot, avg: (maxtot + mintot) / 2, maxdif: (maxtot - mintot) / 2 };
	}

	//==========================================================================================
	//======================================== overlays ========================================
	//==========================================================================================
	me.startOverlay = function () {
		me.stopOverlay();
		me.overlayState = {
			timer: 0,
			lastOverlay: 0,
			invalidated: true
		};
		me.drawOverlay();
	}
	me.stopOverlay = function () {
		if (window.alt1) {
			alt1.overLayClearGroup("missingslots");
			alt1.overLayContinueGroup("missingslots");
			alt1.overLayClearGroup("bankscroll");
			alt1.overLayContinueGroup("bankscroll");
		}
		if (me.overlayState) {
			clearTimeout(me.overlayState.timer);
		}
		me.overlayState = null;
	}
	me.invalidateOverlay = function () {
		if (me.overlayState) {
			me.overlayState.invalidated = true;
			me.drawOverlay();
		}
	}
	me.drawOverlay = function () {
		if (!window.alt1) { return; }
		if (!me.pos) { return; }
		if (!me.overlayState) { return; }
		//fix timing stuff

		var scrolltimeout = me.state.lastScroll + me.config.overlay.scrolldelay - Date.now();
		if (scrolltimeout > 0) {
			clearTimeout(me.overlayState.timer);
			me.overlayState.timer = setTimeout(me.drawOverlay, scrolltimeout);
			alt1.overLayClearGroup("missingslots");
			alt1.overLayRefreshGroup("missingslots");
			me.overlayState.invalidated = true;
			return;
		}
		if (!me.overlayState.invalidated && me.overlayState.lastOverlay + me.config.timers.overlay * 0.7 > Date.now()) {
			return;
		}
		clearTimeout(me.overlayState.timer);
		me.overlayState.timer = setTimeout(me.drawOverlay, me.config.timers.overlay);
		me.overlayState.lastOverlay = Date.now();

		me.drawScrollOverlay();

		//draw stuff
		alt1.overLaySetGroup("missingslots");
		alt1.overLayFreezeGroup("missingslots");
		alt1.overLayClearGroup("missingslots");
		for (var a = 0; a < me.state.rows.length; a++) {
			var row = me.state.rows[a];
			var y = me.pos.inner.y + row.y;
			for (var b = 0; b < row.slots.length; b++) {
				var slot = row.slots[b];
				var x = me.pos.inner.x + slotsize * b;
				me.drawItemOverlayInner(slot, x, y);
			}
		}
		var tab = me.state.tabs[me.state.tab];
		var tabvalue = me.getSlotsValue(me.allTabSlots(tab));
		var valuestr = smallu(tabvalue.avg, true) + (tabvalue.maxdif != 0 ? " \u00B1 " + smallu(tabvalue.maxdif, true) : "");
		alt1.overLayText("Tab: " + valuestr, a1lib.mixcolor(255, 203, 5), 12, me.pos.area.x + 6, me.pos.area.y + 5, 10 * 1000);

		//PC.TooltipReader.drawOverlay(me.tooltipState,true);
		alt1.overLayRefreshGroup("missingslots");
		alt1.overLaySetGroup("");
	}
	me.drawScrollOverlay = function () {
		if (!window.alt1) { return; }
		alt1.overLaySetGroup("bankscroll");
		alt1.overLayFreezeGroup("bankscroll");
		alt1.overLayClearGroup("bankscroll");
		var scrollbar = me.state.scrollbar;
		if (!scrollbar) {
			alt1.overLayRefreshGroup("bankscroll");
			return;
		}
		var tab = me.state.tabs[me.state.tab];
		if (!tab) { return; }
		var rows = tab.rows.concat(tab.tabspaces).sort(function (a, b) { return a.scrolly - b.scrolly; });

		var drawgap = function (start, end, col) {
			alt1.overLayRect(col, scrollbar.x, Math.round(scrollbar.y + start / scrollh * scrollbar.raillength), 5, Math.round((end - start) / scrollh * scrollbar.raillength), t, 4);
		}

		var t = me.config.timers.overlay + 500;
		var scrollh = scrollbar.scrollheight;
		var lasty = 0;
		for (var a = 0; a < rows.length; a++) {
			var row = rows[a];
			if (row.scrolly > lasty + 0.5 * slotsize) {
				drawgap(lasty, row.scrolly, a1lib.mixcolor(255, 0, 0));
			}
			var pricelessitem = false;
			var missingitem = false;
			if (row.slots) {
				for (var b in row.slots) {
					var slot = row.slots[b];
					if ((!slot.price || !slot.price.selected) && !slot.isempty && slot.amount > 0) {
						if (slot.price && slot.price.nameattempts.length != 0 && !slot.price.selected && !slot.loading) {
							pricelessitem = true;;
						} else {
							missingitem = true;
						}
					}
				}
			}
			if (missingitem) {
				drawgap(row.scrolly, row.scrolly + slotsize, a1lib.mixcolor(255, 100, 0));
			}
			else if (pricelessitem) {
				drawgap(row.scrolly, row.scrolly + slotsize, a1lib.mixcolor(255, 255, 0));
			}

			lasty = row.scrolly + slotsize;
		}
		if (scrollbar.scrollheight > lasty + 0.5 * slotsize) {
			drawgap(lasty, scrollbar.scrollheight, a1lib.mixcolor(255, 0, 0));
		}
		//PC.TooltipReader.drawOverlay(me.tooltipState, true);
		alt1.overLayRefreshGroup("bankscroll");
		alt1.overLaySetGroup("");
	}

	me.drawItemOverlay = function (slot) {
		alt1.overLaySetGroup("missingslots");
		me.drawItemOverlayInner(slot);
		alt1.overLayRefreshGroup("missingslots");
	}
	me.drawItemOverlayInner = function (slot) {
		if (!slot.imginfo || !slot.imginfo.valid || slot.readinfo.readnr != readcount) { return; }
		var x = slot.readinfo.x + me.pos.area.x;
		var y = slot.readinfo.y + me.pos.area.y;
		var t = me.config.timers.overlay + 500;

		var tx = x
		var ty = y + 24;
		var backcolor = 0;
		if ((slot.price && slot.price.selected) || slot.amount <= 0) {
			backcolor = a1lib.mixcolor(1, 0, 0);
		} else if (slot.price && slot.price.nameattempts.length != 0 && !slot.price.selected && !slot.loading) {
			backcolor = a1lib.mixcolor(255, 128, 0);
		} else {
			backcolor = a1lib.mixcolor(255, 0, 0);
		}
		if (backcolor != 0) {
			alt1.overLayRect(backcolor, tx, ty, 32, 13, t, 10);
		}

		if (slot.price && slot.price.selected) {
			alt1.overLayText(smallu(slot.price.selected.value * slot.amount), a1lib.mixcolor(255, 255, 255), 8, tx, ty, t);
		}

		if (!me.config.overlay.notext) {
			if (slot.item) { alt1.overLayText(slot.item.name.slice(0, 4), a1lib.mixcolor(255, 255, 255), 12, x, y + 8, t); }
			else { alt1.overLayText(slot.matches.length + "", a1lib.mixcolor(255, 255, 255), 12, x, y + 8, t); }
		}
	}
	//==========================================================================================
	//======================================== tracking ========================================
	//==========================================================================================
	this.track = function (callback) {
		if (!me.pos) { return; }
		me.stopTrack();
		trackInterval = setInterval(trackTick, me.config.timers.scrollcheck);
		trackTooltipInterval = setInterval(tooltipTick, me.config.timers.tooltipMeta);
		trackCallback = callback;
		me.tracking = true;
	}
	this.stopTrack = function () {
		if (trackInterval) { clearInterval(trackInterval); }
		if (trackTooltipInterval) { clearInterval(trackTooltipInterval); }
		trackInterval = null;
		trackTooltipInterval = null;
		me.tracking = false;
	}
	var trackTick = function () {
		me.read();
	}
	var tooltipTick = function () {
		var mp = a1lib.mousePosition();

		var inbank = (mp.x >= me.pos.inner.x && mp.x <= me.pos.inner.x + me.pos.inner.w && mp.y >= me.pos.inner.y && mp.y <= me.pos.inner.y + me.pos.inner.h);
		if (window.alt1 && (document.hasFocus() || alt1.rsActive) && inbank && !me.tooltipReader.tracking) {
			me.tooltipReader.track(tooltipRead, me.config.timers.tooltip);
		}
		if (!inbank && me.tooltipReader.tracking) {
			me.tooltipReader.stopTrack();
			me.tooltipState = null;
			//PC.TooltipReader.drawOverlay(null);
			//me.drawOverlay();
		}
	}
	var tooltipRead = function (tooltip) {
		if (!tooltip) {
			if (me.tooltipState != null) {
				me.tooltipState = null;
				//PC.TooltipReader.drawOverlay(null);
				//me.drawOverlay();
				qw("tooltip cleared");
			}
			return;
		}
		var changed = true;
		if (me.tooltipState) {
			var a1 = tooltip.area, a2 = me.tooltipState.area;
			var changed = a1.x != a2.x || a1.y != a2.y || a1.w != a2.w || a1.h != a2.h;
		}
		me.tooltipState = tooltip;
		if (changed) {
			//PC.TooltipReader.drawOverlay(me.tooltipState);
			//me.drawOverlay();
		}
		var rely = tooltip.mousepos.y - me.pos.inner.y;
		var relx = tooltip.mousepos.x - me.pos.inner.x - 5;
		if (relx < 0 || relx >= me.pos.columns * slotsize) { return; }
		var colnr = Math.floor(relx / slotsize);
		var colx = relx % slotsize;
		if (colx < 5 || colx >= iconsize - 5) { return; }
		for (var a = 0; a < me.state.rows.length; a++) {
			var row = me.state.rows[a];
			if (rely >= row.y + 9 && rely < row.y + iconsize - 5) {
				var slot = row.slots[colnr];
				if (slot) {
					var name = tooltip.readBankItem();
					if (row.slots[colnr].nameread != name) {
						hoverwaiting.push({ slot: row.slots[colnr], nameread: name });
						if (window.alt1) {
							me.drawItemOverlay(slot);
						}
						break;
					}
				}
			}
		}
	}

	var ItemSlot = function (hasborder) {
		this.hasborder = hasborder;
		this.readinfo = null;
		this._orderindex = 0;//Trying to prevent trowing bricks
		this.reset();
	}
	ItemSlot.prototype.reset = function () {
		this.amount = -1;
		this.buffer = null;
		this.cachedimg = null;
		this.imginfo = null;
		this.nameread = null;
		this.price = null;
		this.readattempts = 0;
		this.isempty = false;
	}
	ItemSlot.prototype.setBuffer = function (buffer) {
		this.imginfo = getImageInfo(buffer, new Rect(0, 9, 32, 32 - 9));
		this.readattempts++;
		if (!this.imginfo.valid) {
			if (this.readattempts >= 3) {
				this.isempty = true;
			}
		}
		else {
			var amount = readAmount(buffer, 1, 0);
			this.amount = (amount == -1 ? 0 : amount || 1);
			this.buffer = buffer;
		}
	}

	var getImageInfo = function (buf, rect) {
		if (!rect) { rect = new Rect(0, 0, buf.width, buf.height); }
		//=== alpha mask+total hash ===
		var mask = fillarray(Math.ceil(rect.width * rect.height / 8), 0);
		var total = 0;
		var imghash = fillarray(4, 0);
		var maskhash = fillarray(4, 0);

		var index = 0;
		var chr = 0;
		for (var x = rect.x; x < rect.x + rect.width; x++) {
			for (var y = rect.y; y < rect.y + rect.height; y++) {
				var pi = 4 * x + 4 * buf.width * y;
				var hi = (x - rect.x) + rect.width * (y - rect.y);
				if (buf.data[pi + 3] != 0) {
					mask[Math.floor(hi / 8)] += 1 << (hi % 8);
					total++;
				}
				var pixel = (buf.data[pi] << 24) + (buf.data[pi + 1] << 16) + (buf.data[pi + 2] << 8) + (buf.data[pi + 3]);
				imghash[hi % imghash.length] = (((imghash[hi % imghash.length] << 5) - imghash[hi % imghash.length]) + pixel) | 0;
			}
		}
		for (var a = 0; a < mask.length; a++) {
			maskhash[a % maskhash.length] = (((maskhash[a % maskhash.length] << 5) - maskhash[a % maskhash.length]) + mask[a]) | 0;
		}

		//=== color data ===
		var ncols = 6;
		var nrows = 4;
		var undersampled = buf.underSample(ncols, nrows, rect, 4);
		var coldata = [];
		var maincols = [0, 0, 0, 0];
		for (var a = 0; a < ncols * nrows; a++) {
			coldata[a * 4 + 0] = undersampled.data[a * 4 + 0];
			coldata[a * 4 + 1] = undersampled.data[a * 4 + 1];
			coldata[a * 4 + 2] = undersampled.data[a * 4 + 2];
			coldata[a * 4 + 3] = undersampled.data[a * 4 + 3];
			maincols[0] += undersampled.data[a * 4 + 0];
			maincols[1] += undersampled.data[a * 4 + 1];
			maincols[2] += undersampled.data[a * 4 + 2];
			maincols[3] += undersampled.data[a * 4 + 3];
		}
		maincols[0] = Math.round(maincols[0] / ncols / nrows);
		maincols[1] = Math.round(maincols[1] / ncols / nrows);
		maincols[2] = Math.round(maincols[2] / ncols / nrows);
		maincols[3] = Math.round(maincols[3] / ncols / nrows);

		var blackcorner = buf.getPixelInt(rect.x, rect.y) == a1lib.mixcolor(0, 0, 0, 255)
			|| buf.getPixelInt(rect.x + rect.width - 1, rect.y) == a1lib.mixcolor(0, 0, 0, 255)
			|| buf.getPixelInt(rect.x + rect.width - 1, rect.y + rect.height - 1) == a1lib.mixcolor(0, 0, 0, 255)
			|| buf.getPixelInt(rect.x, rect.y + rect.height - 1) == a1lib.mixcolor(0, 0, 0, 255);
		if (blackcorner) { qw("blackcorner"); }


		var filled = total / rect.width / rect.height;
		var empty = filled < 0.05;
		var valid = !empty && filled < 0.95 && !blackcorner;

		return {
			coldata: bytesToHex(coldata, 1),
			maincols: bytesToHex(maincols, 1),
			mask: bytesToHex(mask, 1),
			maskhash: bytesToHex(maskhash, 4),
			imghash: bytesToHex(imghash, 4),
			filled: filled,
			valid: valid,
			empty: empty
		};
	}

	//damn js sucks with binary operations, hope the compiler can save this a bit
	var bytesToHex = function (bytes, bytesperindex) {
		return bytes.map(function (byte) {
			var r = "";
			for (var a = (bytesperindex - 1) * 8; a >= 0; a -= 8) {
				var d = (byte >> a) & 0xff;
				if (d < 16) { r += "0"; }
				r += d.toString(16);
			}
			return r;
		}).join("");
	}

	var readAmount = function (buffer, ox, oy) {
		var str = "";
		var dx = 0;
		var anymatch = true;

		if (a1lib.simplecompare(buffer, BankReader.placeholderzero, 2, 1) !== false) {
			return -1;
		}

		while (anymatch && dx < slotsize) {
			anymatch = false;
			for (var a = 0; a < BankReader.itemnumbers.buffers.length; a++) {
				var buf = BankReader.itemnumbers.buffers[a];
				var match = true;
				for (var x = 0; x < buf.width; x++) {
					if (ox + dx + x >= buffer.width && x > 2) {
						//guess cut off chars that have at least 2 columns already
						continue;
					}
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
				str += "0123456789KM"[a];
				dx += buf.width;
				anymatch = true;
				break;
			}
		}
		var m;
		var amount = 0;
		if (m = str.match(/^(\d+)$/)) { amount = +m[1]; }
		if (m = str.match(/^(\d+)K$/)) { amount = m[1] * 1000; }
		if (m = str.match(/^(\d+)M$/)) { amount = m[1] * 1000 * 1000; }
		return amount;
	}
}
