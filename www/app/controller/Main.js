Ext.define('MC.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            '#mainView #scanButton': {
                tap: 'onScanButtonTap'
            }
        }
    },

    init: function() {

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
                MC.model.Article.load(result.text, {
                    success: function(article){
                        Ext.getCmp('mainView').setActiveItem('#article');
                        Ext.getCmp('mainView').child('#article').setData( article.data );
                    }
                });
            }
        }, function (error) {
            alert("Scanning failed: " + error);
        });
    }
});
