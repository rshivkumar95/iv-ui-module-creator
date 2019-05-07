define(function (require) {
    "use strict";

    require('less!./../../less/jump-start');

    var _ = require('ivUnderscore'),
        $ = require('jquery'),
        iv = require('sdk!ivCore'),
        JumpStartTemplate = _.template(require('text!./../../template/jump-start-template.html'));

        var JumpStartView = iv.View.extend({
            state: {

            },
            initialize: function (options) {
                this.state = $.extend(true, {}, this.constructor.prototype.state);
                this.render();
            },
            registerTemplate: function () {
                this.template = {
                    moduleTemplateTemplate: JumpStartTemplate,              
                };
            },
            render: function () {
                this.$el.html(this.template.moduleTemplateTemplate());
            },
            events: {
                
            },
            getContainer: function (selector) {
                return this.$(selector);
            }
        });
    
        return JumpStartView;    
});