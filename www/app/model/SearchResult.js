Ext.define('MC.model.SearchResult', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'title',
            'score',
            'platform',
            'release_date',
            'publisher',
            'url'
        ],
        proxy: {
            type: 'rest',
            url : 'http://192.168.0.13/api/search/',
            noCache: false
        }
    }
});