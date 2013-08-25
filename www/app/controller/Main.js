Ext.define('MC.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            '#mainView #scanButton': {
                tap: 'onScanButtonTap'
            },
            '#mainView #articleBuyButton': {
                tap: 'onBuyButtonTap'
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
        var scanner,
            that = this;

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
                MC.model.Article.load(result.text, {
                    success: function(article){
                        that.lastLoadedArticle = article;
                        Ext.getCmp('mainView').setActiveItem('#article');
                        Ext.getCmp('mainView').child('#article').setData( article.data );
                    }
                });
            }
        }, function (error) {
            alert("Scanning failed: " + error);
        });
    },

    onBuyButtonTap: function(){
        window.open(this.lastLoadedArticle.get('amazon_url'), '_system', 'location=yes');
    }
});
