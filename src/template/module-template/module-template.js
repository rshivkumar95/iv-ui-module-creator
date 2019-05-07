define(function (require) {
    "use strict";

    var ModuleTemplateController = require('./js/controller/module-template-controller');

    return {
        getInstance: function () {
            return {
                initialize: function (options) {
                    this.controller = new ModuleTemplateController(options);
                }
            };
        }
    };
});