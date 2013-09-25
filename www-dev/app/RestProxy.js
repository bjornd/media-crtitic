Ext.define('MC.RestProxy', {
    extend: 'Ext.data.proxy.Rest',
    alias : 'proxy.mc-rest',

    config: {
        reader: {
            type: "json",
            rootProperty: "data"
        }
    }
});