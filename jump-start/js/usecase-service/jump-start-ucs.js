define(function(require) {
	"use strict";

	var iv = require('sdk!ivCore'),
		_ = require('ivUnderscore');

	var JumpStartService = iv.Usecaseservice.extend({
		updateSuccessResponse: function (resp) {

        },
        updateAPIErrorResponse: function (resp, options) {
			
        }
	});
	return JumpStartService;
});