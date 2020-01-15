({
    initialize : function(component, event, helper) {
        var recordId = component.get("v.pageReference").state.c__id;
        console.log('Here is record Id' + JSON.stringify(recordId));
    }
})
