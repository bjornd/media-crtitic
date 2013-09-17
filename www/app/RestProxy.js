Ext.define('MC.RestProxy', {
    extend: 'Ext.data.proxy.Rest',
    alias : 'proxy.mc_rest',

    config: {
        reader: {
            type: "json",
            rootProperty: "data"
        }
    }
});