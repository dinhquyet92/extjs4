Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',
    views: [
        'user.List'
    ],
    init: function() {
        console.log('Initialized Users! This happens before the Application launch function is called');
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            }
        });
    },
    onPanelRendered: function() {
        console.log('The panel was rendered');
    }
});