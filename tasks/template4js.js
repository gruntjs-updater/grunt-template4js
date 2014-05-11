/*
 * grunt-template4js
 * https://github.com/albertshaw/grunt-template4js
 *
 * Copyright (c) 2014 Xiao Long
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	var path = require('path');
	var template4js = require('../lib/template4js')({
		templateSettings : {
			strip : false
		}
	});

	grunt.registerMultiTask('template4js', 'Use template in js files.', function() {
		var me = this;
		template4js.compileModules(me.data.options.modules);
		this.files.forEach(function(f) {
			grunt.file.write(path.join(f.dest), template4js.compilePath(f.orig.src[0])());
		});

	});

};
