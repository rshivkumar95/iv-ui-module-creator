define(function (require) {

    var iv = require('sdk!ivCore'),
        $ = require('jquery'),
        ModuleTemplateView = require('../view/module-template-view'),
        ModuleTemplateModel = require('../model/module-template-model'),
        ModuleTemplateService = require('../usecase-service/module-template-ucs');

    var ModuleTemplateController = iv.Controller.extend({
        state: {

        },
        initialize: function(options) {

            
        },
        initializeView: function() {
            this.view = new ModuleTemplateView({
                el: this.options.el
            });
        },
        initializeService: function(options) {
            this.moduleTemplateService = new ModuleTemplateService({
            });
        },
        initializeModel: function() {
            this.model = new ModuleTemplateModel();
        },
        registerListener: function() {

        }
    });
    return ModuleTemplateController;
});