/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapcp/sample/cf/SampleUI/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});