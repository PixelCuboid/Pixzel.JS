/*
 * PixzelJS Game Engine
 * Version 0.1.0
 * Copyright (C) 2014 PixelCuboid
*/

var Pixzel = {};

//Init function
Pixzel.start = function Pixzel.start() {
    var AI = {};

    var canvas = null,
        context = null;

    //Setting the canvas
    AI.setupCanvas = function (width, height, maximize, fullscreen) {
        this.width = 320;
        this.height = 320;

        if (window.document.body == null) {
            throw new Error("Document.body is not defined use this function after the window is loaded");
            return;
        }

        if (width && height) {
            this.width = width;
            this.height = height;
        } else if (maximize) {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        }
    };

    return AI;
};
