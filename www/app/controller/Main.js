Ext.define('MC.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            view: '#mainView'
        },

        control: {
            '#mainView #scanButton': {
                tap: 'onScanButtonTap'
            },
            '#mainView #searchField': {
                action: 'onSearchFieldAction',
                clearicontap: 'onSearchFieldClear'
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

    onSearchFieldAction: function(field){
        var value = field.getValue();

        this.getView().down('#search').setActiveItem('#searchResults');
        if (value) {
            this.getView().down('#searchResults').getStore().load({params: {query: value}});
        } else {
            this.getView().down('#searchResults').hasLoadedStore = false;
            this.getView().down('#searchResults').getStore().removeAll();
        }
    },

    onSearchFieldClear: function(){
        this.getView().down('#searchResults').hasLoadedStore = false;
        this.getView().down('#searchResults').getStore().removeAll();
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
            var mainView = Ext.getCmp('mainView');

            if (!result.cancelled) {
                mainView.down('#search').setActiveItem('#lookupResults');
                mainView.down('#lookupResults').setHtml('');
                mainView.down('#lookupResults').setMasked({
                    xtype: 'loadmask',
                    message: 'Searching...'
                });
                mainView.down('#searchToolbar').disable();
                MC.model.ArticleById.load(result.text, {
                    success: function(article){
                        mainView.animateActiveItem('#article', {type: 'slide', direction: 'left'});
                        mainView.down('#article').setData( article.data );
                    },
                    failure: function(model, operation){
                        if (operation.error.status === 404) {
                            mainView.down('#lookupResults').setHtml('Sorry, can not find game with code <b>'+result.text+'</b>');
                        } else {
                            mainView.down('#lookupResults').setHtml('Error occurred during request');
                        }
                    },
                    callback: function(){
                        mainView.down('#searchToolbar').enable();
                        mainView.down('#lookupResults').setMasked(false);
                    }
                });
            }
        }, function (error) {
            alert("Scanning failed: " + error);
        });
    },

    onArticleBackButtonTap: function(){
        this.getView().down('#search').setActiveItem('#searchResults');
        this.getView().animateActiveItem('#search', {type: 'slide', direction: 'right'});
    },

    onSearchItemTap: function(dataview, index, target, record){
        this.getView().animateActiveItem('#article', {type: 'slide', direction: 'left'});
        this.getView().down('#article').hideData();
        this.getView().down('#article').setMasked({xtype: 'loadmask'});
        MC.model.ArticleByUrl.load(record.get('url'), {
            success: function(article){
                Ext.getCmp('mainView').down('#article').setData( article.data );
            },
            callback: function(){
                this.getView().down('#article').setMasked(false);
            },
            scope: this
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