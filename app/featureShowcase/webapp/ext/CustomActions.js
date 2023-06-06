sap.ui.define([
	"sap/m/MessageBox",
	"sap/ui/core/library"
], function(MessageBox, coreLibrary) {
    "use strict";
    //Search-Term: CustomActions
    return {
        messageBox: function(oEvent) {
            let sActionName = "service1.EntityContainer/criticalAction";
			let mParameters = {
				//contexts: oEvent.getSource().getBindingContext(),
				model: this.editFlow.getView().getModel(),
                parameterValues: [
					{ name: "input", value: 'Send from UI' }
				],
                skipParameterDialog: true	
			};
			this.editFlow.invokeAction(sActionName, mParameters).then(function(data){
				MessageBox.alert(data.value);
			}); //SAP Fiori elements EditFlow API

        },
        enabled : function() {
            return true;
        },
        enabledForSingleSelect: function(oBindingContext, aSelectedContexts) {
            if (aSelectedContexts && aSelectedContexts.length === 1) {
               return true;
            }
            return false;
        }
    };
});