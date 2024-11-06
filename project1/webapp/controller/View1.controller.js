sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit: function () {

            var oModelJson = new JSONModel({name: 'joao'})
            this.getView().setModel(oModelJson);

        }
    });
});
