Ext.define('MC.model.Article', {
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'amazon_id',
        fields: [
            "score",
            "release_date",
            "maturity_rating",
            "publisher",
            "metacritic_url",
            "title",
            "platform",
            "image_url",
            "image_width",
            "image_height",
            "amazon_id",
            "amazon_price"
        ],
        proxy: {
            type: 'rest',
            url : 'http://192.168.0.13/api/lookup/',
            noCache: false
        }
    }
});