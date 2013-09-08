Ext.define('MC.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            '#mainView #scanButton': {
                tap: 'onScanButtonTap'
            },
            '#mainView #searchField': {
                change: 'onSearchFieldChange'
            },
            '#mainView #article #back': {
                tap: 'onArticleBackButtonTap'
            },
            '#mainView #searchResults': {
                itemtap: 'onSearchItemTap'
            }
        }
    },

    launch: function() {
        Ext.getCmp('mainView').element.dom.addEventListener('click', function(e){
            var href;

            if (e.target.tagName === 'A') {
                e.preventDefault();
                window.open(e.target.getAttribute('href'), '_system', 'location=yes');
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
                        Ext.getCmp('mainView').child('#article').setData( article.data );
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

    onSearchFieldChange: function(field, value, oldValue){
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
                Ext.getCmp('mainView').child('#article').setData( article.data );
            }
        });
    }
});