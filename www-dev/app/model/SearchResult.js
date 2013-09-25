Ext.define('MC.model.SearchResult', {
    extend: 'Ext.data.Model',
    requires: ['MC.RestProxy'],
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
            type: 'mc-rest',
            url : '/api/search/',
            noCache: false
        }
    }
});