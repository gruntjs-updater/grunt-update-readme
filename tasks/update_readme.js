/*
 * grunt-update-readme
 * https://github.com/kcauchy/grunt-update-readme
 *
 * Copyright (c) 2015 Karl Cauchy
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('update_readme', 'Update readme file to package.json', function() {
    var config = this.data,
        target = this.target,
        fs     = require('fs'),
        buffer = fs.readFileSync(target),
        enc    = require('jschardet'),
        detect = enc.detect(buffer),
        json   = buffer.toString(detect.encoding),
        pkg    = JSON.parse(json);
        
    for(var field in config) {
        var file   = config[field],
            buffer = fs.readFileSync(file),
            detect = enc.detect(buffer),
            data   = fs.readFileSync(file);

        pkg[field] = data;
        
        grunt.log.writeln(
            target 
            + ": Field \"" 
            + field
            + "\" from \"" 
            + file
            + "\"");
    }

    json = JSON.stringify(pkg, null, '    ');
    fs.writeFileSync(target, json);

  });

};
