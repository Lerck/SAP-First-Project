sap.ui.define([
	"sap/m/Button",
	"sap/m/Dialog",
	"sap/m/Text",
	"sap/ui/core/mvc/Controller"
], function (Button, Dialog, Text, Controller) {
	"use strict";

	return Controller.extend("com.sap.build.standard.untitledPrototype.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.sap.build.standard.untitledPrototype.view.Detail
		 */
		onInit: function () {
			this.getOwnerComponent().getRouter().getRoute("Detail").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function(oEvent){
			var oView = this.getView();
			var oModel = oView.getModel();
			var oArgs = oEvent.getParameter("arguments");
			oModel.metadataLoaded().then(function() {
				oView.bindElement({
					path: oModel.createKey("/ProductsSet", {"ID": oArgs.objectID})
				});
			});
		},
		
		handleSavePress : function(oEvent) {
			var oView = this.getView();
			var oModel = oView.getModel();
			var id = oView.byId("ID").getText();
			var country = oView.byId("Country").getValue();
			var city = oView.byId("City").getValue();
			var sPath = oModel.createKey("/ProductsSet", {"ID": id});
			oModel.update(sPath, {"Country": country, "City": city});
    	},
		
        handleDeletePress : function(oEvent){
        	var oView = this.getView();
        	var oModel = oView.getModel();
        	var id = oView.byId("ID").getText();
        	var sPath = oModel.createKey("/ProductsSet", {"ID": id});
        	oModel.remove(sPath);
        	oModel.submitChanges();
        	this.getOwnerComponent().getRouter().navTo("NotSelected");
        },
		
		onSaveMessageWarningDialogPress: function (oEvent) {
			var dialog = new Dialog({
				title: "{i18n>Warning}",
				type: "Message",
				state: "Warning",
				content: new Text({
					text: "{i18n>AlertSaveText}"
				}),
				beginButton: new Button({
					text: "{i18n>Save}",
					press: "handleSavePress"
				}),
				cancelButton: new Button({
					text: "{i18n>Cancel}",
					press: "close"
				})
			});
			dialog.open();
		},
		
		onDeleteMessageWarningDialogPress: function (oEvent) {
			var dialog = new Dialog({
				title: "{i18n>Warning}",
				type: "Message",
				state: "Warning",
				content: new Text({
					text: "{i18n>AlertDeleteText}"
				}),
				beginButton: new Button({
					text: "{i18n>Delete}",
					press: "handleDeletePress"
				}),
				cancelButton: new Button({
					text: "{i18n>Cancel}",
					press: "close"
				})
			});
			dialog.open();
		},
		
		close: function(dialog){
			dialog.close();
			dialog.destroy();
		}
		
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.sap.build.standard.untitledPrototype.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.sap.build.standard.untitledPrototype.view.Detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.sap.build.standard.untitledPrototype.view.Detail
		 */
		//	onExit: function() {
		//
		//	}

	});

});