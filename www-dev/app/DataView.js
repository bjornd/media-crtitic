Ext.define('MC.DataView', {
    extend: 'Ext.dataview.DataView',

    onLoad: function(store, records, successful, operation){
        this.callParent(arguments);

        if (!this.defaultEmptyText && this.getEmptyText()) {
            this.defaultEmptyText = this.getEmptyText();
        }

        if (successful) {
            this.setEmptyText(this.defaultEmptyText);
        } else {
            this.setEmptyText('Error occurred during request');
        }
    }
});