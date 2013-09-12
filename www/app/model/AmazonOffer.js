Ext.define('MC.model.AmazonOffer', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'url',
            'image_url',
            'image_width',
            'image_height',
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