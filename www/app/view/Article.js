Ext.define('MC.view.Article', {
    extend: 'Ext.Panel',
    requires: [
        'Ext.Img'
    ],
    config: {
        scrollable: true,
        padding: '0 0 10 0',
        items: [{
            xtype: 'titlebar',
            title: 'Media Critic',
            docked: 'top',
            items: [{
                xtype: 'button',
                text: 'Search',
                ui: 'back',
                itemId: 'back'
            }]
        },{
            xtype: 'container',
            layout: 'hbox',
            padding: '10 10 0 10',
            items: [{
                itemId: 'articleImage',
                padding: '0 10 0 0',
                tpl: new Ext.XTemplate(
                    '<img src="{image_url}" width="{image_width}" height="{image_height}"/>'
                )
            },{
                itemId: 'articleAttributes',
                cls: 'x-article',
                tpl: new Ext.XTemplate(
                    '<tpl if="score">',
                        '<div class="x-artice-score">',
                            '<div class="x-artice-score-points { score:scorePointsClass }">',
                                '<div class="x-artice-score-points-value">{score}</div>',
                                '<div class="x-artice-score-points-max">out of 100</div>',
                            '</div>',
                            '<div class="x-artice-score-info">',
                                '<div class="x-artice-score-info-title">Metascore</div>',
                                '<div class="x-artice-score-info-reviews">{critic_reviews_total} reviews</div>',
                            '</div>',
                        '</div>',
                    '</tpl>',
                    '<tpl if="user_score">',
                        '<div class="x-artice-score">',
                            '<div class="x-artice-score-points { user_score:userScorePointsClass }">',
                                '<div class="x-artice-score-points-value">{user_score}</div>',
                                '<div class="x-artice-score-points-max">out of 10</div>',
                            '</div>',
                            '<div class="x-artice-score-info">',
                                '<div class="x-artice-score-info-title">User score</div>',
                                '<div class="x-artice-score-info-reviews">{user_reviews_total} reviews</div>',
                            '</div>',
                        '</div>',
                    '</tpl>',
                    '<h3>{title} <small></small></h3>',
                    '<ul>',
                        '<li>For <b>{platform}</b></li>',
                        '<li>Released on <b>{release_date}</b> by <b>{publisher}</b></li>',
                        '<li>Rating: <b>{maturity_rating}</b></li>',
                    '</ul>',
                    '<a href="http://www.metacritic.com{metacritic_url}" target="_blank">More info on metacritic.com</a>'
                ),
                flex: 1
            }]
        },{
            xtype: 'list',
            itemId: 'articleNavigationList',
            ui: 'round',
            itemCls: 'x-list-item-article',
            height: 204,
            scrollable: false,
            disableSelection: true,
            store: {
                fields: ['name', 'type'],
                data: [
                    {name: 'Read critic reviews', type: 'criticReviews'},
                    {name: 'Read user reviews', type: 'userReviews'},
                    {name: 'Offers from Amazon', type: 'amazonReviews'},
                    {name: 'Offers from eBay', type: 'ebayReviews'}
                ]
            },
            itemTpl: '{name}'
        }]
    },

    setData: function(data){
        this.data = data;
        this.down('#articleAttributes').setData(data);
        this.down('#articleImage').setData(data);
    }
});
