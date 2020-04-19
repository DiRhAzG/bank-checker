///<reference path="runeappslib.js"/>
///<reference path="alt1lib.js"/>
///<reference path="buffs.js"/>
///<reference path="scripts.js"/>
"use strict";

function createUservarInput(id, value, meta) {
	if (["string", "int", "number", "color"].indexOf(meta.t) != -1) {
		return [
			{ t: "h/11" },
			{ t: "text", text: meta.n },
			{ t: meta.t, id: id, v: value }
		];
	}
	else if (meta.t == "dropdown") {
		return [
			{ t: "h/11" },
			{ t: "text", text: meta.n },
			{ t: "dropdown", id: id, options: meta.options || meta.getOptions(), v: value }
		]
	}
	else if (meta.t == "bool") { return [{ t: "bool", id: id, v: value, text: meta.n }]; }
	else if (meta.t == "nullstring") { return nullstringinput(id, value, meta); }
	else if (meta.t == "triggerlines") { return triggerLinesInput(id, value, meta); }
	else if (meta.t == "triggerdrops") { return dropsTriggerLines(id, value, meta); }
	else if (meta.t == "colorlist") { return colorListInput(id, value, meta); }
	else if (meta.t == "alarm") { return alarminput(id, value, meta); }
	else if (meta.t == "voice") { return voiceinput(id, value, meta); }
	else if (meta.t == "bufftype") { return buffTypeInput(id, value, meta); }
}

function chatTextImporter(lines, colors) {
	var reader = new ChatBoxReader();
	reader.diffRead = false;
	var scanmode = true;

	var initialize = function () {
		var img = a1lib.bindfullrs();
		reader.find(img);
		draw(img);
	}

	var draw = setTimeout.b(function (img) {
		if (!img) { img = a1lib.bindfullrs(); }
		if (!reader.pos) { reader.find(img); }
		var t = Date.now();
		var cols = colors.dom.getValue();
		if (scanmode) { cols = cols.concat(ChatBoxReader.defaultcolors); }
		if (cols.length == 0) { cols.push([0, 0, 0]); }
		reader.readargs = { colors: cols.map(col => a1lib.mixcolor(col[0], col[1], col[2])), backwards: true };
		var readlines = reader.read(img);
		t = Date.now() - t;
		if (!readlines) { readlines = []; }
		var frag = elfrag.apply(null, readlines.map(function (line) {
			return eldiv("chatbox-line chatbox-line-clickable", line.fragments.map(function (frag) {
				return eldiv("chatbox-linefrag", {
					onmouseup: function (line) { clickline(line, dom.ownerDocument.getSelection()); }.b(line),
					style: "color:" + coltohex(frag.color) + ";"
				}, [frag.el = document.createTextNode(frag.text)]);
			}));
		}));
		elput(els.chatbox, frag);
		els.searchtime.innerText = t + "ms";
	}, 1);

	var clickline = function (lineinfo, selection) {
		var cols = [];
		var line = "";
		var clicktext = function (textfrag, selection) {
			if (!selection) { selection = dom.ownerDocument.getSelection(); }
			cols = [];
			line = selection.toString() || textfrag.text;
			line = line.replace(/(^\W+|\W+$)/g, "");
			var nodesfound = 0;
			for (var a = 0; a < lineinfo.fragments.length; a++) {
				if (cols.indexOf(lineinfo.fragments[a].color) == -1) { cols.push(lineinfo.fragments[a].color); }
				if (lineinfo.fragments[a].el == selection.baseNode) { nodesfound++ }
				if (lineinfo.fragments[a].el == selection.extentNode) { nodesfound++; }
				if (nodesfound == 2) { break; }
			}
			draw();
		}
		var draw = function () {
			elclear(box.cols);
			for (var a in cols) {
				if (a != 0) { box.cols.appendChild(eldiv({ style: "width:2px;" })); }
				box.cols.appendChild(eldiv("chatbox-color pb2-input", { style: "background-color:" + coltohex(cols[a]) }));
			}
			box.text.setValue(line);
		}
		var linefrag = eldiv("chatbox-line chatbox-line-clickable", lineinfo.fragments.map(function (frag) {
			return eldiv("chatbox-linefrag", { onmouseup: clicktext.b(frag), style: "color:" + coltohex(frag.color) + ";" }, [frag.el = document.createTextNode(frag.text)]);
		}));
		var buttons = [
			{ t: "text", text: "Choose what part of the text to detect" },
			{ t: "custom:line", dom: eldiv("chatbox-content", [linefrag]) },
			{ t: "h/12" },
			{ t: "text", text: "Text to detect" },
			{ t: "string:text" },
			{ t: "h/12" },
			{ t: "text", text: "Colors" },
			{ t: "custom:cols", dom: eldiv("chatbox-colorbox pb2-boxitem") },
			{ t: "text", text: "Select the alerter progress bar when this text is detected. Setting this to 100 will trigger the alert when this text is read." },
			{ t: "h/12" },
			{ t: "text", text: "Progress (0-100)" },
			{ t: "int:percent", v: 100, min: 0, max: 100 },
			{ t: "h/11" },
			{ t: "button:confirm", text: "Confirm" },
			{ t: "button:cancel", text: "Cancel" }
		];
		var box = promptbox2({ title: "Refine the text trigger", style: "fakepopup", width: 370, parent: dom.ownerDocument.body }, buttons);
		box.confirm.onclick = function () {
			var sumcols = colors.dom.getValue();
			for (var a in cols) {
				var isnew = true;
				var r = (cols[a] >> 16) & 0xff, g = (cols[a] >> 8) & 0xff, b = (cols[a] >> 0) & 0xff;
				for (var c in sumcols) { if (sumcols[c][0] == r && sumcols[c][1] == g && sumcols[c][2] == b) { isnew = false; } }
				if (isnew) { sumcols.push([r, g, b]); }
			}
			colors.dom.setValue(sumcols);
			var sumlines = lines.dom.getValue();
			sumlines.push({ text: box.text.getValue(), percent: box.percent.getValue() });
			lines.dom.setValue(sumlines);
			box.frame.close();
		}
		box.cancel.onclick = box.frame.close.b();
		clicktext(lineinfo.fragments[lineinfo.fragments.length - 1], selection);
	}

	var els = {};
	var dom = eldiv("chatbox", [
		els.menu = eldiv("chatbox-menu", [
			els.searchtime = eldiv("chatbox-menuitem chatbox-time"),
			els.scan = eldiv("chatbox-menuitem chatbox-tab", { title: "Scan the chatbox in order to find everything. This is slow and is not used when running. Click the preview button to see what is detected when running." }, ["Scan text"]),
			els.preview = eldiv("chatbox-menuitem chatbox-tab", { title: "Click here to show what Alt1 can read with the current settings." }, ["Preview"])
		]),
		els.chatbox = eldiv("chatbox-content", { style: "height:130px;" })
	]);

	els.scan.onclick = function () { scanmode = true; draw(); };
	els.preview.onclick = function () { scanmode = false; draw(); };

	setTimeout(initialize, 1);
	return { root: dom, draw: draw };
}

function colorListInput(id, value, meta) {
	var els = {};
	//base structure
	els.root = eldiv("triggerlines", [
		eldiv("triggerlines-head", [
			"Colors of text that are detected",
			els.clear = eldiv("triggerlines-clear iconbutton", { title: "Clear all colors" }),
			els.add = eldiv("triggerlines-addcolor iconbutton", { title: "Add color" })
		]),
		els.body = eldiv("triggerlines-body", [
			els.empty = eldiv("triggerlines-emptyline", ["You need to select colors to be detected. Click the chat box below or the green add button."])
		])
	]);
	//lines
	els.colors = [];
	var addcolor = function (color) {
		var line = {};
		line.root = eldiv("triggerlines-line", [
			line.colbox = eldiv("triggerlines-colbox", ["Click to pick color"]),
			line.red = eldiv("triggerlines-colpart:input/number", { min: 0, max: 255, title: "Red (0-255)" }),
			line.green = eldiv("triggerlines-colpart:input/number", { min: 0, max: 255, title: "Green (0-255)" }),
			line.blue = eldiv("triggerlines-colpart:input/number", { min: 0, max: 255, title: "Blue (0-255)" }),
			line.remove = eldiv("triggerlines-remove iconbutton", { title: "Remove" })
		]);
		line.red.onchange = line.green.onchange = line.blue.onchange = setlinecol.b(line);
		line.colbox.onclick = clickcolinput.b(line);
		line.remove.onclick = removeline.b(line);
		setlinecol(line, color);
		els.body.appendChild(line.root);
		els.colors.push(line);
		els.empty.style.display = els.colors.length == 0 ? "" : "none";
	}
	var removeline = function (line) {
		var i = els.colors.indexOf(line);
		els.body.removeChild(line.root);
		els.colors.splice(i, 1);
		els.empty.style.display = els.colors.length == 0 ? "" : "none";
	}
	var setlinecol = function (line, color) {
		if (!color) { color = [line.red.value, line.green.value, line.blue.value]; }
		line.colbox.style.color = "rgba(" + color[0] + "," + color[1] + "," + color[2] + ",0.9)";//alpha to look as shitty as the rs font
		line.red.value = color[0]; line.green.value = color[1]; line.blue.value = color[2];
	}
	var clearall = function () {
		for (var a = els.colors.length - 1; a >= 0; a--) { removeline(els.colors[a]); }
	}
	els.root.getValue = function () {
		var r = [];
		for (var a = 0; a < els.colors.length; a++) {
			r.push([els.colors[a].red.value, els.colors[a].green.value, els.colors[a].blue.value]);
		}
		return r;
	}
	els.root.setValue = function (value) {
		clearall();
		for (var a = 0; a < value.length; a++) { addcolor(value[a]); }
	}
	els.add.onclick = addcolor.b([255, 255, 255]);
	els.clear.onclick = clearall;

	//==== color input from screen part =====
	var interval = null;
	var inputcol = null;
	var clickcolinput = function (col) {
		var issame = col == inputcol;
		if (interval) { setStatus(inputcol, false); stopInterval(); }
		if (!issame) {
			inputcol = col;
			setStatus(col, true);
			startInterval();
		}
	}

	var startInterval = function () {
		interval = setInterval(colortick, 40);
		alt1.events.alt1pressed.push(stopInterval);
		//a1lib.on("alt1pressed", stopInterval);
	}

	var stopInterval = function () {
		var i = alt1.events.alt1pressed.indexOf(startInterval);
		if (i) { alt1.events.alt1pressed.splice(i, 1); }
		//a1lib.removeListener("alt1pressed", stopInterval);
		clearInterval(interval);
		setStatus(inputcol, false);
		interval = null;
		inputcol = null;
	}

	var setStatus = function (col, state) {
		col.colbox.innerText = (state ? "Alt+1 to confirm" : "Click to pick color");
	}

	var tickcount = 0;
	var colortick = function () {
		var w = 16, h = 10;
		if (!inputcol || !inputcol.colbox.ownerDocument || !inputcol.colbox.ownerDocument.defaultView) { stopInterval(); return; }
		var pos = a1lib.mousePosition();
		var buf = a1lib.getregion(pos.x - w / 2 | 0, pos.y - h / 2 | 0, w, h);
		/*
		var r = 0, g = 0, b = 0, max = 0;
		for (var i = 0; i < buf.data.length; i += 4) {
			var lum = buf.data[i] + buf.data[i + 1] + buf.data[i + 2];
			if (lum > max) { max = lum; r = buf.data[i]; g = buf.data[i + 1]; b = buf.data[i + 2]; }
		}
		var col = [r, g, b];
		/*/
		var col = ChatBoxReader.getFontColor(buf, 0, 0, buf.width, buf.height);
		//*/
		setlinecol(inputcol, col);
		alt1.overLaySetGroup("fontcolor-" + tickcount);
		alt1.overLayRect(a1lib.mixcolor(255, 255, 255), pos.x - w / 2 | 0, pos.y - h / 2 | 0, w, h, 500, 1);
		alt1.overLayClearGroup("fontcolor-" + (tickcount - 1));
		tickcount++;
	}

	return { t: "custom", isinput: true, id: id, dom: els.root, v: value };
}

function triggerLinesInput(id, value, meta) {
	var els = {};
	//base structure
	els.root = eldiv("triggerlines", [
		eldiv("triggerlines-head", [
			"Text that triggers this alert",
			els.clear = eldiv("triggerlines-clear iconbutton", { title: "Clear all triggers" }),
			els.add = eldiv("triggerlines-addstring iconbutton", { title: "Add new trigger" })
		]),
		els.body = eldiv("triggerlines-body", [
			els.empty = eldiv("triggerlines-emptyline", ["Click chat box below to add new trigger text."])
		])
	]);
	//lines
	els.lines = [];
	var addline = function (name, percent) {
		var line = {};
		line.root = eldiv("triggerlines-line", [
			line.text = eldiv("triggerlines-text:input/text", { value: name, title: "Text to match." }),
			line.percent = eldiv("triggerlines-percent:input/number", { value: percent, title: "Progress after reading this text. (0-100)" }),
			line.remove = eldiv("triggerlines-remove iconbutton", { title: "Remove" })
		]);
		line.remove.onclick = removeline.b(line);
		els.body.appendChild(line.root);
		els.lines.push(line);
		els.empty.style.display = els.lines.length == 0 ? "" : "none";
	}
	var removeline = function (line) {
		var i = els.lines.indexOf(line);
		els.body.removeChild(line.root);
		els.lines.splice(i, 1);
		els.empty.style.display = els.lines.length == 0 ? "" : "none";
	}
	var clearall = function () {
		for (var a = els.lines.length - 1; a >= 0; a--) { removeline(els.lines[a]); }
	}
	els.root.getValue = function () {
		var r = [];
		for (var a = 0; a < els.lines.length; a++) {
			r.push({ text: els.lines[a].text.value, percent: parseInt(els.lines[a].percent.value) });
		}
		r.sort(function (a, b) { return a.percent - b.percent });
		return r;
	}
	els.root.setValue = function (value) {
		clearall();
		for (var a = 0; a < value.length; a++) { addline(value[a].text, value[a].percent); }
	}
	els.add.onclick = addline.b("", 0);
	els.clear.onclick = clearall;

	return { t: "custom", isinput: true, id: id, dom: els.root, v: value };
}

function dropsTriggerLines(id, value, meta) {
	var els = {};
	//base structure
	els.root = eldiv("triggerlines", [
		eldiv("triggerlines-head", [
			meta.title,
			els.clear = eldiv("triggerlines-clear iconbutton", { title: "Clear all items" }),
			els.add = eldiv("triggerlines-addstring iconbutton", { title: "Add new item" })
		]),
		els.body = eldiv("triggerlines-body", [
			els.empty = eldiv("triggerlines-emptyline", ["Click the green + to add a new item."])
		])
	]);
	//lines
	els.lines = [];
	var addline = function (name) {
		var line = {};
		line.root = eldiv("triggerlines-line", [
			line.text = eldiv("triggerlines-text:input/text", { value: name, title: "Text to match." }),
			line.remove = eldiv("triggerlines-remove iconbutton", { title: "Remove" })
		]);
		line.remove.onclick = removeline.b(line);
		els.body.appendChild(line.root);
		els.lines.push(line);
		els.empty.style.display = els.lines.length == 0 ? "" : "none";
	}
	var removeline = function (line) {
		var i = els.lines.indexOf(line);
		els.body.removeChild(line.root);
		els.lines.splice(i, 1);
		els.empty.style.display = els.lines.length == 0 ? "" : "none";
	}
	var clearall = function () {
		for (var a = els.lines.length - 1; a >= 0; a--) { removeline(els.lines[a]); }
	}
	els.root.getValue = function () {
		var r = [];
		for (var a = 0; a < els.lines.length; a++) {
			r.push({ text: els.lines[a].text.value });
		}
		return r;
	}
	els.root.setValue = function (value) {
		clearall();
		for (var a = 0; a < value.length; a++) { addline(value[a].text); }
	}
	els.add.onclick = addline.b("");
	els.clear.onclick = clearall;

	return { t: "custom", isinput: true, id: id, dom: els.root, v: value };
}

function buffTypeInput(id, startvalue, meta) {
	var els = {};
	var selectedBuff = null;
	var buffels = [];

	var selectBuff = function (buffinfo) {
		var bestmatch = null;
		var bestfinal = false;
		var selectedels = [];
		if (buffinfo != null) {
			for (var a in buffels) {
				if (AfkCompiled.BuffReader.compareBuffer(buffinfo.imgdata, 0, 0, buffels[a].buff.imgdata)) {
					selectedels.push(buffels[a].el);
					if (!bestfinal || buffels[a].buff.final) {
						bestmatch = buffels[a].buff;
						bestfinal = buffels[a].buff.final;
					}
				}
			}
		}
		selectedBuff = bestmatch;

		//fix all button states
		for (var a in buffels) { buffels[a].el.classList.remove("selected"); }
		for (var a in selectedels) { selectedels[a].classList.add("selected"); }
	};

	var drawBuffs = function () {
		var buffButton = function (buffinfo, parent) {
			if (!buffinfo.imgdata) { return null; }
			var div = buffinfo.imgdata.toImage();
			div.classList.add("buffinput-buff");
			div.title = buffinfo.name;
			div.onclick = selectBuff.b(buffinfo);

			parent.appendChild(div);
			buffels.push({ el: div, buff: buffinfo });
			return div;
		}

		buffels = [];
		elclear(els.container);

		//visible in game
		var buffstate = [];
		if (sharedBuffReader.tryFind()) { buffstate = buffstate.concat(sharedBuffReader.reader.read()); }
		if (sharedDebuffReader.tryFind()) { buffstate = buffstate.concat(sharedDebuffReader.reader.read()); }
		if (buffstate.length != 0) {
			var div = eldiv("buffinput-section");
			for (var a in buffstate) {
				var b = buffstate[a];
				var imgdata = b.buffer.clone(new Rect(b.bufferx + 1, b.buffery + 1, AfkCompiled.BuffReader.buffsize - 2, AfkCompiled.BuffReader.buffsize - 2));
				var buffinfo = new AfkCompiled.BuffInfo(imgdata, "Unknown buff", "", false, b.isdebuff);
				buffButton(buffinfo, div);
			}
			els.container.appendChild(div);
		}
		else {
			els.container.appendChild(eldiv({ style: "color:rgba(0,0,0,0.7); margin:5px;" }, ["No buffs visibly on your screen"]));
		}

		var knowndiv = eldiv("buffinput-section");
		if (startvalue && startvalue.buffid == "") {
			var b = buffButton(startvalue, knowndiv);
			b.title = "Currently saved buff\nThis image improves over time as the buff timer depletes";
		}

		//all known predefined buffs
		for (var a in AfkCompiled.BuffInfo.buffs) {
			buffButton(AfkCompiled.BuffInfo.fromPreset(a), knowndiv);
		}
		els.container.appendChild(knowndiv);
	}

	els.root = eldiv("buffinput", [
		eldiv("buffinput-head", ["Select a buff to track", eldiv("buffinput-reload", { title: "Check for new buffs", onclick: drawBuffs })]),
		els.container = eldiv()
	]);
	drawBuffs();

	els.root.setValue = function (v) { selectBuff(v); }
	els.root.getValue = function () { return selectedBuff; }

	return [{ t: "custom", isinput: true, id: id, dom: els.root, v: startvalue }];
}

function soundUploadMenu(parent, callback) {
	var box = promptbox2({ title: "Choose custom sound", parent: parent, style: "fakepopup", width: 260 }, [
		{ t: "text", text: "Enter an existing sound id or upload a new mp3 or wav sound." },
		{ t: "h/11" },
		{ t: "text", text: "Sound name" },
		{ t: "string:filename" },
		{ t: "h/11" },
		{ t: "text", text: "Sound id" },
		{ t: "string:fileid" },
		{ t: "h/31" },
		{ t: "file:file" },
		{ t: "button:upload", text: "Upload" },
		{ t: "h/11" },
		{ t: "button:confirm", text: "Confirm" },
		{ t: "button:cancel", text: "Cancel" }
	]);

	box.upload.onclick = function () {
		var file = box.file.getValue();
		if (!file) { return; }
		var reader = new FileReader();
		var errorfunc = function (t) {
			promptbox2({ parent: parent, style: "fakepopup", width: 190, title: "Error" }, [
				{ t: "text", text: t }
			]);
			box.file.setValue();
			box.upload.disabled = false;
			box.upload.value = "Upload";
		}
		reader.onloadend = function () {
			dlpagepost("/i/upload.php", { img: reader.result }, function (t) {
				var idmatch = t.match(/imgid='(\w{3,6})'/)
				if (!idmatch) { errorfunc("Failed to upload audio: " + t); return; }
				box.fileid.setValue(idmatch[1]);
				var fileparts = file.name.split(".");
				if (fileparts.length > 1) { fileparts.length--; }
				box.filename.setValue(fileparts.join("."));
				box.upload.value = "Uploaded!";
			}, function (e) {
				errorfunc("Upload failed: " + e);
			});
		}
		reader.onerror = function () { errorfunc("Failed to read the selected file."); }
		reader.readAsDataURL(file);

		box.upload.disabled = true;
		box.upload.value = "Loading...";
	}

	box.cancel.onclick = function () { box.frame.close(); }
	box.confirm.onclick = function () {
		var id = "upload:" + box.fileid.getValue() + ":" + box.filename.getValue();
		var meta = soundCache.getSoundMeta(id);
		callback(id, meta);
		box.frame.close();
	}
}

function alarminput(id, value, meta) {
	var soundplayer = new SoundPlayer();
	var soundDropdownOptions = function () {
		var r = {};
		for (var a in sounds) { r[a] = sounds[a].name; }
		r["upload"] = "Upload new sound";
		for (var a in customSounds.cache) {
			var meta = soundCache.getSoundMeta(customSounds.cache[a])
			r[customSounds.cache[a]] = meta.name;
		}
		return r;
	}
	var soundopts = soundDropdownOptions();

	var sub = promptboxbuttons2([
		{ t: "bool:enableaudio", text: meta.n },
		{ t: "subregion/4:audiosub" },
		{ t: "h/11" },
		{ t: "text", text: "Alarm sound" },
		{ t: "dropdown:sound", options: soundopts },
		{ t: "bool:repeat", text: "Repeat" }
	]);

	var addcustomsound = function (id, name) {
		sub.sound.appendChild(eldiv(":option", { value: id }, [name]));
	}
	if (value) {
		var meta = soundCache.getSoundMeta(value.sound);
		if (meta && meta.uploadid) { addcustomsound(value.sound, meta.name); }
	}

	sub.sound.onchange = function () {
		var soundid = sub.sound.getValue();
		if (soundid == "upload") {
			soundUploadMenu(sub.sound.ownerDocument.body, function (id, meta) {
				addcustomsound(id, meta.name);
				customSounds.addSound(id);
				sub.sound.setValue(id);
			});
			return;
		}
		var sound = soundCache.getSoundMeta(soundid);
		if (!sound) { return; }
		soundplayer.stop();
		soundplayer.play({ sound: soundid, loop: false });
	}

	sub.enableaudio.onchange = function () {
		sub.audiosub.setLocked(!sub.enableaudio.getValue());
	}

	sub.frag.setValue = function (v) {
		sub.audiosub.setLocked(!v);
		sub.enableaudio.setValue(!!v);
		if (v) {
			sub.enableaudio.setValue(true);
			sub.sound.setValue(v.sound);
			sub.repeat.setValue(v.repeat);
		}
	}
	sub.frag.getValue = function () {
		if (!sub.enableaudio.getValue()) { return null; }
		else {
			return { sound: sub.sound.getValue(), repeat: sub.repeat.getValue() };
		}
	}
	return [{ t: "custom", isinput: true, id: id, dom: sub.frag, v: value }];
}

function voiceinput(id, value, meta) {
	var els = {};
	var soundplayer = new SoundPlayer();
	soundplayer.isvoice = true;

	var sub = promptboxbuttons2([
		{ t: "bool:enablevoice", text: meta.n },
		{ t: "subregion/8:voicesub" },
		{ t: "h/11" },
		{ t: "text", text: "Text" },
		{ t: "string:text" },
		{ t: "h/211" },
		{ t: "text", text: "Speed / Pitch", style: "margin-right:10px;" },
		{ t: "int:speed", min: 50, max: 500 },
		{ t: "int:pitch", min: 0, max: 100 },
		{ t: "button:preview", text: "Preview" }
	]);

	sub.preview.onclick = function () {
		var v = sub.frag.getValue();
		if (v) {
			soundplayer.stop();
			soundplayer.play(v);
		}
	}

	sub.enablevoice.onchange = function () {
		sub.voicesub.setLocked(!sub.enablevoice.getValue());
	}

	sub.frag.setValue = function (v) {
		sub.voicesub.setLocked(!v);
		sub.enablevoice.setValue(!!v);
		if (v) {
			sub.text.setValue(v.text);
			sub.speed.setValue(v.speed);
			sub.pitch.setValue(v.pitch);
		}
		else {
			sub.text.setValue("");
			sub.speed.setValue(175);
			sub.pitch.setValue(50);
		}
	}
	sub.frag.getValue = function () {
		if (!sub.enablevoice.getValue()) { return null; }
		else {
			return { text: sub.text.getValue(), speed: sub.speed.getValue(), pitch: sub.pitch.getValue() };
		}
	}
	return [{ t: "custom", isinput: true, id: id, dom: sub.frag, v: value }];
}

function nullstringinput(id, value, meta) {

	var sub = promptboxbuttons2([
		{ t: "bool:enable", text: meta.n },
		{ t: "subregion/3:sub" },
		{ t: "h/11" },
		{ t: "text", text: "Text" },
		{ t: "string:str" }
	]);

	sub.enable.onchange = function () {
		sub.sub.setLocked(!sub.enable.getValue());
	}

	sub.frag.setValue = function (v) {
		sub.enable.setValue(!!v);
		sub.sub.setLocked(!v);
		sub.str.setValue(v || "");
	}

	sub.frag.getValue = function () {
		return !sub.enable.getValue() ? "" : sub.str.getValue();
	}

	return [{ t: "custom", isinput: true, id: id, dom: sub.frag, v: value }];
}

function storeUservar(value, meta) {
	return value;
}

function loadUservar(value, meta) {
	if (meta.t == "string" || meta.t == "nullstring") {
		if (typeof value != "string") { return meta.default || ""; }
		return value;
	}
	if (meta.t == "int") {
		if (typeof value != "number") { return meta.default || 0; }
		return Math.round(value);
	}
	if (meta.t == "number") {
		if (typeof value != "number") { return meta.default || 0; }
		return value;
	}
	if (meta.t == "bool") {
		if (typeof value != "boolean") { return meta.default || false; }
		return value;
	}
	if (meta.t == "dropdown") {
		var opts = meta.options || meta.getOptions();
		if (typeof value != "string" || !opts[value]) { return meta.default || ""; }
		return value;
	}
	if (meta.t == "alarm") {
		if (value == null || typeof value != "object") { return null; }
		var r = { sound: null, repeat: false };
		if (typeof value.sound == "string" && soundCache.getSoundMeta(value.sound)) { r.sound = value.sound; }
		r.repeat = !!value.repeat;
		return r;
	}
	if (meta.t == "voice") {
		if (value == null || typeof value != "object") { return null; }
		var r = { text: "", pitch: 50, speed: 175 };
		if (typeof value.text == "string" && value.text.length < 500) { r.text = value.text; }
		if (!isNaN(value.speed)) { r.speed = +value.speed; }
		if (!isNaN(value.pitch)) { r.pitch = +value.pitch; }
		return r;
	}
	if (meta.t == "triggerlines") {
		if (!Array.isArray(value)) { return []; }
		var r = [];
		for (var a = 0; a < value.length; a++) {
			if (!value[a] || typeof value[a].percent != "number" || typeof value[a].text != "string") { continue; }
			r.push({ percent: value[a].percent, text: value[a].text });
		}
		return r;
	}
	if (meta.t == "triggerdrops") {
		if (!Array.isArray(value)) { return []; }
		var r = [];
		for (var a = 0; a < value.length; a++) {
			if (!value[a] || typeof value[a].text != "string") { continue; }
			r.push({ text: value[a].text });
		}
		return r;
	}
	if (meta.t == "colorlist") {
		if (!Array.isArray(value)) { return []; }
		var r = [];
		for (var a = 0; a < value.length; a++) {
			if (!Array.isArray(value[a]) || value[a].length != 3) { continue; }
			if (isNaN(value[a][0]) || isNaN(value[a][1]) || isNaN(value[a][2])) { continue; }
			r.push([value[a][0] & 0xff, value[a][1] & 0xff, value[a][2] & 0xff]);
		}
		return r;
	}
	if (meta.t == "bufftype") {
		return AfkCompiled.BuffInfo.fromObject(value);
	}
	throw ("Value type '" + meta.t + "' not supported");
}

//==========================================================================
//============================= Alerter ====================================
//==========================================================================
Alerter.types = {
	inactive: AlerterInactive,
	chat: AlerterChat,
	craftmenu: AlerterCraftMenu,
	xpcounter: AlerterXpCounter,
	sheathe: AlerterSheathe,
	buffs: AlerterBuffs,
	actionbar: AlerterActionbar,
	castlewars: AlerterCastlewars,
	artisansworkshop: AlerterArtisansWorkshop,
	dialogtextsimple: AlerterDialog,
	fightkiln: AlerterFightKiln,
	targetdeath: AlerterTargetDeath,
	drops: AlerterDrops
};
Alerter.uservars = {
	name: { n: "Alarm display name", t: "string" },
	globalalarm: { n: "Trigger global alarm", t: "bool", default: true },
	alarm: { n: "Audio alarm", t: "alarm", default: null },
	voice: { n: "Voice alarm", t: "voice", default: null },
	tooltip: { n: "Show cursor tooltip", t: "nullstring", default: "" },
	exportbar: { n: "Show progress bar in taskbar", t: "bool", default: true }
};
function Alerter(args) {
	var me = this;
	var ctr = this.constructor;
	//properties
	this.type = "none";
	this.descr = "No description available";
	this.helppage = null;
	this.els = null;
	this.ticks = (typeof args.ticks == "number" ? args.ticks : this.ticks || 1);
	this.settingsWidth = 300;

	//state
	this.triggered = false;
	this.bar = 0;
	this.active = false;
	this.functional = true;
	this.soundplayer = new SoundPlayer();
	this.voiceplayer = new SoundPlayer();
	this.voiceplayer.isvoice = true;
	this.currenttooltip = "";
	this.paused = false;

	//constructor code
	for (let a in ctr.uservars) {
		this[a] = loadUservar(args[a], ctr.uservars[a]);
	}

	//override these to change behavoir in case it requires a startup
	this.start = function () { this.active = true; }
	this.stop = function () { this.active = false; }
	this.check = function () { };

	this.tick = function () {
		if (this.active && !this.paused) { this.check(); }
		this.updatedraw();
	}

	this.updatedraw = function () {
		if (!this.els) { this.draw(); return; }
		this.els.barinner.style.width = Math.min(100, this.bar * 100) + "%";
		toggleclass(this.els.root, "active", this.active);
		toggleclass(this.els.root, "notfunctional", !this.functional);
		toggleclass(this.els.root, "triggered", this.triggered);
		toggleclass(this.els.root, "paused", this.paused);

		var title = "";
		if (!this.functional) { title = "This alerter is not currently functional. This might be because it is still searching for the interface it is tracking."; }
		if (this.paused) { title = "This alert is paused and will not trigger."; }
		this.els.name.title = title;
	};

	this.draw = function () {
		var nextsib = null;
		if (this.els && this.els.root.parentElement) {
			nextsib = this.els.root.nextElementSibling;
			this.els.root.remove();
		}
		var els = this.els = {};
		els.root = eldiv("alerter alerter-" + this.type, [
			els.remove = eldiv("al-button al-remove", { title: "Remove" }),
			els.edit = eldiv("al-button al-settings", { title: "Settings" }),
			els.pause = eldiv("al-button al-pause", { title: "Pause/Unpause" }),
			els.helplink = eldiv("al-button al-help", { title: "Help" }),
			els.name = eldiv("al-name:span", [this.name]),
			eldiv({ style: "clear:both" }),
			els.bar = eldiv("al-bar", [
				els.barinner = eldiv("al-barinner")
			])
		]);
		if (!this.helppage) { els.helplink.style.display = "none"; }
		els.helplink.onclick = pagepopup.b(this.helppage, 400, 500);
		els.edit.onclick = this.showSettings;
		els.remove.onclick = this.remove;
		els.pause.onclick = this.togglePause.b();

		this.updatedraw();
		elid("alertroot").insertBefore(els.root, nextsib);
		toggleIntro();
	};

	this.togglePause = function (state) {
		if (state == undefined) { state = !me.paused; }
		me.paused = state;
		me.updatedraw();
	}

	this.remove = function () {
		var i = alerts.indexOf(me);
		if (i != -1) { alerts.splice(i, 1); }
		if (me.els && me.els.root.parentElement) {
			me.els.root.remove();
			me.els = null;
			toggleIntro();
		}
		me.soundplayer.stop();
		me.voiceplayer.stop();
	}

	this.applySettings = function (box) {
		for (let prop in ctr.uservars) {
			if (!box[prop] || !box[prop].getValue) { continue; }
			me[prop] = loadUservar(box[prop].getValue(), ctr.uservars[prop]);
		}
		me.draw();
	}

	this.getSettings = function () {
		return [];
	}

	this.createVarInput = function (prop) {
		return createUservarInput(prop, me[prop], ctr.uservars[prop]);
	}

	this.settingsButtons = function () {
		var buttons = [].concat(
			me.createVarInput("name"),
			me.getSettings(),
			{ t: "header", text: "When triggered" },
			me.createVarInput("globalalarm"),
			me.createVarInput("alarm"),
			me.createVarInput("voice"),
			me.createVarInput("tooltip")
		);

		var toggletooltip = function () {
			box.tooltipsub.setLocked = box.enabletooltip.getValue();
		}
		return buttons;
	}

	this.showSettings = function () {
		var buttons = [].concat(
			me.settingsButtons(),
			{ t: "header" },
			{ t: "h/11" },
			{ t: "button", text: "Confirm", onclick: () => { me.applySettings(box); box.frame.close(); } },
			{ t: "button", text: "Cancel", onclick: () => { box.frame.close(); } }
		);
		var box = promptbox2({ title: "Change " + me.name, style: "popup", width: me.settingsWidth, stylesheets: ["style.css"] }, buttons);
	};

	this.setTriggered = function (state) {
		this.triggered = state;

		var suppressed = settings.activeSuppress && alt1.rsLastActive < settings.suppressDelay;
		if (state && !suppressed) {
			var playvoice = this.voice ? function () { me.voiceplayer.play(me.voice); } : function () { };

			if (this.alarm) {
				this.soundplayer.play(this.alarm);
			}
			if (this.voice) {
				playvoice();
			}
		}
		if (!state || suppressed || !this.alarm) { this.soundplayer.stop(); }
		if (!state || suppressed || !this.voice) { this.voiceplayer.stop(); }
		this.currenttooltip = state && !suppressed ? this.tooltip : "";
	}

	this.initiate = function () {
		//preload sound
		this.soundplayer.loadSound(this.alarm);

		me.start();
		me.draw();
		setTimeout(function () {
			me.tick();
		}, 1);
	}

	this.export = function () {
		var r = {};
		for (var a in ctr.uservars) {
			r[a] = me[a];
		}
		r.type = me.type;
		return jsonEncode(r);//make sure we don't send an object ref
	}
}

//============================= inactive ====================================
AlerterInactive.prototype = Object.create(Alerter.prototype);
AlerterInactive.prototype.constructor = AlerterInactive;
AlerterInactive.uservars = applyobject({
	delay: { n: "Time (Seconds)", t: "number" }
}, Alerter.uservars);
function AlerterInactive(args) {
	Alerter.call(this, args);
	this.type = "inactive";
	this.descr = "This alerter will trigger when you haven't clicked the runescape window for an amount of time.";
	var me = this;

	this.check = function () {
		var lastactive = alt1.rsLastActive;
		this.setTriggered(lastactive > this.delay * 1000);
		this.bar = Math.min(1, lastactive / (this.delay * 1000));
	}

	this.getSettings = function () {
		return [].concat(
			{ t: "header", text: "Trigger when" },
			me.createVarInput("delay")
		);
	}
}

//============================= xpcounter ====================================
function skillDropdownOptions() {
	var opts = {};
	for (var a in skillnames) { opts[skillnames[a]] = fullskillnames[a] }
	opts.com = "Combat";
	return opts;
}
AlerterXpCounter.prototype = Object.create(Alerter.prototype);
AlerterXpCounter.prototype.constructor = AlerterXpCounter;
AlerterXpCounter.uservars = applyobject({
	delay: { n: "Time (seconds)", t: "int", default: 5 },
	treshold: { n: "Minimum xp drop", t: "int", default: 0 },
	skill: { n: "Skill", t: "dropdown", getOptions: skillDropdownOptions, default: "tot" }
}, Alerter.uservars);
function AlerterXpCounter(args) {
	Alerter.call(this, args);
	this.type = "xpcounter";
	this.descr = "This alerter triggers when you havn't gained xp in a certain skill for an amount of time.";
	this.helppage = "help_afkscape_xpcounter";

	var me = this;
	var reader = new XpcounterReader();

	this.lastChange = 0;
	this.lastXp = 0;
	this.check = function () {
		if (!reader.pos) {
			this.functional = false;
			reader.findAsync();
		}
		if (reader.pos) {
			reader.read();
			var xp = -1;
			for (var a = 0; a < reader.skills.length; a++) {
				if (reader.skills[a] == this.skill) { xp = reader.values[a]; }
			}
			if (xp != -1 && xp > this.lastXp + this.treshold) {
				this.lastChange = Date.now();
			}
			this.lastXp = xp;

			this.bar = Math.min(1, (Date.now() - this.lastChange) / (this.delay * 1000));
			this.setTriggered(this.bar >= 1);
			this.functional = xp != -1;
		}
	}

	this.getSettings = function () {
		return [].concat(
			{ t: "header", text: "Trigger when" },
			me.createVarInput("delay"),
			me.createVarInput("treshold"),
			me.createVarInput("skill"),
			me.createVarInput("exportbar")
		);
	}
}

//============================= chat ====================================
AlerterChat.prototype = Object.create(Alerter.prototype);
AlerterChat.prototype.constructor = AlerterChat;
AlerterChat.uservars = applyobject({
	lines: { n: "Triggers", t: "triggerlines" },
	colors: { n: "Text colors", t: "colorlist" },
	resetonactive: { n: "Reset after clicking rs", t: "bool", default: true }
}, Alerter.uservars);
function AlerterChat(args) {
	Alerter.call(this, args);
	this.type = "chat";
	this.descr = "You can set this alerter to trigger when certain strings of text are found in your chatbox.";
	this.functional = false;
	this.ticks = 2;
	this.settingsWidth = 450;
	var me = this;

	var triggertime = 0;

	this.check = function () {
		sharedChatboxReader.tryFind();
		this.functional = !!sharedChatboxReader.reader.pos;

		if (this.triggered && this.resetonactive) {
			if (alt1.rsLastActive < Date.now() - triggertime + 1000) {
				this.bar = 0;
				this.setTriggered(false);
				this.updatedraw();
			}
		}
		sharedChatboxReader.read();
	}

	this.onread = function (newlines) {
		//concat all lines to deal with line wrapping, we don't care about the actual \n's
		var sumstring = "";
		for (var linenr = 0; linenr < newlines.length; linenr++) {
			sumstring += newlines[linenr].text + " ";
		}
		for (var a = 0; a < this.lines.length; a++) {
			if (!this.lines[a].text) { continue; }
			var lastindex = -1;//make sure we catch all occurrences
			while ((lastindex = sumstring.indexOf(this.lines[a].text, lastindex + 1)) != -1) {
				this.bar = this.lines[a].percent / 100;
			}
		}
		if (this.bar >= 1) { triggertime = Date.now(); }
		this.setTriggered(this.bar >= 1);
	}

	this.getSettings = function () {
		var lines = me.createVarInput("lines");
		var colors = me.createVarInput("colors");
		var importer = chatTextImporter(lines, colors);

		return [].concat(
			{ t: "header", text: "Trigger when" },
			me.createVarInput("resetonactive"),
			lines,
			colors,
			{ t: "custom", dom: importer.root }
		);
	}
}



//============================= Craft menu ====================================
AlerterCraftMenu.prototype = Object.create(Alerter.prototype);
AlerterCraftMenu.prototype.constructor = AlerterCraftMenu;
AlerterCraftMenu.uservars = applyobject({
	triggerpercent: { n: "Poduction progress (%)", t: "int" }
}, Alerter.uservars);
function AlerterCraftMenu(args) {
	Alerter.call(this, args);
	this.type = "craftmenu";
	this.descr = "This alerter will keep track of any activity that shows a progress bar interface.";
	this.functional = false;
	var me = this;

	var reader = new CraftMenuReader();

	this.check = function () {
		if (!reader.pos) { reader.find(); }
		if (!reader.pos) { this.functional = false; return; }
		this.functional = true;
		var p = reader.read();
		if (p == null) { p = 1; }//interface closed
		this.bar = p;
		this.setTriggered(this.bar >= this.triggerpercent / 100);
	}

	this.getSettings = function () {
		return [].concat(
			{ t: "header", text: "Trigger when" },
			me.createVarInput("triggerpercent")
		);
	}
}

//============================= sheath ====================================
AlerterSheathe.sheathoptions = {
	sheathed: "Sheathed",
	unsheathed: "Unsheathed"
};
AlerterSheathe.prototype = Object.create(Alerter.prototype);
AlerterSheathe.prototype.constructor = AlerterSheathe;
AlerterSheathe.uservars = applyobject({
	triggerdif: { n: "Max difference (%)", t: "int", default: 10 },
	triggerstance: { n: "Trigger at stance", t: "dropdown", options: AlerterSheathe.sheathoptions, default: "sheathed" }
}, Alerter.uservars);
function AlerterSheathe(args) {
	Alerter.call(this, args);
	this.type = "sheathe";
	this.descr = "This alerter keeps track of your stance in the gear interface. Certain activities will sheathe/unsheathe your character in the interface.<br>" +
		"There is more info on how to use this alerter <a href='#' onclick='(opener||window).pagepopup(\"help_afkscape_sheathe\",400,500); return false;'>here</a>.";
	this.helppage = "help_afkscape_sheathe";
	this.functional = false;
	var me = this;

	var reader = new SheatheReader();

	this.check = function () {
		if (!reader.pos) { reader.find(); }
		if (!reader.pos) { return; }
		this.functional = true;

		var p = reader.read();
		var sheathed = p < this.triggerdif / 100;
		this.setTriggered(this.triggerstance == "sheathed" ? sheathed : !sheathed);
		this.bar = this.triggered ? 1 : 0;
	}

	this.getSettings = function () {
		return [].concat(
			{ t: "header", text: "Trigger when" },
			me.createVarInput("triggerstance"),
			me.createVarInput("triggerdif")
		);
	}
}

//============================= buffs ====================================
AlerterBuffs.prototype = Object.create(Alerter.prototype);
AlerterBuffs.prototype.constructor = AlerterBuffs;
AlerterBuffs.uservars = applyobject({
	bufftype: { n: "Buff type", t: "bufftype" },
	starttime: { n: "Start bar at (sec)", t: "int", default: 150 },
	endtime: { n: "Alert at (sec)", t: "int", default: 10 }
}, Alerter.uservars);
function AlerterBuffs(args) {
	Alerter.call(this, args);
	this.type = "buffs";
	this.descr = "This alerter keeps track of your buff bar. You can set it to trigger when certain buffs run out or are about to run out.";
	this.functional = false;
	this.sharedReader = null;
	var me = this;

	//var reader = new AfkCompiled.BuffReader();

	var timelast = 0;
	var timeoflastread = 0;

	this.check = function () {
		if (!me.bufftype) {
			me.functional = false;
		}
		else {
			me.sharedReader = (me.bufftype.isdebuff ? sharedDebuffReader : sharedBuffReader);
			me.functional = me.sharedReader.tryFind();
			if (me.functional) { me.sharedReader.read(); }
		}
	}

	this.onread = function (buffs) {
		if (!this.bufftype) { return; }
		if (!this.bufftype.imgdata) { return; }
		var timeleft = 0;
		var buffdata = AfkCompiled.BuffReader.matchBuffMulti(buffs, this.bufftype);
		if (buffdata) {
			var t = buffdata.readTime();
			//calculate using max time
			if (t >= 60 * 60) { t += 60 * 60; }
			else if (t >= 60) { t += 60; }
			//timeleft = t; break;
			//add bit of accuracy to timer abbriviated 
			if (t == timelast) {
				timeleft = timelast - (Date.now() - timeoflastread) / 1000;
			}
			else {
				timelast = t;
				timeoflastread = Date.now();
				timeleft = t;
			}
		}
		var progress = timeleft / this.starttime;
		if (timeleft > 60) { this.ticks = 10; }
		else { this.ticks = 1; }
		this.bar = Math.max(0, Math.min(1, 1 - progress));
		this.setTriggered(timeleft <= this.endtime);
	}

	this.getSettings = function () {
		return [].concat(
			{ t: "header", text: "Trigger when" },
			me.createVarInput("bufftype"),
			me.createVarInput("starttime"),
			me.createVarInput("endtime")
		);
	}
}

//============================= actionbar ====================================
AlerterActionbar.statoptions = {
	hp: "Lifepoints",
	pray: "Prayer points",
	dren: "Adrenaline",
	sum: "Summoning points"
};
AlerterActionbar.prototype = Object.create(Alerter.prototype);
AlerterActionbar.prototype.constructor = AlerterActionbar;
AlerterActionbar.uservars = applyobject({
	stat: { n: "Stat to track", t: "dropdown", options: AlerterActionbar.statoptions, default: "hp" },
	higherlower: { n: "When stats is", t: "dropdown", options: { "higher": "Higher", "lower": "Lower" }, default: "lower" },
	treshold: { n: "Treshold (% of full)", t: "int", default: 20 }
}, Alerter.uservars);
function AlerterActionbar(args) {
	Alerter.call(this, args);
	this.type = "actionbar";
	this.descr = "This alerter keeps track of the stats on you action bar such as hp and prayer.";
	this.functional = false;
	var me = this;

	var timelast = 0;
	var timeoflastread = 0;

	this.check = function () {
		sharedActionbarReader.tryFind();
		this.functional = !!sharedActionbarReader.reader.pos;
		sharedActionbarReader.read();
	}

	this.onread = function (stats) {
		this.functional = stats && stats[this.stat] != null;
		if (!this.functional) { return; }

		if (this.higherlower == "higher") {
			this.bar = stats[this.stat];
			this.setTriggered(stats[this.stat] >= this.treshold / 100);
		}
		else {
			this.bar = 1 - stats[this.stat];
			this.setTriggered(stats[this.stat] <= this.treshold / 100);
		}
	}

	this.getSettings = function () {
		return [].concat(
			{ t: "header", text: "Trigger when" },
			me.createVarInput("stat"),
			me.createVarInput("higherlower"),
			me.createVarInput("treshold")
		);
	}
}

//============================= castlewars ====================================
AlerterCastlewars.prototype = Object.create(Alerter.prototype);
AlerterCastlewars.prototype.constructor = AlerterCastlewars;
AlerterCastlewars.uservars = applyobject({
}, Alerter.uservars);
function AlerterCastlewars(args) {
	Alerter.call(this, args);
	this.type = "castlewars";
	this.ticks = 5;
	this.descr = "This alerter keeps of the different timers in castle wars, it also warns you when you have to leave the spawn area.";
	var me = this;

	var reader = new CastlewarsReader();

	this.check = function () {
		var state = reader.read();

		if (state.ingame) {
			if (state.respawnroom == 0) {
				this.bar = Math.max(0, (5 - state.timeend) / 5);
				this.setTriggered(false);
			}
			else {
				if (state.respawnroom == 1) {
					this.bar = 1;
					this.setTriggered(true);
				}
				else {
					this.bar = 0.9;
					this.setTriggered(false);
				}
			}
		}
		else if (state.inlobby) {
			if (state.timestart > 3) {
				this.bar = 0;
				this.setTriggered(false);
			}
			else {
				this.setTriggered(false);
				this.bar = (3 - state.timestart) / 3;
			}
		}
		else {
			this.setTriggered(true);
			this.bar = 1;
		}
	}

	this.getSettings = function () {
		return [];
	}
}
//============================= artisansworkshop ====================================
AlerterArtisansWorkshop.typeoptions = {
	artis: "Artisans Workshop",
	seren: "Serenity Posts"
};
AlerterArtisansWorkshop.prototype = Object.create(Alerter.prototype);
AlerterArtisansWorkshop.prototype.constructor = AlerterArtisansWorkshop;
AlerterArtisansWorkshop.uservars = applyobject({
	//subtype: { n: "Type", t: "dropdown", options: AlerterArtisansWorkshop.typeoptions, default: "artis" }
}, Alerter.uservars);
function AlerterArtisansWorkshop(args) {
	Alerter.call(this, args);
	this.type = "artisansworkshop";
	this.functional = false;
	this.descr = "Alerts you when the item to smith in the artisans workshop changes.";
	var me = this;

	this.subtype = "artis";//lock to artisans for now as seren doesn't work/is obsolete
	//duration seems to be random
	//100 or 110 or 120 ticks

	var reader = new ArtisansWorkshopReader();
	var laststate = 0;
	var lastchange = 0;
	var duration = { artis: 120 * 600, seren: 50 * 600 };
	this.check = function () {
		var typeobj = ArtisansWorkshopReader.types[this.subtype];
		if (!reader.pos || reader.type != typeobj) { reader.find(typeobj); }
		this.functional = !!reader.pos && reader.type == typeobj;
		if (!this.functional) { return; }
		var state = reader.readHash();
		if (state != laststate) {
			laststate = state;
			lastchange = Date.now();
		}
		var triggered = alt1.rsLastActive > Date.now() - lastchange;
		this.setTriggered(triggered);
		if (lastchange == 0) { this.bar = 0; }
		else if (triggered) { this.bar = 1; }
		else { this.bar = Math.min(1, (Date.now() - lastchange) / duration[this.subtype]); }
	}

	this.getSettings = function () {
		return [].concat(
			//{ t: "header", text: "Trigger when" },
			//me.createVarInput("subtype")
		);
	}
}
//============================= dialog ====================================
AlerterDialog.prototype = Object.create(Alerter.prototype);
AlerterDialog.prototype.constructor = AlerterDialog;
AlerterDialog.uservars = applyobject({
}, Alerter.uservars);
function AlerterDialog(args) {
	Alerter.call(this, args);
	this.type = "dialogtextsimple";
	this.functional = false;
	this.descr = "Alerts you when any chat dialog with a continue button appears. This can be used to trigger on inventory full messages. Keep in mind that this alerter will only be able to find the chat box when it shows on your screen. It might lag until the first detection.";
	var me = this;

	var reader = new DialogTextReader();
	this.check = function () {
		if (!reader.pos) { reader.find(); }
		this.functional = !!reader.pos;
		var triggered = this.functional && reader.read();
		this.setTriggered(triggered);
		this.bar = (triggered ? 1 : 0);
	}

	this.getSettings = function () {
		return [];
	}
}
//============================= fightkiln ====================================
AlerterFightKiln.prototype = Object.create(Alerter.prototype);
AlerterFightKiln.prototype.constructor = AlerterFightKiln;
AlerterFightKiln.uservars = applyobject({
}, Alerter.uservars);
function AlerterFightKiln(args) {
	Alerter.call(this, args);
	this.type = "fightkiln";
	this.functional = false;
	this.descr = "Alerts you at all Jad and Ket-Dills waves in the fight kiln. It will alert at wave 5, 10, 19, 20, 26, 30 and 34. The alert will reset when you click the rs client.";
	var me = this;

	//might add some customization for this at some point
	var alertWaves = [5, 10, 19, 20, 28, 30, 34];
	var triggeredwave = -1;
	var triggertime = 0;

	var reader = new FightKilnReader();
	this.check = function () {
		if (!reader.pos) { reader.find(); }
		this.functional = !!reader.pos;
		if (this.functional) {
			var wave = reader.read();
			if (wave == null) { this.functional = false; }
			else {
				var bar;
				if (wave > Math.max.apply(null, alertWaves)) {
					bar = 1;
				}
				else {
					for (var a = 0; a <= 10; a++) {
						if (alertWaves.indexOf(wave + a) != -1) { break; }
					}
					bar = Math.max(0, 1 - 0.334 * a);
				}
				this.bar = bar;

				if (alertWaves.indexOf(wave) != -1) {
					if (triggeredwave != wave) {
						triggeredwave = wave;
						triggertime = Date.now();
						this.setTriggered(true);
					}
				}
				if (triggeredwave != -1) {
					if (alt1.rsLastActive < Date.now() - triggertime + 1000) {
						this.setTriggered(false);
						triggertime = 0;
					}
				}
			}
		}
	}

	this.getSettings = function () {
		return [];
	}
}


//============================= targetmonster ====================================
AlerterTargetDeath.prototype = Object.create(Alerter.prototype);
AlerterTargetDeath.prototype.constructor = AlerterTargetDeath;
AlerterTargetDeath.uservars = applyobject({}, Alerter.uservars);
function AlerterTargetDeath(args) {
	Alerter.call(this, args);
	this.type = "targetdeath";
	this.descr = "";
	var me = this;

	var lastalive = tickcount;
	this.functional = false;

	this.check = function () {
		sharedMobTargetReader.read();
	}
	this.onread = function (state) {
		var dead = !state || state.hp == 0;
		this.functional = this.functional || !!state;
		this.setTriggered(dead);
		this.bar = (dead ? 1 : 0);
	}

	this.getSettings = function () {
		return [];
	}
}


//============================= drops ====================================
AlerterDrops.prototype = Object.create(Alerter.prototype);
AlerterDrops.prototype.constructor = AlerterDrops;
AlerterDrops.uservars = applyobject({
	triggerdrops: { n: "Triggers", t: "triggerdrops", title: "Drops that trigger this alert." }
}, Alerter.uservars);
function AlerterDrops(args) {
	Alerter.call(this, args);
	this.type = "drops";
	this.descr = "";
	var me = this;

	this.functional = false;

	var triggertime = 0;

	this.check = function () {
		sharedDropsReader.tryFind();
		sharedDropsReader.read();

		this.functional = !!sharedDropsReader.reader.pos;

		if (this.triggered) {
			if (alt1.rsLastActive < Date.now() - triggertime + 1000) {
				this.bar = 0;
				this.setTriggered(false);
				this.updatedraw();
			}
		}
	}
	this.onread = function (newdrops) {
		for (var drop of newdrops) {
			for (var trigger of this.triggerdrops) {
				if (drop.name.toLowerCase().indexOf(trigger.text.toLowerCase()) != -1) {
					this.setTriggered(true);
					triggertime = Date.now();
				}
			}
		}
	}

	this.getSettings = function () {
		var triggers = me.createVarInput("triggerdrops");

		return [].concat(
			{ t: "header", text: "Trigger when" },
			triggers
		);
	}
}
