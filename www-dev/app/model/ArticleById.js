Ext.define('MC.model.ArticleById', {
    extend: 'MC.model.AbstractArticle',
    requires: ['MC.RestProxy'],
    config: {
        proxy: {
            type: 'mc-rest',
            url : '/api/lookup/',
            noCache: false
        }
    }
});