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
            type: 'mc_rest',
            url : '/api/search/',
            noCache: false
        }
    }
});