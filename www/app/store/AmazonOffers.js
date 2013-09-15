Ext.define('MC.store.AmazonOffers', {
    extend: 'MC.store.AbstractStore',
    config: {
        model: 'MC.model.AmazonOffer',
        proxy: {
            type: 'rest',
            url : 'http://192.168.0.13/api/games/:game_id/offers/amazon',
            noCache: false,
            enablePagingParams: false
        }
    }
});
