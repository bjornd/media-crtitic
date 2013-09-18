Ext.define('MC.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Toolbar',
        'MC.view.Article',
        'Ext.field.Search',
        'MC.DataView',
        'Ext.dataview.List'
    ],
    config: {
        id: 'mainView',
        layout: 'card',
        items: [{
            itemId: 'search',
            layout: 'card',
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
                xclass: 'MC.DataView',
                itemId: 'searchResults',
                store: 'SearchResults',
                itemCls: 'x-search-item',
                emptyText: 'No results found your request',
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
            },{
                xtype: 'container',
                itemId: 'lookupResults',
                cls: 'x-panel-emptytext'
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
                xclass: 'MC.DataView',
                store: 'CriticReviews',
                emptyText: 'No reviews found',
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
                xclass: 'MC.DataView',
                emptyText: 'No reviews found',
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
                xclass: 'MC.DataView',
                store: 'AmazonOffers',
                itemCls: 'x-amazon-offers-item',
                emptyText: 'No offers found',
                itemTpl: new Ext.XTemplate(
                    '<img src="{image_url}" width="{image_width}" height="{image_height}"/>',
                    '<div class="x-amazon-offers-item-info" style="margin-left: {image_width+10}px">',
                        '<h3>{title}</h3>',
                        '<div class="x-amazon-offers-item-price"><span>{price}</span><tpl if="saved"> (you save {saved})</tpl></div>',
                        '<div>',
                            'More offers:',
                            '<ul>',
                                '<li><i>{total_new}</i> new from <b>{lowest_new_price}</b></li>',
                                '<li><i>{total_used}</i> used from <b>{lowest_used_price}</b></li>',
                            '</ul>',
                        '</div>',
                        '<div><a href="{url}">Buy on Amazon</a></div>',
                    '</div>'
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
                xclass: 'MC.DataView',
                emptyText: 'No offers found',
                scrollable: 'vertical',
                store: 'EbayOffers',
                cls: 'x-ebay-offers',
                itemCls: 'x-ebay-offers-item',
                itemTpl: new Ext.XTemplate(
                    '<div class="x-ebay-offers-item-img" style="background: url({image_url}) center no-repeat"></div>',
                    '<h3>{title}</h3>',
                    '<tpl if="type == \'auction\'">',
                        '<div><b>{price}</b> ({bid_count} bids, {time_left:timePeriod} left)</div>',
                        '<div><a href="{url}">Bid on eBay</a></div>',
                    '</tpl>',
                    '<tpl if="type == \'buyitnow\'">',
                        '<div><b>{price}</b></div>',
                        '<div><a href="{url}">Buy on eBay</a></div>',
                    '</tpl>',
                    '<div style="clear: both"></div>'
                )
            }]
        }]
    }
});