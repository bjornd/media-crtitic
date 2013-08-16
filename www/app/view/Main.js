Ext.define('MC.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'MC.view.Article'
    ],
    config: {
        id: 'mainView',
        scrollable: true,
        layout: 'card',
        items: [{
            docked: 'top',
            xtype: 'titlebar',
            title: 'Media Critic'
        },{
            itemId: 'scan',
            padding: 10,
            items: [{
                xtype: 'button',
                itemId: 'scanButton',
                text: 'Scan'
            }]
        }, {
            itemId: 'article',
            xclass: 'MC.view.Article'
        }]
    }
});
