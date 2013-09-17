Ext.define('MC.store.AbstractStore', {
    extend: 'Ext.data.Store',
    requires: ['MC.RestProxy'],
    config: {
        listeners: {
            beforeload: function(store, operation){
                var params = operation.getParams(),
                    key,
                    url;

                if (!store.getProxy().urlPattern) {
                    store.getProxy().urlPattern = store.getProxy().getUrl();
                }
                url = store.getProxy().urlPattern;

                for (key in params) {
                    if (url.indexOf(':'+key) > -1) {
                        url = url.replace(':'+key, params[key]);
                        delete params[key];
                    }
                }
                store.getProxy().setUrl(url);
            }
        }
    }
});
