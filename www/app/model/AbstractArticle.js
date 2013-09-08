Ext.define('MC.model.AbstractArticle', {
    extend: 'Ext.data.Model',
    config: {
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
        ]
    }
});