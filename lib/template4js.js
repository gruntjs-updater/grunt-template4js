var fs = require("fs"), doT = require("dot");

module.exports = function(options) {
	return new InstallDots(options);
};

function InstallDots(o) {
	this.__rendermodule = o.rendermodule || {};
	this.__settings = o.templateSettings ? copy(o.templateSettings, copy(doT.templateSettings)) : doT.templateSettings;
	this.__includes = o.defs || {};
}

function copy(o, to) {
	to = to || {};
	for ( var property in o) {
		to[property] = o[property];
	}
	return to;
}

function readdata(path) {
	var data = fs.readFileSync(path);
	if (data)
		return data.toString();
	console.log("problems with " + path);
}
function noop() {
	return '';
}
InstallDots.prototype.compilePath = function(path) {
	var data = readdata(path);
	if (data) {
		console.log('Loaded ' + path);
		return doT.template(data, this.__settings, copy(this.__includes));
	} else {
		return noop;
	}
};

InstallDots.prototype.compileModules = function(defFolder) {
	console.log("Compiling all doT def modules...");
	if (defFolder[defFolder.length - 1] !== '/') {
		defFolder += '/';
	}
	var sources = fs.readdirSync(defFolder), k, l, name, namenoext;

	for (k = 0, l = sources.length; k < l; k++) {
		name = sources[k];
		if (/\.def$/.test(name)) {
			namenoext = name.substring(0, name.indexOf('.'));
			console.log("Loaded def " + defFolder + name);
			this.__includes[namenoext] = readdata(defFolder + name);
		}
	}
};
