Ext.define('MC.store.EbayOffers', {
    extend: 'MC.store.AbstractStore',
    config: {
        model: 'MC.model.EbayOffer',
        proxy: {
            type: 'rest',
            url : 'http://192.168.0.13/api/games/:game_id/offers/ebay',
            noCache: false,
            enablePagingParams: false
        }
    }
});
