sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.sap.build.standard.untitledPrototype.controller.App", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.sap.build.standard.untitledPrototype.view.Appview
		 */
		onInit: function () {
			var oView = this.getView();
			var sViewModelPath = jQuery.sap.getModulePath("com.sap.build.standard.untitledPrototype.model.App", ".json");
			var oViewModel = new JSONModel(sViewModelPath);
			
			this.SplitApp = oView.byId("IdAppControl");
			
			if (this.SplitApp){
				this.SplitApp.bindElement("app>/SplitApp");
			}
			
			oView.setModel(oViewModel, "app");
			
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.sap.build.standard.untitledPrototype.view.Appview
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.sap.build.standard.untitledPrototype.view.Appview
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.sap.build.standard.untitledPrototype.view.Appview
		 */
		//	onExit: function() {
		//
		//	}

	});

});