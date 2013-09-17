Ext.define('MC.store.UserReviews', {
    extend: 'MC.store.AbstractStore',
    config: {
        model: 'MC.model.UserReview',
        proxy: {
            type: 'mc-rest',
            url : '/api/games/:game_id/reviews/user',
            noCache: false,
            enablePagingParams: false
        }
    }
});
