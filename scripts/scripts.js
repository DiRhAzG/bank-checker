///<reference path="/alt1lib.js">
///<reference path="/runeappslib.js">
///<reference path="/imagedetect.js">
///<reference path="/apps/alt1/alt1doc.js">
///<reference path="bank.js">
"use strict";

window.onbeforeunload = shutdown;
var reader = new BankReader();
var matreader = new MaterialsReader();
var bankUI = new BankInterface(reader);
var geItems = [];

window.onload = () => {
	loadArtefacts();
	loadMaterials();
	
	setTimeout(3000);

	start();
};

function start() {
	a1lib.identifyUrl("appconfig.json");
	
	PasteInput.listen(pasted, message);

	// elput(document.body, bankUI.root);
	// bankUI.draw();

	if (window.alt1) {
		reader.find();
		reader.read();
		matreader.find();
		matreader.read();
		// toggleTrack();
	} else {
		//pasteExample("http://localhost:8080/images/testbank14.png");
		matImageFromFile("http://localhost:8080/images/mats1.png");
	}
}

function shutdown() {
	reader.stopOverlay();
}

var messagebox = null;
function message(str) {
	if (messagebox) { messagebox.frame.close(); }
	var box = promptbox2({ style: "nis", width: 300 }, [
		{ t: "text", text: str },
		{ t: "h/1" },
		{ t: "button", text: "Close", onclick: function () { box.frame.close(); } }
	]);
	messagebox = box;
}

function pasted(image) {
	var imgref = new ImgRefCtx(image);
	reader.find(imgref);
	if (reader.pos) {
		reader.read(imgref, true);
		// readUpdated();
	}
}

function pasteExample(url) {
	var img = eldiv(":img", { src: url });
	img.onload = function () { pasted(img); };
}

function parseMatImage(image) {
	var imgref = new ImgRefCtx(image);
	matreader.find(imgref);
	if (matreader.pos) {
		matreader.read(imgref, true);
		// readUpdated();
	}
}

function matImageFromFile(url) {
	var img = eldiv(":img", { src: url });
	img.onload = function () { parseMatImage(img); };
}
// function readUpdated() {
// 	bankUI.bank = reader.state;
// 	bankUI.activetab = reader.state.tab;
// 	bankUI.draw();
// 	// fixPrices();
// }


function allSlots(bank) {
	var slots = [];
	for (var a = 0; a < bank.tabs.length; a++) {
		if (!bank.tabs[a]) { continue; }
		slots = slots.concat(reader.allTabSlots(bank.tabs[a]));
	}
	return slots;
}


var reqidcount = 1;
function fixPrices() {
	if (!reader.pos) { return; }
	var bank = reader.state;

	var slots = allSlots(bank);
	var reqslots = [];
	var reqs = [];
	for (var a in slots) {
		var slot = slots[a];
		if (!slot.price) {
			slot.price = {
				options: [],
				selected: null,
				loading: 0,
				nameattempts: [],
				hashattempt: false,
				userconfirmed: false
			};
		}
		var price = slot.price;
		if (!price.loading && slot.imginfo && slot.imginfo.valid && slot.amount > 0) {
			var hasnewname = (slot.nameread && price.nameattempts.indexOf(slot.nameread) == -1);
			if (!price.hashattempt || hasnewname) {
				price.loading = reqidcount++;
				var req = {
					reqid: price.loading,
					imghash: slot.imginfo.imghash,
					maskhash: slot.imginfo.maskhash,
					mask: slot.imginfo.mask,
					coldata: slot.imginfo.coldata,
					maincols: slot.imginfo.maincols,
					nameread: slot.nameread
				};
				if (slot.nameread) {
					price.nameattempts.push(slot.nameread);
				}
				price.hashattempt = true;
				reqs.push(req);
				reqslots.push(slot);
				// console.log(req.imghash);
				// console.log(JSON.stringify(reqs));
			}
		}
	}

	// if (reqs.length != 0) {
	// 	dlpagejson(apibase + "pc_getprices.php", reqs, pricesLoaded.bind(null, reqslots), message.b(apibase + "pc_getprices.php"));
	// }
}

function pricesLoaded(targetslots, obj) {
	if (window.alt1) {
		alt1.overLaySetGroup("missingslots");
		alt1.overLayFreezeGroup("missingslots");
	}
	var addoption = function (options, opt, value) {
		//make sure we don't have this option already
		for (var a = 0; a < options.length; a++) {
			var opt2 = options[a];
			if (opt2.name == opt.name && opt2.value == value) { return; }
		}
		options.push({ name: opt.name, value: value, source: opt.source, c: opt.c, d: opt.d });
	}

	for (var a in targetslots) {
		var price = targetslots[a].price;
		var names = obj.hashes[targetslots[a].imginfo.imghash];
		price.loading = false;
		price.options = [];
		for (var b in names) {
			for (var c in obj.names[names[b].name]) {
				addoption(price.options, names[b], obj.names[names[b].name][c].value);
			}
		}
		if (price.options.length != 0) {
			price.selected = price.options[0];
		}
	}
	// bankUI.draw(reader.state);
	if (window.alt1) {
		alt1.overLayRefreshGroup("missingslots");
		//reader.drawScrollOverlay();
		reader.drawOverlay();
	}
}

function clickSlot(slot, el, container) {
	if (!slot.price || slot.price.options.length == 0) { qw("0 options on clicked slot"); return; }
	var menu = eldiv("slotdropdown");
	for (var a = 0; a < slot.price.options.length; a++) {
		var opt = slot.price.options[a];
		var partialmatch = opt.source == "col" || opt.source == "colnh";
		var opt = eldiv("item-opt item-optsource-" + (partialmatch ? "partial" : "exact"), { title: (partialmatch ? "Partial match" : "Exact match") }, [
			eldiv("item-optname", [opt.name]),
			eldiv("item-optvalue", [smallu(opt.value, true)])
		]);
		opt.onclick = function (slot, item) {
			slot.price.userconfirmed = true;
			slot.price.selected = item;
			// bankUI.draw();
			menu.remove();
		}.b(slot, slot.price.options[a]);
		menu.appendChild(opt);
	}

	var blur = function () {
		document.removeEventListener("click", blur);
		menu.remove();
	}
	setTimeout(function () { document.addEventListener("click", blur); }, 10);

	//determine dropdown position
	menu.reposition = function () {
		if (container) {
			var box = menu.getBoundingClientRect();
			var bounds = container.getBoundingClientRect();
			menu.style.left = Math.min(0, bounds.right - box.right - 12) + "px";
			menu.style.top = (34 + Math.min(0, bounds.bottom - box.bottom)) + "px";
		}
	};


	menu.style.visibility = "hidden";
	el.appendChild(menu);
	menu.reposition();
	menu.style.visibility = "";
}

function toggleTrack() {
	if (reader.tracking) {
		reader.stopTrack();
		// reader.stopOverlay();
	}
	else {
		if (window.alt1) {
			if (!reader.pos) {
				if (!reader.find()) {
					message("Could not find your bank. Please make sure you're that not using legacy mode and that capture is working correctly in the alt1 settings.");
					return;
				}
			}
			reader.track();
			// reader.startOverlay();
		}
		else {
			message("This feature is only available in Alt1.");
		}
	}
	// bankUI.drawButtons();
}

function BankInterface(reader) {
	var me = this;
	this.activetab = 0;
	this.activemode = 2;
	this.bank = null;
	this.reader = reader;

	var els = {};
	this.root = eldiv("bankstate", [
		eldiv("flexline", [
			els.toggletrack = eldiv("nisbutton2", { onclick: toggleTrack.b() }, ["Track: off"]),
			eldiv("flexlabel", { style: "flex-grow:1" }, ["Tab value:"]),
			els.tabvalue = eldiv("flexlabel", { style: "flex-grow:3;" }),
		]),
		els.tabroot = eldiv("nisseperator", { style: "position:relative;" }),
		els.body = eldiv("bank-body")
	]);

	// this.drawButtons = function () {
	// 	els.toggletrack.innerText = "Track: " + (me.reader.tracking ? "on" : "off");
	// }

	// this.draw = function () {
	// 	//draw tabs
	// 	var frag = elfrag(
	// 		eldiv("bank-tab contenttab lefttab" + (me.activemode == 2 ? " activetab" : ""), { onclick: function () { me.activemode = 2; me.draw(); } }, ["About"]),
	// 		eldiv("bank-tab contenttab lefttab" + (me.activemode == 0 ? " activetab" : ""), { onclick: function () { me.activemode = 0; me.draw(); } }, ["View items"]),
	// 		eldiv("bank-tab contenttab lefttab" + (me.activemode == 1 ? " activetab" : ""), { onclick: function () { me.activemode = 1; me.draw(); } }, ["Certainty"])
	// 	);
	// 	/*
	// 	for (var a in me.bank.tabs) {
	// 		if (!me.bank.tabs[a]) { continue; }
	// 		var el = eldiv("bank-tab contenttab" + (a == me.activetab ? " activetab" : ""), { onclick: function (a) { me.activetab = a; me.draw(); }.b(a) }, [me.bank.tabs[a].name]);
	// 		frag.appendChild(el);
	// 	}*/
	// 	elput(els.tabroot, frag);

	// 	var tab = me.bank && me.bank.tabs[me.activetab];

	// 	//var bankvalue = reader.getSlotsValue(allSlots(me.bank));
	// 	//els.bankvalue.innerText = smallu(bankvalue.avg, true) + (bankvalue.maxdif != 0 ? " \u00B1 " + smallu(bankvalue.maxdif, true) : "");
	// 	if (tab) {
	// 		var tabvalue = reader.getSlotsValue(reader.allTabSlots(tab));
	// 		var valuestr = smallu(tabvalue.avg, true) + (tabvalue.maxdif != 0 ? " \u00B1 " + smallu(tabvalue.maxdif, true) : "");
	// 		els.tabvalue.innerText = valuestr;
	// 	}
	// 	else {
	// 		els.tabvalue.innerText = "-";
	// 	}

	// 	if (me.activemode == 0) { elput(els.body, me.drawItems(tab)); }
	// 	// if (me.activemode == 1) { elput(els.body, me.drawCertainty(tab)); }
	// 	// if (me.activemode == 2) { elput(els.body, me.drawHelp()); }
	// }
	// this.drawHelp = function () {
	// 	var frag = elfrag(
	// 		eldiv("crty-header", ["Still learning"]),
	// 		eldiv("crty-story", ["Items are recognized using an AI on the RuneApps server. This AI learns automatically from user input and will improve over time. The more you use this app you will notice that it will start recognizing the items in your bank."]),
	// 		eldiv("crty-story", ["Unknown items have a red overlay. You can simply hover over them in-game and Alt1 will read the cursor tooltip and add the item to the database to recognize it instantly. You can click the \"Certainty\" tab to see any problems it has with unrecognized items."]),
	// 		eldiv("crty-story", ["This app is still in beta. You can leave feedback and issues you have with it on ", eldiv(":a", { href: "http://runeapps.org/forums/viewtopic.php?id=552" }, ["this thread"]), " on the forums."])
	// 	);
	// 	return frag;
	// }
	// this.drawCertainty = function (tab) {
	// 	var allslots = reader.allTabSlots(tab);
	// 	var unknownslots = [];
	// 	var variationslots = [];
	// 	for (var a in allslots) {
	// 		var slot = allslots[a];
	// 		if (!slot.imginfo || slot.imginfo.empty || slot.amount <= 0) { continue; }
	// 		var price = slot.price;
	// 		if (price && !price.loading) {
	// 			if (price.options.length == 0) { unknownslots.push(slot); }
	// 			else if (price && !price.userconfirmed) {
	// 				var min = Infinity;
	// 				var max = -Infinity;
	// 				for (var b in price.options) {
	// 					min = Math.min(min, price.options[b].value);
	// 					max = Math.max(max, price.options[b].value);
	// 				}
	// 				var d = (max - min) * slot.amount;
	// 				if (!isFinite(d) || d == 0) { continue; }
	// 				variationslots.push({ d: d, price: price, slot: slot });
	// 			}
	// 		}
	// 	}
	// 	var frag = elfrag();

	// 	if (unknownslots.length != 0) {
	// 		frag.appendChild(eldiv("crty-header", ["Unknown items"]));
	// 		frag.appendChild(eldiv("crty-story", ["These items are not in the runeapps database. Please hover over them with your mouse in-game to read the names, or type the names manually."]));
	// 		for (var a in unknownslots) {
	// 			var slot = unknownslots[a];
	// 			var textbox = itemAutocompletebox();
	// 			textbox.firstChild.value = slot.nameread || "";

	// 			var confirm = function (t, s) {
	// 				s.nameread = t.firstChild.value;
	// 				fixPrices();
	// 			}.b(textbox, slot);
	// 			var resetimg = function (s) {
	// 				s.reset();
	// 				me.reader.read(null, true);
	// 			}.b(slot);
	// 			textbox.firstChild.onkeydown = function (confirm, e) { if (e.keyCode == 13) { confirm(); } }.bind(null, confirm);

	// 			var img = getSlotImg(unknownslots[a]);
	// 			frag.appendChild(eldiv("crty-unknown", [
	// 				img,
	// 				textbox,
	// 				eldiv("nisbutton2", { onclick: confirm }, ["Confirm"]),
	// 				eldiv("nisbutton2", { onclick: resetimg, title: "Click to discard this image and read this item again" }, ["Bad image"])
	// 			]));
	// 		}
	// 	}
	// 	if (variationslots.length != 0) {
	// 		frag.appendChild(eldiv("crty-header", ["Uncertain matches"]));
	// 		frag.appendChild(eldiv("crty-story", ["These items match multiple ge prices. To increase the accuracy of your price check please select the right price."]))
	// 		variationslots = variationslots.sort(function (a, b) { return b.d - a.d; });
	// 		for (var a = 0; a < variationslots.length; a++) {
	// 			frag.appendChild(slotDiv(variationslots[a].slot, els.body));
	// 		}
	// 	}
	// 	if (unknownslots.length == 0 && variationslots.length == 0) {
	// 		frag.appendChild(eldiv("crty-header", ["All good"]));
	// 		frag.appendChild(eldiv("crty-story", ["There are no unrecognized items."]));
	// 	}

	// 	return frag;
	// }
	this.drawItems = function (tab) {
		var rows = (tab ? tab.rows.concat(tab.tabspaces).sort(function (a, b) { return a.scrolly - b.scrolly; }) : []);
		var frag = elfrag();
		var lasty = 0;
		for (var a = 0; a < rows.length; a++) {
			var row = rows[a];
			if (row.scrolly - lasty > 54) {
				frag.appendChild(eldiv("bank-gap"));
			}
			if (!row.slots) {
				frag.appendChild(eldiv("bank-tabspace", { onclick: function (row) { me.activetab = row.tabnr; me.draw(); }.b(row) }, ["tab " + row.tabnr]));
				lasty = row.scrolly + 15;
			}
			else {
				var el = eldiv("bank-row");
				var slotcount = 0;
				for (var b = 0; b < row.slots.length; b++) {
					var slot = row.slots[b];
					el.appendChild(slotDiv(slot, els.body));
					if (slot.imginfo && !slot.imginfo.empty) { slotcount++; }
				}
				if (slotcount != 0) {
					frag.appendChild(el);
				}
				lasty = row.scrolly + 44;
			}
		}
		return frag;
	}
}

function slotDiv(slot, container) {
	var price = slot.price;
	var cnv = getSlotImg(slot);
	var div = eldiv("bank-slot", [cnv]);
	var titles = [];

	var slotvalue = "0";
	titles.push(slot.amount + "x");
	if (price) {
		if (price.selected != null) {
			var value = slot.amount * price.selected.value;
			titles.push(price.selected.name);
			titles.push(smallu(value, true) + " (" + smallu(price.selected.value, true) + " each)");
			slotvalue = smallu(value);
		}
	}

	if (slot.imginfo && !slot.imginfo.empty) {
		div.appendChild(eldiv("bank-slotvalue", [slotvalue]));
	}
	div.slot = slot;//TODO remove
	div.title = titles.join("\n");
	div.onclick = clickSlot.b(slot, div, container);
	return div;
}

function getSlotImg(slot) {
	if (slot.cachedimg) {
		return slot.cachedimg;
	}
	else if (slot.buffer) {
		var div = slot.buffer.toImage();
		div.classList.add("bank-slotimg");
		slot.cachedimg = div;
		return div;
	}
	else {
		return eldiv("bank-slotimg");
	}
}

function itemAutocompletebox() {
	var el = eldiv("crty-iteminput nisinput:input/text");
	var lock = false;
	var cooldown = 300;
	var timer = 0;
	var last = 0;

	var loaded = function (t) {
		var names = jsonDecode(t);
		if (!names) { failed(); return; }
		lock = false;
		last = Date.now();
		timer = 0;
		scope.setSuggests(names);
	}
	var failed = function (t) {
		lock = false;
		last = Date.now();
		timer = 0;
	}

	var getsuggests = function () {
		if (lock || Date.now() - last < cooldown) {
			if (!timer) { timer = setTimeout(getsuggests, last + cooldown - Date.now()); }
			return;
		}
		lock = true;
		// dlpage(apibase + "autocomplete.php?q=" + encodeURIComponent(scope.originalword), loaded, failed);
	}

	var scope = bindAutoComplete(el, getsuggests);
	scope.singleword = true;
	return eldiv("crty-wrapper", [el]);
}

var count, mats, index;

function buildTable() {
	$(".mats > .row").remove();
	materials.forEach(mat => {
		let name = mat.name.replace("'", "");
		$(".mats").append(`
	<div class='row' data-name="${name}">
	<div class="col hide"><input type="checkbox" class="hideMe" ${mat.hide ? "checked=checked" : ""}/></div>
		<div class='col-6' title="\nLevel: ${mat.level}\nFaction: ${mat.faction}\nLocation(s):\n${mat.location}">
		${mat.name}
		</div>
		<div class="col qty">
		${mat.qty}
		</div>
		<div class="col goal">
		${mat.goal}
		</div>
		</div>`);
	})
	if (localStorage.getItem("filter") === "true") {
		$(".filter").prop("checked", true)
	}
	if (localStorage.getItem("goals") === "true") {
		$(".goals").prop("checked", true)
		$(".goal, .goalCol").show();
	}
	if ($(".edit").is(":checked"))
		$(".hide").show();
	tidyTable();
}

function tidyTable(name) {
	localStorage.mats = JSON.stringify(materials);
	$(`[data-name="${name}"]`).removeClass('normal complete')
	$(`[data-name="${name}"]`).addClass("getMat")
	materials.forEach(mat => {
		let name = mat.name.replace("'", "");
		$("[data-name='" + name + "'] > .qty").text(mat.qty);
		if ((mat.qty >= 0 && mat.goal > 0) && mat.qty >= mat.goal && localStorage.goals === "true") {
			$(`[data-name="${name}"]`).removeClass('getMat normal')
			$(`[data-name="${name}"]`).addClass("complete")
		} else {
			setTimeout(function () {
				$(`[data-name="${name}"]`).removeClass('getMat complete')
				$(`[data-name="${name}"]`).addClass("normal")
			}, 500)
		}
	})
	if (localStorage.filter === "true" && !$(".edit").is(":checked")) {
		materials.forEach(mat => {
			let name = mat.name.replace("'", "")
			if ((mat.qty === 0 && mat.goal === 0) || mat.hide === true) {
				$(`[data-name='${name}']`).hide();
			} else {
				$(`[data-name='${name}']`).show();
			}
		});
	}
}

$(function () {

	buildTable();

	$("button, input, select, body").attr("tabindex", "-1");

	$(".edit").change(function () {
		document.querySelectorAll(".hideMe").forEach((row, i) => {
			if (row.checked === true)
				materials[i].hide = true
			else
				materials[i].hide = false
		})
		if ($(this).is(':checked')) {
			$(".filter, .clear").prop("disabled", true)

			// Apply tabindex
			$(".row .qty").attr("tabindex", "1");
			$(".row .goal").attr("tabindex", "2");


			document.querySelectorAll(".col-6").forEach(row => {
				row.classList.remove("col-6")
				row.classList.add("col-4")
			})
			if ($(".tracker").text() == "Stop") {
				$(".tracker").click();
			}
			$(".row:hidden, .hide").show();
			$(".qty, .goal").attr('contenteditable', 'true').on("focus", function () { document.execCommand('selectAll', false, null); });
			$(".qty:first").focus();
		} else {
			if ($(".tracker").text() == "Start") {
				$(".tracker").click();
			}
			$(".filter, .clear").prop("disabled", false);
			$(".row .qty,.row .goal").removeAttr("tabindex");
			document.querySelectorAll(".col-4").forEach(row => {
				row.classList.remove("col-4")
				row.classList.add("col-6")
			})
			$(".hide").hide();
			$(".qty, .goal").removeAttr('contenteditable');
			materials.forEach(mat => {
				let name = mat.name.replace("'", "");
				mat.qty = parseInt($(`[data-name='${name}'] .qty`).text());
				mat.goal = parseInt($(`[data-name='${name}'] .goal`).text());
			})
			buildTable();
		}
	});

	let tracking;

	$(".clear").click(function (e) {
		var sbox = promptbox2({ width: document.body.offsetWidth, title: `Clear ${e.target.name}`, style: "nis" }, [
			{ t: "text", text: `Are you sure you want to clear ${e.target.name}?` },
			{ t: "h/11" },
			{ t: "button:confirm", text: "Confirm" },
			{ t: "button:cancel", text: "Cancel" }
		]);
		sbox.confirm.onclick = function () {
			let type = e.target.dataset.type;
			materials.forEach(mat => {
				mat[type] = 0;
			})
			buildTable()
			sbox.frame.close();
		}
		sbox.cancel.onclick = sbox.frame.close.b();
	});

	$(".sort").click(e => {
		if (!$(".edit").is(":checked")) {
			let sort = e.target.dataset.sort;
			sortComps = sort;
			if (sort === "level")
				materials.sort((a, b) => a[sort] - b[sort])
			else
				materials.sort((a, b) => b[sort] - a[sort])
			buildTable();
			localStorage.sort = sort;
		}
	})

	$(".export").click(function () {
		var str = 'ComponentName,Quantity,goaled\n'; // column headers
		materials.forEach(mat => {
			let name = mat.name.replace("'", "");
			str = `${str}${name},${mat.qty},${mat.goal}\n`;
		})
		var blob = new Blob([str], { type: 'text/csv;charset=utf-8;' });
		if (navigator.msSaveBlob) { // IE 10+
			navigator.msSaveBlob(blob, "componentExport.csv");
		} else {
			var link = document.createElement("a");
			if (link.download !== undefined) { // feature detection
				// Browsers that support HTML5 download attribute
				var url = URL.createObjectURL(blob);
				link.setAttribute("href", url);
				link.setAttribute("download", "archMatsExport.csv");
				link.style.visibility = 'hidden';
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
		}
	});

	$(".filter").change(function () {
		if (!$(".edit").is(":checked")) {
			localStorage.filter = $(this).is(":checked");
			$(".mats .row").show();
			tidyTable();
		}
	})

	$(".goals").change(function () {
		localStorage.goals = $(this).is(":checked");
		if (localStorage.goals === "true") {
			$(".goal, .goalCol").show();
			tidyTable();
		} else {
			$(".goal, .goalCol").hide();
			tidyTable();
		}
	})

	$("button.tracker").click();

	$("#menu").on("shown.bs.collapse", function () { $("body").addClass("expand") })
	$("#menu").on("hide.bs.collapse", function () { $("body").removeClass("expand"), buildTable() })

	localStorage.removeItem("goalMats")
	function onStorageEvent(storageEvent) {
		if (storageEvent.key === "goalMats") {
			var mats = JSON.parse(storageEvent.newValue)
			materials.forEach((mat, i) => {
				mat.goal = parseInt(mats[mat.name])
			})
			buildTable()
		}
	}

	window.addEventListener('storage', onStorageEvent, false);

	$(".openImport").click(function () {
		window.open("/arch-mats/artefacts.html", "", "width=400")
	})

})
