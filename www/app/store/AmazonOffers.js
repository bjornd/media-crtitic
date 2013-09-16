Ext.define('MC.store.AmazonOffers', {
    extend: 'MC.store.AbstractStore',
    config: {
        model: 'MC.model.AmazonOffer',
        proxy: {
            type: 'rest',
            url : '/api/games/:game_id/offers/amazon',
            noCache: false,
            enablePagingParams: false
        }
    }
});
