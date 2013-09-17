Ext.define('MC.model.ArticleByUrl', {
    extend: 'MC.model.AbstractArticle',
    config: {
        proxy: {
            type: 'ajax',
            url: '/',
            noCache: false,
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    },
    statics: {
        load: function(urlPart, config, scope){
            this.getProxy().setUrl('/api/retrieve/' + '?url=' + urlPart);
            MC.model.AbstractArticle.load.apply(MC.model.ArticleByUrl, arguments);
        }
    }
});