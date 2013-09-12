Ext.define('MC.model.EbayOffer', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'type',
            'bid_count',
            'title',
            'start_time',
            'end_time',
            'url',
            'image_url',
            'price'
        ]
    }
});