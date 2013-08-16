Ext.define('MC.view.Article', {
    extend: 'Ext.Panel',
    config: {
        padding: 10,
        scrollable: true,
        items: [{
            itemId: 'articleAttributes',
            tpl: new Ext.XTemplate(
                '<div>{score}</div>',
                '<img src="{image_url}" width="{image_width}" height="{image_height}"/>',
                '<h3>{title} <small>{platform}</small></h3>',
                '<ul>',
                    '<li>Release date: {release_date}</li>',
                    '<li>Rating: {maturity_rating}</li>',
                    '<li>Publisher: {publisher}</li>',
                '</ul>',
                '<a href="http://www.metacritic.com{metacritic_url}">More info</a>'
            )
        },{
            xtype: 'button',
            itemId: 'articleBuyButton',
            text: 'Buy from Amazon'
        }]
    },

    setData: function(data){
        this.child('#articleAttributes').setData(data);
        this.child('#articleBuyButton').setText('Buy from Amazon for '+data.amazon_price);
    }
});
