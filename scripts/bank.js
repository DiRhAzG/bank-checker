///<reference path="/alt1lib.js">
///<reference path="/runeappslib.js">
///<reference path="/imagedetect.js">
///<reference path="/apps/alt1/alt1doc.js">
///<reference path="/imagelibs/tooltip.js">
///<reference path="tooltip.js">
"use strict";

BankReader.itemnumbers = new ImageSet("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAICAIAAAA+4JV/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC8SURBVEhLjYsBDoAwDAL9/6dnDYYR6KoXE+nBLrDWG4iayvgUM21rm8IMN61UUtoA5Kv9s8c8zX8GYCc4jYu2+imtVf9kq4lmkpLGqmGZaNXmQWpVUO5WF6cMzNSZexq07UAlMINNygy2KZpXqk65sJPQI+RMBzYG9mSu8OlpmHlOVX+ywaoCP0UH5JSLoQKUCMPz4j3nqXlwatO3y1aCdqbk2+HJPrPAp5kG2AnmAYxtkpwp9DpoZbHWdQOh12Sq5X4vpQAAAABJRU5ErkJggg==", [0, 7, 11, 18, 24, 29, 35, 42, 48, 55, 62, 69]);
ImageData.fromBase64(function (i) { BankReader.search = i }, "iVBORw0KGgoAAAANSUhEUgAAADgAAAAJCAIAAADownhBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAPkSURBVDhPTVRbb1RVFD77fu7nzLnMvVM6Q7ElhBghxJjG9KGTEh98QCk+kAAmFDSIjZcUlfrqtC/GB9Spb6jRNDGh1bcOl/hK+QnTnzD8BPz22YfiZGey9zprrW+tb397WSprX36vOho6o6E73lU33lcWYYPb8sVTgTV+wCePBD5RLyHctixChMOz6a0vwv5izMKcVxoiroVTs9/frb0MEZOHYviNyFoZj6rUDvGP2EpIBp/wg9/keE8d7tmHfzujX3wWNra+jBA1eSRXlm0NweTW5wEsz5/Yqx/O5SfP2Y3jNMis8+dbsJ44EREmeh2xfoURJolwYdy/xy39I9rIBTboAcDVTmPyWO7/pJif0qCOLDxp+DOnjkJWLzDs169Q+BPlUz9JMxc97/8okswjXBmsg18FNiyu/x/LQJQWQnmY/fVD5e7tuvXVxxmsS+cIqzSLvlGTBPZLVxx1l0RoOg2jCJk8VnA4e1qzK5ImeAW7JkR6IU/bZo9UxI0At7mm/bttSqQj0qao93g+c+ndzNKFls5FcpeoEDSX4coTjePP/vA212zrzLzuHmvwqTQNoWNUZlyZUDDq6pHCXL10cGvLizEchl8zJ2sCkqWdo964GzTeWMReM2qwBUQlISEwxvxEpG2E8GpXtWbtvO1OzZnAIrnHvJhXmiW67Ylaz2nPEZQB+JU+h6qKb0K7uhGuEkesw115uKe2N6AerV1qB8tL+bM/fShhtO3BIa8FvDoDVmRztszuBmsfzfx7P0VZTlIDowjEJ2i3LMUJqO1rSQQ5DRqsMmWw4IB+xpDvP6XwQIqs99AJGrMgAoT1Ogof8Plin4u4Gr921rgCLE0UNKf1AxjKRz87EOh4V5jbB208rtOoBQ3giAU8/N/8wKdCxcfm66+/HR07iWcKYyXUvCCPWcgGUl7JTCNQi+r3YCwotLiuafRjXVyiuGjoPcs1QwAOp+eyU28ZV6pcNMSimkndbVHcYBJDuwQZsccToW5MoxoyHuHtDHTP/QUPaoN8MTHMGEFyIl3kNNLvdrSCkbYMJAT3DmGgMmNBodgf/O5sfuZbQMLggLcR65l5gqIhYewP7nO8SnR845JnfAa32M53pnWo1t/e0L0tvclR6KvsTCRpjAcOOfUXQiIrRAQIRzY4bNxKq6cXnEYXhRbF6YpNIDovCIYeyjmAF8yj+s6mjbFj4YyMKBdLs1tUsX61nKOas11VvAMMKT1T4Y8bxBFr9YLGRuDKO/6d6772fyjuXJPETtNatjPQGYbfQqgJnFEr8FAuRiZU+PyJ8+BezpR7FFgMQS0M0FFarnI9v4VrUfYfvupnGD0XBXQAAAAASUVORK5CYII=");
ImageData.fromBase64(function (i) { BankReader.scrollstart = i }, "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAAkUlEQVQIW2Pk1TT/z/DmEYOIAAtDYaggQ6gpC8PTu88Z1h7/xbD0DBvD+28MDAwicgyMvFrm/xnfPGZozpBgSPPgYWD4+o3h4c0nDJ/efmNYeoKJYf5ZLob/wrIMjCATGd8+Zri5RoNBgOUPisJ3734zhC0XZPgvgqTw5U5tBobvP1EU/vzyi8F7oRCqiYQUAgCDTVcjawB2BwAAAABJRU5ErkJggg==");
ImageData.fromBase64(function (i) { BankReader.scrollend = i }, "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAAhUlEQVQIW2Pk1TT/z/j2McPLndoMDN9/MjB8/cbw8OYThk9vvzH8/PKLwXuhEMN/YVkGRpjCm2s0GARY/qAofPfuN0PYckESFIogmdicIcGQ5sGDYuKyE0wM885yIUxkePOIQUSAhaEwVJAh1IyV4emdZwxrj/9iWHqGjeH9NwYGBhE5BgC60VYjPg0gygAAAABJRU5ErkJggg==");
ImageData.fromBase64(function (i) { BankReader.emptycoins = i }, "iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAIAAACPoCp1AAADDUlEQVRIS7WT3UvTURjHz4Xku5tbuS2U1FDyLXNL8W04dItNc1taiVYKGqZYqRn5UiZehiBZQVdBXXUXdB0F3fQXFN0E3fZn9Pnt0eOv45xeLPhy+O38nvP57HnOpp5t72w9f/mfAlwtrT094TjpPtvorWny1DZnJaAAgl1aXVeLy2u5zrLWWwux2ZXYvSckend31Q/6Y9odnf1TsysAwc4/WlN3Fh7mlnoqIiPnoiN1MSvywKof9Me0Ozr2TYBgpxeX1dTc/VyX93TftfKu/iPjLMg5GKNGAhAscDVxe/qYAljfv7748/O95MenzW8fll9vb6R1iAC4GhufPI4ACjigB/Pl3Uy1q9ioFwFwNTx6Qwt87ZcOCwJh2dHk46ubbzZ7eGvUiwC46h8ezXX7fMGEpzWSISCgC05na6Zpfbx+Pl7JW6MeIFjgKpq8mneq3Nc54Ar0ZYgWAN150EoEPRn0Et4a9QDBAleRwSs8uTsuGxVGQHAHWsAq9GG/m/DWHuoBgu2LD9kELaEM4ZgxIjogXIP9dyW3QrEIwgj6EsMicJ7vzpSCnLcbozhkPoQO5FcrXHvolXqwfHvVm7QErraos6krbYoiJTrC1cMxuAQ0zVEgAuB7AqZ8CDr0K0J44PDvz1NMQDQ4eKYna2Krfpkb+/pWdgXhuHUHCPLbCh2NnSUN7ax2tKZbrFU/dG54rtuDQK5ddlgJm/E6hxYAV6FUB06/JQBUXNdqRwudasaNABDhbgFNBNz7156hg+7U/6C4pReB4Aw6ShHAMgTSltGBXRDiVxSMWx1ogUEvqvUTqmUaxoikA0NgH1FwcEh1J6wOHBd60gtqWoh0oEf0eKBcj4hkGFFKkBpRSUOHIdB07eCw/LlkRFCOvGTgKYG36qBAHAXVTdBl5YwRTJku2Vu118GeIG2gHxbRJLtqCGhpSzYBgv2nA+Pw8SNEHdncF3Qmr4ugkFnXBrIVEQBXHYmxfG9l6cVIaSBsrdkLWOCqPTmaV1ZRcKY+6wELXPljQ83heHMkkf2E4/7Y0F+cv82FFdwxCwAAAABJRU5ErkJggg==");
ImageData.fromBase64(function (i) { BankReader.searchimg = i }, "iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAIAAACPoCp1AAADNElEQVRIS7WT/U9SURjHT7+EWSpiKTRdWZPlCykQDVSKecGBJO/qQM3MF2KawWiiWM5e1szKZVab/lBrc/0h/VBztfqX+l4ePF6O1mrdts/ODuee5/M9z7lc9nR949nLzf8E5CybXz5adbLmfJu+yVRnbFcFqCCENrt4n2VyeY221jaa9qUWfLfvAe9sceQT/vPQFc5+VWoBQmjvzOdZMn1XU13X4Bm64B1q9snQBCOf8J+HrnCUixBCO53JsYmZOY1Of1oaqO/qUxEIoYWcjU1O/0kAY0eUCE8PQgGQs8T1m78PIGNfrys+GJ6ZTIDhaHFR2KmEAiBn0fgwDzDYewVg6fdJyfHhrdfPd7bfvNvaeLiUWcqmsrPjFCPs51AA5KwvGtfUGAzOYJ3NI0AHh3r3y6fvXz/DDjZfPBIyhCoCQmghZ95QrOxUvaHTr7NKAijGhcD+49sujk8dvH21tvY4v7I4t5CZxlPsEaoICKGFnHn6w5jVOK4JO+Tju504Ps5Odh6wvrpMTWRSo9SEUAsghFYKRBQBZpcSlI3GYzvvt7idB6ADfksTIzE5oLQWUIAbAVIwSgHai91KUIYb+PhhG1IegIbwDg4GUImu4wovpwCcnvWE5ADdZa/W1KWEAmCHFCNNYMf9rD7I4R3QFRUDSmsBhNBCvhdglYQdKBsI+yHCeeElYOfHz6Wn+Dch1AIIiwHugPwOKKCqrbOy1Y4Rc0xQiUuADsALnqzMkx1/ITxK3ZCPX9nqwGYqKRjw00EBkDNXoQOtRapssVc02wiaoxgHhAhGtAI13QzZcXy6H9rMyzEBEBY76C58BxXmHnosQBnp5AguBF6C7LfGotSBUFLE3AOtC/8iZ0DugAJOGC0HgQJMxf14pYDfO0FzoYQHOPsjrDsod1DVcVV+1mT+FdxI8M2Y43uUV5T7jRYI9wIKV4TXUrLjbzg0A0JoIS8E6BspoPycSQmtCCOhnAPYgXKbHKBv3OugEIAHKkIBJR0IO/6R/YDO0CAFHEezRqtaUADkzBFMHNOfrb7kqba65VE9oIWc2UPxstqG8jMtqgMt5Mzii7S7A+2eoPq4AxZf5CcT1m3Mu9H7egAAAABJRU5ErkJggg==");
ImageData.fromBase64(function (i) { BankReader.bankback = i }, "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");
ImageData.fromBase64(function (i) { BankReader.slotoutline = i }, "iVBORw0KGgoAAAANSUhEUgAAACgAAAAlCAYAAAAwYKuzAAACFElEQVRYR83YzStEYRTH8aMYxrssWGCB1HiJYjakxIaVnZVCWJCaDc1ixOSluHPNGO/XRpONTFNKSaT508b53q5/4TqL33Sfe5/pfDpPz3SfkXQ6XbX2+Vmd+vqqSaXeIyaiFkzYhIv49Nxw/+DIdk9/7MxCsGDCJsfH3zXciLR3ZjWuJqM5/6dQG0MWEzaAEVX/TTit6+g+0qQ1hyGHmkcYsGDCJvulkg/koWY/2tWX1OxpdkMONZMYsGDCJo7zAdAJcExKaHYaeoe2www1g9p7WDBhk0KhUKvr7egDOpfQyVuaTc16yKHmVoBMYsImnucBzCDX0LnNpoGxVc1KyFmlNgYsmLDpJinVBcBdnUC71/lCc2x8OcxQk9oYsGDCJq77CtA1CHSxSfLpxywQmzjFYlQHFwaBF9jYJNHY2ETWGhATNr+DVoF+B/WjXgc5g8AcNvtAXeeG0fjUpTUgJmz8DgLMGwTmsQFsNAxslHz+BeCVQeAVNjYJwGuDwGtsLHGTVSA2OfHeAN4YBN5gA9isJ6hba0BM2CT3/GwWiI1dDPDOIPAOG0vcooN7g8B7bLywmgVio4OtOngwCHzAxiYxC8Tmd3BydsGzBsTkd1BP72aB2OTMK7YFQFMHd0zY/CWemV880Jum/vpQ4IECW3ijrl/aSMyB1JuPFoIFEzYpl8tVXNBJWmohWDBhk0qlYjgV+QUq5JJ+2gDDBQAAAABJRU5ErkJggg==");
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
	// this.imgOffset = 5;
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

	// create off-screen canvas element
	var canvas = document.createElement('canvas'),
	ctx = canvas.getContext('2d');

	canvas.width = 34;
	canvas.height = 34;

	// create imageData object
	var idata = ctx.createImageData(34, 34);
	
	this.find = function (img, clearSlots) {
		if (!img) { img = a1lib.bindfullrs(); }

		//==== find bank ====

		// let search = a1lib.findsubimg(img, BankReader.search);

		// if (search.length == 0) {
		// 	me.imgOffset = 1; // Not searching in bank
		// } else {
		// 	me.imgOffset = 5; // Searching bank, offset is higher
		// }
		
		var botright = a1lib.findsubimg(img, BankReader.botright);
		var topleft = a1lib.findsubimg(img, BankReader.topleft);
		if (botright.length == 0 || topleft.length == 0) {
			// me.message("Couldn't find bank interface");
			return false;
		}
		var loc = { x: topleft[0].x + 5, y: topleft[0].y + 5, width: -1, height: -1 };
		loc.width = botright[0].x + 48 - loc.x;
		loc.height = botright[0].y + 38 - loc.y;
		me.message("Bank found at " + loc.x + "," + loc.y  + "," + loc.width  + "," +  loc.height);

		if (clearSlots) {
			me.clearSlots();
		}
		
		//==== init vars ====
		var bankarea = {
			x: loc.x,
			y: loc.y,
			w: loc.width,
			h: loc.height,
			scrollbar: null,
		};
		var bankinner = {
			x: bankarea.x + 4,
			y: bankarea.y + 74,
			w: bankarea.w - 226,
			h: bankarea.h - 114
		};

		//==== initial run ====
		me.pos = {
			area: bankarea,
			inner: bankinner,
			columns: Math.floor(bankinner.w / 44),
			legacy: false
		};
		me.message("Bank inner at " + me.pos.inner.x + "," + me.pos.inner.y  + "," + me.pos.inner.w  + "," +  me.pos.inner.h);

		if (!me.state) {
			me.state = {
				slots: [],
				tab: null,
				tabs: [],
				tabspaces: [],
				rows: [],
				scrollbar: null,
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
			// me.stopOverlay();
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
				// me.stopOverlay();
				qw("Bank window closed");
			}
			return null;
		}
		if (isopen != me.isopen) {
			me.isopen = true;
			// me.startOverlay();
		}

		//=== find bank state ===
		var scrollbar = me.readScrollbar(img, me.state && me.state.scrollbar);

		//check if we are looking at a new screen
		var scrollchanged = (!(me.state.rawscrolltop == 0 && !scrollbar) && me.state.rawscrolltop != scrollbar.scrolltop);
		if (scrollchanged) {
			me.state.lastScroll = Date.now();
		}
		if (scrollchanged) {
			me.state.firstscan = Date.now();
			me.state.scanretried = 0;
		}

		//update bank state with what we know
		me.state.scrollbar = scrollbar;
		me.state.rawscrolltop = (scrollbar && scrollbar.scrolltop) || 0;

		//check if the state changed enough to read the items again
		if (forceread || scrollchanged || !me.state.allslotsvalid || !window.alt1) {
			var buffer = img.toData(me.pos.area.x, me.pos.area.y, me.pos.area.w, me.pos.area.h);
			qw(new Date().toLocaleTimeString(), "reading bank images");
			if (me.readInner(buffer, scrollbar)) {
				me.readItems(buffer);
				calculateMats();
				changed = true;
			}
		}
		//scroll didnt change, add reads that needed this confirmation
		if (me.state && !scrollchanged) {
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
		// if (changed) { me.invalidateOverlay(); }
		return me.state;
	}

	var isNumberCol = function (data, i) {
		var r =
			data[i] == 255 && data[i + 1] == 255 && data[i + 2] == 0 ||//yellow (1)
			data[i] == 255 && data[i + 1] == 255 && data[i + 2] == 255 ||//white (K)
			data[i] == 0 && data[i + 1] == 255 && data[i + 2] == 128 ||//green (M)
			data[i] == 255 && data[i + 1] == 203 && data[i + 2] == 5; //yellowish (tab seperator)

		//data[i] = data[i + 1] = data[i + 2] = data[i + 3] = 255;
		return r;
	}

	var readbuffer = function (img, slot, imgx, imgy, backx, backy) {
		var clone = img.toData(backx + imgx, backy + imgy, 34, 34);
		var data = clone.data;

		if (!window.alt1 || localStorage.showImageData == "true") {
			// set our buffer as source
			idata.data.set(data);
	
			// update canvas with new data
			ctx.putImageData(idata, 0, 0);
			var dataUri = canvas.toDataURL(); // produces a PNG file
	
			console.log(dataUri);
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
		qw("Columns: " + me.pos.columns);
		qw("Rows: " + me.state.rows.length);
		qw("Slot Size: " + slotsize);

		// if (!window.alt1) {
		// 	var c = document.getElementById("myCanvas");
		// 	var ctx = c.getContext("2d");
			
		// 	ctx.beginPath();
		// 	ctx.fillStyle = "red";
		// 	ctx.rect(me.pos.inner.x, me.pos.inner.y, me.pos.inner.w, me.pos.inner.h);
		// 	ctx.stroke();
		// }

		readcount++;
		var allvalid = true;
		var hadempty = false;
		var bufref = new ImgRefData(buffer, new Rect(0, 0, buffer.width, buffer.height));

		for (var bankx = 0; bankx < me.pos.columns; bankx++) {
			var imgx = me.pos.inner.x - me.pos.area.x + bankx * slotsize + 11; // Inner bank x - outer bank x + bankx which is the current column * size of each slot in the row
			for (var banky = 0; banky < me.state.rows.length; banky++) {
				var slot = me.state.slots[bankx + banky * me.pos.columns];
				var imgy = me.pos.inner.y - me.pos.area.y + me.state.rows[banky].y;
				slot.readinfo = { x: imgx, y: imgy, readnr: readcount };
				if (slot.isempty) { continue; }

				var x = slot.readinfo.x + me.pos.area.x;
				var y = slot.readinfo.y + me.pos.area.y;
				var backcolor = a1lib.mixcolor(255, 0, 0);

				if (window.alt1 && localStorage.highlightSlots == "true") {
					alt1.overLayRect(backcolor, x, y, 34, 34, 2000, 1);
				}

				// if (slot.imginfo && slot.imginfo.valid) {
				// 	let itemName = compareArtefacts(slot);

				// 	if (itemName != undefined) {
				// 		continue;
				// 	}
				// }

				//check if we hit a tooltip
				if (me.tooltipIntersect(slot, me.state.tooltip, 5)) {
					allvalid = false;
					continue;
				}

				var transbuf = readbuffer(bufref, slot, imgx, imgy, 0, 0);;
																 
				slot.setBuffer(transbuf);

				let itemName = compareArtefacts(slot);

				if (!window.alt1 || localStorage.showImageData == "true") {
					console.log(itemName);
				}

				// if (me.imgOffset == 5 && itemName == "Blank Slot") {
				// 	break;
				// }

				if (!slot.imginfo.valid) {
					if (!slot.imginfo.empty) { allvalid = false; }
					else { hadempty = true; }
				}
		
				if (!window.alt1) {
					ctx.beginPath();
					ctx.rect(x, y, 34, 34);
					ctx.stroke();
				}
			}
		}

		me.state.allslotsvalid = allvalid;
	}

	this.readScrollbar = function (img, old) {
		var bar = {
			raillength: me.pos.inner.h - 37,
			start: -1,
			end: -1,
			x: me.pos.inner.x + me.pos.inner.w - 12,
			y: me.pos.inner.y + 19
		};
		        
        // if (!window.alt1) {
        //     var c = document.getElementById("myCanvas");
        //     var ctx = c.getContext("2d");
            
        //     ctx.beginPath();
        //     ctx.strokeStyle = "red";
        //     ctx.rect(bar.x, bar.y, 2, bar.raillength);
        //     ctx.stroke();
        // }

		var buffer = img.toData(bar.x, bar.y, 3, bar.raillength);

		//==== find bar imgs ====
		var isbar = function (y) {
			var i1 = 4 * 0 + 4 * buffer.width * y;
			var i2 = 4 * 2 + 4 * buffer.width * y;
			return coldiff(231, 175, 50, buffer.data[i1], buffer.data[i1 + 1], buffer.data[i1 + 2]) < 20
				&& coldiff(121, 83, 19, buffer.data[i2], buffer.data[i2 + 1], buffer.data[i2 + 2]) < 20;
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

	this.readInner = function (buffer, scrollbar) {
		var tabspaces = findTabSpaces(buffer);
		me.state.slots = [];
		me.state.tabspaces = tabspaces;
		me.state.pxoffset = -1;
		me.state.tooltip = null;
		me.state.allslotsvalid = true;

		if (!me.state.tabs[0]) {
			me.state.tabs[0] = { name: "", rows: [], tabspaces: [], height: (scrollbar ? scrollbar.scrollheight : me.pos.inner.h) };
		}

		var a = me.getRowOffset(buffer);
		if (a != null) { me.state.pxoffset = a % slotsize; }
		else { me.message("Need at least one item with a stack amount in the screen to be able to read the icons"); return false; }

		me.state.rows = [];
		me.state.slots = [];
		for (var rowy = me.state.pxoffset; rowy + slotsize < me.pos.inner.h + 5; rowy += slotsize) {
			//find any matching rows
			var matchrow = null;
			for (var a = 0; a < me.state.tabs[0].rows.length; a++) {
				if (Math.abs(me.state.tabs[0].rows[a].scrolly - rowy - me.state.rawscrolltop) <= me.config.maxrowcombinedist) {
					matchrow = me.state.tabs[0].rows[a];
				}
			}

			//make and combine new row
			var tabrow = { y: rowy, scrolly: rowy + me.state.rawscrolltop, slots: [] };
			if (!matchrow) { me.state.tabs[0].rows.push(tabrow); }
			me.state.rows.push(tabrow);
			for (var column = 0; column < me.pos.columns; column++) {
				var slot = matchrow ? matchrow.slots[column] : null;
				if (!slot) {
					var hasborder = false;
					slot = new ItemSlot(hasborder);
				}
				me.state.slots.push(slot);
				tabrow.slots[column] = slot;
			}

			//check if we have to skip a tabseperator for next row
			if (tabspaces.find(function (space) { return rowy + 78 + slotsize == space.y })) {
				rowy += 20;
			}
		}

		//add tabspaces
		for (var a = 0; a < tabspaces.length; a++) {
			var tabmatch = false;
			for (var b = 0; b < me.state.tabs[0].tabspaces.length; b++) {
				if (Math.abs(me.state.tabs[0].tabspaces[b].scrolly - tabspaces[a].y - me.state.rawscrolltop) <= me.config.maxrowcombinedist) {
					tabmatch = true;
					break;
				}
			}
			if (!tabmatch) {
				me.state.tabs[0].tabspaces.push({
					y: tabspaces[a].y,
					scrolly: tabspaces[a].y + me.state.rawscrolltop,
					tabnr: tabspaces[a].tabnr
				});
			}
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
			for (var imgy = 0; imgy < me.pos.inner.h - 10; imgy++) {
				var yellow = 0;
				for (var imgdx = 0; imgdx < 5; imgdx++) {
					var i = 4 * (me.pos.inner.x - me.pos.area.x + bankx * 44 + 13 + imgdx) + 4 * buffer.width * (imgy + me.pos.inner.y - me.pos.area.y);
					if (isNumberCol(buffer.data, i)) { yellow++; }
				}

				if (yellow == 0) {
					continue;
				}

				var amount = readAmount(buffer, me.pos.inner.x - me.pos.area.x + bankx * 44 + 13, me.pos.inner.y - me.pos.area.y + imgy);
				if (amount) {
					return imgy - 3; // Small offset to get image centered
				}
			}
		}
		return null;
	}
	var findTabSpaces = function (buffer) {
		var locs = a1lib.findsubimg(buffer, BankReader.tabsep, null, 8, me.pos.inner.y - me.pos.area.y, 7, me.pos.inner.h);
		// var r = [];
		// for (var a = 0; a < locs.length; a++) {
		// 	var n = readAmount(buffer, locs[a].x + 26, locs[a].y);
		// 	r.push({ y: locs[a].y - (me.pos.inner.y - me.pos.area.y) + 1, tabnr: +n - 1 });
		// }
		return locs;
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
	// me.startOverlay = function () {
	// 	me.stopOverlay();
	// 	me.overlayState = {
	// 		timer: 0,
	// 		lastOverlay: 0,
	// 		invalidated: true
	// 	};
	// 	// me.drawOverlay();
	// }
	// me.stopOverlay = function () {
	// 	if (window.alt1) {
	// 		alt1.overLayClearGroup("missingslots");
	// 		alt1.overLayContinueGroup("missingslots");
	// 		alt1.overLayClearGroup("bankscroll");
	// 		alt1.overLayContinueGroup("bankscroll");
	// 	}
	// 	if (me.overlayState) {
	// 		clearTimeout(me.overlayState.timer);
	// 	}
	// 	me.overlayState = null;
	// }
	// me.invalidateOverlay = function () {
	// 	if (me.overlayState) {
	// 		me.overlayState.invalidated = true;
	// 		me.drawOverlay();
	// 	}
	// }
	// me.drawOverlay = function () {
	// 	if (!window.alt1) { return; }
	// 	if (!me.pos) { return; }
	// 	if (!me.overlayState) { return; }
	// 	//fix timing stuff

	// 	var scrolltimeout = me.state.lastScroll + me.config.overlay.scrolldelay - Date.now();
	// 	if (scrolltimeout > 0) {
	// 		clearTimeout(me.overlayState.timer);
	// 		me.overlayState.timer = setTimeout(me.drawOverlay, scrolltimeout);
	// 		alt1.overLayClearGroup("missingslots");
	// 		alt1.overLayRefreshGroup("missingslots");
	// 		me.overlayState.invalidated = true;
	// 		return;
	// 	}
	// 	if (!me.overlayState.invalidated && me.overlayState.lastOverlay + me.config.timers.overlay * 0.7 > Date.now()) {
	// 		return;
	// 	}
	// 	clearTimeout(me.overlayState.timer);
	// 	me.overlayState.timer = setTimeout(me.drawOverlay, me.config.timers.overlay);
	// 	me.overlayState.lastOverlay = Date.now();

	// 	me.drawScrollOverlay();

	// 	//draw stuff
	// 	alt1.overLaySetGroup("missingslots");
	// 	alt1.overLayFreezeGroup("missingslots");
	// 	alt1.overLayClearGroup("missingslots");
	// 	for (var a = 0; a < me.state.rows.length; a++) {
	// 		var row = me.state.rows[a];
	// 		var y = me.pos.inner.y + row.y;
	// 		for (var b = 0; b < row.slots.length; b++) {
	// 			var slot = row.slots[b];
	// 			var x = me.pos.inner.x + slotsize * b;
	// 			me.drawItemOverlayInner(slot, x, y);
	// 		}
	// 	}
	// 	var tab = me.state.tabs[me.state.tab];
	// 	var tabvalue = me.getSlotsValue(me.allTabSlots(tab));
	// 	var valuestr = smallu(tabvalue.avg, true) + (tabvalue.maxdif != 0 ? " \u00B1 " + smallu(tabvalue.maxdif, true) : "");
	// 	alt1.overLayText("Tab: " + valuestr, a1lib.mixcolor(255, 203, 5), 12, me.pos.area.x + 6, me.pos.area.y + 5, 10 * 1000);

	// 	//PC.TooltipReader.drawOverlay(me.tooltipState,true);
	// 	alt1.overLayRefreshGroup("missingslots");
	// 	alt1.overLaySetGroup("");
	// }
	// me.drawScrollOverlay = function () {
	// 	if (!window.alt1) { return; }
	// 	alt1.overLaySetGroup("bankscroll");
	// 	alt1.overLayFreezeGroup("bankscroll");
	// 	alt1.overLayClearGroup("bankscroll");
	// 	var scrollbar = me.state.scrollbar;
	// 	if (!scrollbar) {
	// 		alt1.overLayRefreshGroup("bankscroll");
	// 		return;
	// 	}
	// 	var tab = me.state.tabs[me.state.tab];
	// 	if (!tab) { return; }
	// 	var rows = tab.rows.concat(tab.tabspaces).sort(function (a, b) { return a.scrolly - b.scrolly; });

	// 	var drawgap = function (start, end, col) {
	// 		alt1.overLayRect(col, scrollbar.x, Math.round(scrollbar.y + start / scrollh * scrollbar.raillength), 5, Math.round((end - start) / scrollh * scrollbar.raillength), t, 4);
	// 	}

	// 	var t = me.config.timers.overlay + 500;
	// 	var scrollh = scrollbar.scrollheight;
	// 	var lasty = 0;
	// 	for (var a = 0; a < rows.length; a++) {
	// 		var row = rows[a];
	// 		if (row.scrolly > lasty + 0.5 * slotsize) {
	// 			drawgap(lasty, row.scrolly, a1lib.mixcolor(255, 0, 0));
	// 		}
	// 		var pricelessitem = false;
	// 		var missingitem = false;
	// 		if (row.slots) {
	// 			for (var b in row.slots) {
	// 				var slot = row.slots[b];
	// 				if ((!slot.price || !slot.price.selected) && !slot.isempty && slot.amount > 0) {
	// 					if (slot.price && slot.price.nameattempts.length != 0 && !slot.price.selected && !slot.loading) {
	// 						pricelessitem = true;;
	// 					} else {
	// 						missingitem = true;
	// 					}
	// 				}
	// 			}
	// 		}
	// 		if (missingitem) {
	// 			drawgap(row.scrolly, row.scrolly + slotsize, a1lib.mixcolor(255, 100, 0));
	// 		}
	// 		else if (pricelessitem) {
	// 			drawgap(row.scrolly, row.scrolly + slotsize, a1lib.mixcolor(255, 255, 0));
	// 		}

	// 		lasty = row.scrolly + slotsize;
	// 	}
	// 	if (scrollbar.scrollheight > lasty + 0.5 * slotsize) {
	// 		drawgap(lasty, scrollbar.scrollheight, a1lib.mixcolor(255, 0, 0));
	// 	}
	// 	//PC.TooltipReader.drawOverlay(me.tooltipState, true);
	// 	alt1.overLayRefreshGroup("bankscroll");
	// 	alt1.overLaySetGroup("");
	// }

	// me.drawItemOverlay = function (slot) {
	// 	alt1.overLaySetGroup("missingslots");
	// 	me.drawItemOverlayInner(slot);
	// 	alt1.overLayRefreshGroup("missingslots");
	// }
	// me.drawItemOverlayInner = function (slot) {
	// 	if (!slot.imginfo || !slot.imginfo.valid || slot.readinfo.readnr != readcount) { return; }
	// 	var x = slot.readinfo.x + me.pos.area.x;
	// 	var y = slot.readinfo.y + me.pos.area.y;
	// 	var t = me.config.timers.overlay + 500;

	// 	var tx = x
	// 	var ty = y + 24;
	// 	var backcolor = 0;
	// 	if ((slot.price && slot.price.selected) || slot.amount <= 0) {
	// 		backcolor = a1lib.mixcolor(1, 0, 0);
	// 	} else if (slot.price && slot.price.nameattempts.length != 0 && !slot.price.selected && !slot.loading) {
	// 		backcolor = a1lib.mixcolor(255, 128, 0);
	// 	} else {
	// 		backcolor = a1lib.mixcolor(255, 0, 0);
	// 	}
	// 	if (backcolor != 0) {
	// 		alt1.overLayRect(backcolor, tx, ty, 32, 13, t, 10);
	// 	}

	// 	if (slot.price && slot.price.selected) {
	// 		alt1.overLayText(smallu(slot.price.selected.value * slot.amount), a1lib.mixcolor(255, 255, 255), 8, tx, ty, t);
	// 	}

	// 	if (!me.config.overlay.notext) {
	// 		if (slot.item) { alt1.overLayText(slot.item.name.slice(0, 4), a1lib.mixcolor(255, 255, 255), 12, x, y + 8, t); }
	// 		else { alt1.overLayText(slot.matches.length + "", a1lib.mixcolor(255, 255, 255), 12, x, y + 8, t); }
	// 	}
	// }
	//==========================================================================================
	//======================================== tracking ========================================
	//==========================================================================================
	this.track = function (callback) {
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
		if (!me.pos) {
			if (!me.find()) {
				return;
			}
		}
		me.read();
	}
	var tooltipTick = function () {
		if (!me.pos) {
			if (!me.find()) {
				return;
			}
		}
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
						// if (window.alt1) {
						// 	me.drawItemOverlay(slot);
						// }
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
		this.imginfo = getImageInfo(buffer, new Rect(0, 0, 34, 34));
		this.readattempts++;
		if (!this.imginfo.valid) {
			if (this.readattempts >= 3) {
				this.isempty = true;
			}
		}
		else {
			var amount = readAmount(buffer, 2, 3);
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
		var valid = !empty && filled <= 1 && !blackcorner;

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

    this.clearSlots = function() {
        if (me.state != null) {
            me.state.slots = [];
            me.state.tabs = [];
        }
	}
}
