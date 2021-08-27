Ext.require('Ext.container.Viewport');
Ext.application({
    name: 'HelloExt',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'Hello ExtJs',
                    html : '<h1 class="text-center">Hello! Welcome to Ext JS.</h1>'
                }
            ]
        });
    }
});