Ext.define('MC.model.CriticReview', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'name',
            'date',
            'score',
            'content',
            'link'
        ]
    }
});