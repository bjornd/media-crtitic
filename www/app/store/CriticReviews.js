Ext.define('MC.store.CriticReviews', {
    extend: 'MC.store.AbstractStore',
    config: {
        model: 'MC.model.CriticReview',
        proxy: {
            type: 'rest',
            url : '/api/games/:game_id/reviews/critic',
            noCache: false,
            enablePagingParams: false
        }
    }
});
