Ext.define('MC.model.ArticleById', {
    extend: 'MC.model.AbstractArticle',
    requires: ['MC.RestProxy'],
    config: {
        proxy: {
            type: 'mc_rest',
            url : '/api/lookup/',
            noCache: false
        }
    }
});