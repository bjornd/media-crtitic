Ext.define('MC.model.ArticleById', {
    extend: 'MC.model.AbstractArticle',
    config: {
        proxy: {
            type: 'rest',
            url : 'http://192.168.0.13/api/lookup/',
            noCache: false
        }
    }
});