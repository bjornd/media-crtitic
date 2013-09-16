Ext.define('MC.model.ArticleById', {
    extend: 'MC.model.AbstractArticle',
    config: {
        proxy: {
            type: 'rest',
            url : '/api/lookup/',
            noCache: false
        }
    }
});