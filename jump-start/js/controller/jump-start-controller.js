define(function (require) {

    var iv = require('sdk!ivCore'),
        $ = require('jquery'),
        JumpStartView = require('../view/jump-start-view'),
        JumpStartModel = require('../model/jump-start-model'),
        JumpStartService = require('../usecase-service/jump-start-ucs');

    var JumpStartController = iv.Controller.extend({
        state: {

        },
        initialize: function(options) {

            
        },
        initializeView: function() {
            this.view = new JumpStartView({
                el: this.options.el
            });
        },
        initializeService: function(options) {
            this.moduleTemplateService = new JumpStartService({
            });
        },
        initializeModel: function() {
            this.model = new JumpStartModel();
        },
        registerListener: function() {

        }
    });
    return JumpStartController;
});