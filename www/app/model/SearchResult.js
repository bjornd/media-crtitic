Ext.define('MC.model.SearchResult', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'title',
            'score',
            'platform',
            'release_date',
            'publisher'
        ],
        proxy: {
            type: 'rest',
            url : '/api/search/',
            noCache: false
        }
    }
});