Ext.define('MC.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Toolbar',
        'MC.view.Article',
        'Ext.field.Search',
        'Ext.dataview.DataView'
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
                padding: 10,
                store: 'SearchResults',
                itemTpl: '<div>{title}</div>'
            }]
        }, {
            itemId: 'article',
            xclass: 'MC.view.Article'
        }]
    }
});