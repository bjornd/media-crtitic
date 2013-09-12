Ext.define('MC.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Toolbar',
        'MC.view.Article',
        'Ext.field.Search',
        'Ext.dataview.DataView',
        'Ext.dataview.List'
    ],
    config: {
        id: 'mainView',
        layout: 'card',
        items: [{
            itemId: 'search',
            layout: 'fit',
            items: [{
                xtype: 'titlebar',
                title: 'Media Critic',
                docked: 'top'
            },{
                xtype: 'toolbar',
                itemId: 'searchToolbar',
                docked: 'top',
                ui: 'light',
                items: [{
                    xtype: 'searchfield',
                    placeHolder: 'Search',
                    itemId: 'searchField',
                    flex: 1
                },{
                    xtype: 'button',
                    itemId: 'scanButton',
                    text: 'Scan barcode',
                    iconCls: 'camera',
                    iconAlign: 'left',
                    ui: 'action'
                }]
            },{
                xtype: 'dataview',
                itemId: 'searchResults',
                store: 'SearchResults',
                itemCls: 'x-search-item',
                itemTpl: new Ext.XTemplate(
                    '<tpl if="score"><div class="x-search-item-score { score:scorePointsClass }">{score}</div></tpl>',
                    '<div class="x-search-item-info">',
                        '<h3>{title}</h3>',
                        '<ul>',
                            '<li>For <b>{platform}</b></li>',
                            '<li>Released on <b>{release_date}</b> by <b>{publisher}</b></li>',
                        '</ul>',
                    '</div>'
                )
            }]
        }, {
            xclass: 'MC.view.Article',
            itemId: 'article',
        },{
            xtype: 'container',
            itemId: 'criticReviews',
            layout: 'fit',
            items: [{
                xtype: 'titlebar',
                title: 'Critic Reviews',
                docked: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Back',
                    ui: 'back',
                    itemId: 'back'
                }]
            },{
                xtype: 'dataview',
                store: 'CriticReviews',
                itemCls: 'x-critic-reviews-item',
                itemTpl: new Ext.XTemplate(
                    '<div class="x-critic-reviews-item-score { score:scorePointsClass }">{score}</div>',
                    '<h4>{name}</h4>',
                    '<div class="x-critic-reviews-item-date">{date}</div>',
                    '<div style="clear: both"></div>',
                    '<p>{content}</p>',
                    '<a href="{link}" target="_blank">Read full review</a>'
                )
            }]
        },{
            xtype: 'container',
            itemId: 'userReviews',
            layout: 'fit',
            items: [{
                xtype: 'titlebar',
                title: 'User Reviews',
                docked: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Back',
                    ui: 'back',
                    itemId: 'back'
                }]
            },{
                xtype: 'dataview',
                store: 'UserReviews',
                itemCls: 'x-user-reviews-item',
                itemTpl: new Ext.XTemplate(
                    '<div class="x-user-reviews-item-score { score:userScorePointsClass }">{score}</div>',
                    '<h4>{name}</h4>',
                    '<div style="clear: both"></div>',
                    '<p>{content}</p>'
                )
            }]
        },{
            xtype: 'container',
            itemId: 'amazonOffers',
            layout: 'fit',
            items: [{
                xtype: 'titlebar',
                title: 'Amazon Offers',
                docked: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Back',
                    ui: 'back',
                    itemId: 'back'
                }]
            },{
                xtype: 'dataview',
                store: 'AmazonOffers',
                itemCls: 'x-amazon-offers-item',
                itemTpl: new Ext.XTemplate(
                    '<img src="{image_url}" width="{image_width}" height="{image_height}"/>',
                    '<div><b>{price}</b><tpl if="saved"> (you save {saved})</tpl></div>',
                    '<div>Condition: {condition}</div>',
                    '<div>{total_new} new from {lowest_new_price}</div>',
                    '<div>{total_used} used from {lowest_used_price}</div>',
                    '<div><a href="{url}">Buy on Amazon</a></div>'
                )
            }]
        },{
            xtype: 'container',
            itemId: 'ebayOffers',
            layout: 'fit',
            items: [{
                xtype: 'titlebar',
                title: 'eBay Offers',
                docked: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Back',
                    ui: 'back',
                    itemId: 'back'
                }]
            },{
                xtype: 'dataview',
                store: 'EbayOffers',
                itemCls: 'x-ebay-offers-item',
                itemTpl: new Ext.XTemplate(
                    '<img src="{image_url}" height="80"/>',
                    '<h3>{title}</h3>',
                    '<tpl if="type == \'auction\'">',
                        '<div><b>{price}</b> {bid_count} bids, {end_time} left</div>',
                        '<div><a href="{url}">Bid on eBay</a></div>',
                    '</tpl>',
                    '<tpl if="type == \'buyitnow\'">',
                        '<div><b>{price}</b></div>',
                        '<div><a href="{url}">Buy on eBay</a></div>',
                    '</tpl>'
                )
            }]
        }]
    }
});