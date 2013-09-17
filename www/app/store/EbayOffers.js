Ext.define('MC.store.EbayOffers', {
    extend: 'MC.store.AbstractStore',
    config: {
        model: 'MC.model.EbayOffer',
        proxy: {
            type: 'mc_rest',
            url : '/api/games/:game_id/offers/ebay',
            noCache: false,
            enablePagingParams: false
        }
    }
});
