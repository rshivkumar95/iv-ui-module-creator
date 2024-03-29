define(function (require) {
    "use strict";

    require('less!./../../less/module-template');

    var _ = require('ivUnderscore'),
        $ = require('jquery'),
        iv = require('sdk!ivCore'),
        ModuleTemplateTemplate = _.template(require('text!./../../template/module-template-template.html'));

        var ModuleTemplateView = iv.View.extend({
            state: {

            },
            initialize: function (options) {
                this.state = $.extend(true, {}, this.constructor.prototype.state);
                this.render();
            },
            registerTemplate: function () {
                this.template = {
                    moduleTemplateTemplate: ModuleTemplateTemplate,              
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
    
        return ModuleTemplateView;    
});