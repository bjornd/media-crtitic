Ext.define('MC.model.Article', {
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'amazon_id',
        fields: [
            {
                name: 'score',
                type: 'int'
            },
            {
                name: 'user_score',
                type: 'float'
            },
            "release_date",
            "maturity_rating",
            "publisher",
            "metacritic_url",
            "title",
            "platform",
            "image_url",
            "image_width",
            "image_height",
            "offers",
            'critic_reviews',
            'critic_reviews_total',
            'user_reviews',
            'user_reviews_total'
        ],
        proxy: {
            type: 'rest',
            url : 'http://192.168.0.13/api/lookup/',
            noCache: false
        }
    }
});