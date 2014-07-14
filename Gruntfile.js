module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        concat: {
            dist: {
                src: ["src/**/*.js"],
                dest: "dist/Pixzel.js"
            }
        }
    });

    grunt.registerTask("compile", "concat");

    grunt.loadNpmTasks("grunt-contrib-concat");
};
