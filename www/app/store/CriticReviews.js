Ext.define('MC.store.CriticReviews', {
    extend: 'MC.store.AbstractStore',
    config: {
        model: 'MC.model.CriticReview',
        proxy: {
            type: 'rest',
            url : 'http://192.168.0.13/api/games/:game_id/reviews/critic',
            noCache: false,
            enablePagingParams: false
        }
    }
});
