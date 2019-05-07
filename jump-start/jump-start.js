define(function (require) {
    "use strict";

    var JumpStartController = require('./js/controller/jump-start-controller');

    return {
        getInstance: function () {
            return {
                initialize: function (options) {
                    this.controller = new JumpStartController(options);
                }
            };
        }
    };
});