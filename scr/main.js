"use strict";

const com = {};
com.m = {};
com.v = {};

com.c = {


    init: function() {
        console.log('c', Math.random());
    }
};

window.onload = function(e) {
    console.log(e.type, com);
    com.c.init();
};

