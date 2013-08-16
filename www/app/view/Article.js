Ext.define('MC.view.Article', {
    extend: 'Ext.Panel',
    requires: [
        'Ext.Img'
    ],
    config: {
        cls: 'x-article',
        padding: 10,
        scrollable: true,
        items: [{
            xtype: 'container',
            layout: 'hbox',
            items: [{
                itemId: 'articleImage',
                padding: '0 10 0 0',
                tpl: new Ext.XTemplate(
                    '<img src="{image_url}" width="{image_width}" height="{image_height}"/>'
                )
            },{
                itemId: 'articleAttributes',
                tpl: new Ext.XTemplate(
                    '<div class="x-artice-score">',
                        '<div class="x-artice-score-points">',
                            '<div class="x-artice-score-points-value">{score}</div>',
                            '<div class="x-artice-score-points-max">out of 100</div>',
                        '</div>',
                        '<div class="x-artice-score-title">',
                            '<a href="http://www.metacritic.com/about-metascores" target="_blank">metascore</a>',
                        '</div>',
                    '</div>',
                    '<h3>{title} <small></small></h3>',
                    '<ul>',
                        '<li>For <b>{platform}</b></li>',
                        '<li>Released on <b>{release_date}</b> by <b>{publisher}</b></li>',
                        '<li>Rating: <b>{maturity_rating}</b></li>',
                    '</ul>',
                    '<a href="http://www.metacritic.com{metacritic_url}" target="_blank">More info on metacritic.com</a>'
                ),
                flex: 1
            }],
            padding: '0 0 10 0'
        },{
            xtype: 'button',
            itemId: 'articleBuyButton',
            text: 'Buy from Amazon'
        }]
    },

    setData: function(data){
        var imageCmp = this.down('#articleImage');

        this.down('#articleAttributes').setData(data);
        this.down('#articleImage').setData(data);
        this.child('#articleBuyButton').setText('Buy from Amazon for '+data.amazon_price);
    }
});
