Ext.define('MC.model.AmazonOffer', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'title',
            'url',
            'image_url', {
                type: 'int',
                name: 'image_width'
            },{
                type: 'int',
                name: 'image_height'
            },
            'price',
            'saved',
            'condition',
            'lowest_new_price',
            'lowest_used_price',
            'total_new',
            'total_used'
        ]
    }
});