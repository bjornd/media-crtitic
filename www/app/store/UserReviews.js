Ext.define('MC.store.UserReviews', {
    extend: 'MC.store.AbstractStore',
    config: {
        model: 'MC.model.UserReview',
        proxy: {
            type: 'rest',
            url : 'http://192.168.0.13/api/games/:game_id/reviews/user',
            noCache: false,
            enablePagingParams: false
        }
    }
});
