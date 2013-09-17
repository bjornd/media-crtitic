Ext.define('MC.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            '#mainView #scanButton': {
                tap: 'onScanButtonTap'
            },
            '#mainView #searchField': {
                action: 'onSearchFieldAction'
            },
            '#mainView #searchResults': {
                itemtap: 'onSearchItemTap'
            },

            '#mainView #article #back': {
                tap: 'onArticleBackButtonTap'
            },
            '#mainView #articleNavigationList': {
                itemtap: 'onArticleNavItemTap'
            },
            '#mainView #criticReviews #back': {
                tap: 'onBackToArticleTap'
            },
            '#mainView #userReviews #back': {
                tap: 'onBackToArticleTap'
            },
            '#mainView #amazonOffers #back': {
                tap: 'onBackToArticleTap'
            },
            '#mainView #ebayOffers #back': {
                tap: 'onBackToArticleTap'
            }
        }
    },

    launch: function() {
        Ext.getCmp('mainView').element.dom.addEventListener('click', function(e){
            var href;

            if (e.target.tagName === 'A') {
                e.preventDefault();
                navigator.app.loadUrl(e.target.getAttribute('href'), { openExternal:true });
            };
        })
    },

    onScanButtonTap: function(){
        var scanner;

        if (!window.cordova) {
            scanner = {
                scan: function(callback){
                    callback({
                        text: '711719817628',
                        format: 'UPC_A',
                        cancelled: false
                    });
                }
            }
        } else {
            scanner = cordova.require("com.phonegap.plugins.barcodescanner.barcodescanner");
        }

        scanner.scan(function (result) {
            if (!result.cancelled) {
                Ext.getCmp('mainView').down('#search').setMasked({
                    xtype: 'loadmask',
                    message: 'Searching...'
                });
                Ext.getCmp('mainView').down('#searchToolbar').disable();
                MC.model.ArticleById.load(result.text, {
                    success: function(article){
                        Ext.getCmp('mainView').down('#searchToolbar').enable();
                        Ext.getCmp('mainView').child('#search').setMasked(false);
                        Ext.getCmp('mainView').animateActiveItem('#article', {type: 'slide', direction: 'left'});
                        Ext.getCmp('mainView').down('#article').setData( article.data );
                    }
                });
            }
        }, function (error) {
            alert("Scanning failed: " + error);
        });
    },

    onArticleBackButtonTap: function(){
        Ext.getCmp('mainView').animateActiveItem('#search', {type: 'slide', direction: 'right'});
    },

    onSearchFieldAction: function(field){
        var value = field.getValue();

        if (value) {
            Ext.getCmp('mainView').down('#searchResults').getStore().load({params: {query: value}});
        } else {
            Ext.getCmp('mainView').down('#searchResults').getStore().removeAll();
        }
    },

    onSearchItemTap: function(dataview, index, target, record){
        MC.model.ArticleByUrl.load(record.get('url'), {
            success: function(article){
                Ext.getCmp('mainView').animateActiveItem('#article', {type: 'slide', direction: 'left'});
                Ext.getCmp('mainView').down('#article').setData( article.data );
            }
        });
    },

    onArticleNavItemTap: function(listview, index, target, record){
        var list = Ext.getCmp('mainView').down('#'+record.get('type')),
            article = Ext.getCmp('mainView').down('#article');

        Ext.getCmp('mainView').animateActiveItem(list, {type: 'slide', direction: 'left'});
        list.down('dataview').getStore().load({params: {game_id: article.data.id}});
    },

    onBackToArticleTap: function(){
        Ext.getCmp('mainView').animateActiveItem('#article', {type: 'slide', direction: 'right'});
    }
});