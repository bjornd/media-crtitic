Ext.define('MC.store.EbayOffers', {
    extend: 'Ext.data.Store',
    config: {
        model: 'MC.model.EbayOffer',
        proxy: {
            type: 'rest',
            url : 'http://192.168.0.13/api/games/:game_id/offers/ebay',
            noCache: false,
            enablePagingParams: false
        },
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
