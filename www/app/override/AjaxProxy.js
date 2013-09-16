Ext.define('MC.override.AjaxProxy', {
    override: 'Ext.data.proxy.Ajax',
    setUrl: function(url){
        var baseUrl;

        if (!window.debugMode) {
            baseUrl = 'http://media-critic-server.owl-hollow.net'
        } else if (window.cordova) {
            baseUrl = 'http://192.168.0.13';
        } else {
            baseUrl = '';
        }

        this.callParent([baseUrl + url]);
    }
});

