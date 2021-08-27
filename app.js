Ext.require('Ext.container.Viewport');
// Ext.application({
//     name: 'HelloExt',
//     launch: function() {
//         Ext.create('Ext.container.Viewport', {
//             layout: 'fit',
//             items: [
//                 {
//                     title: 'Hello ExtJs',
//                     html : '<h1 class="text-center">Hello! Welcome to Ext JS.</h1>'
//                 }
//             ]
//         });
//     }
// });
Ext.application({
    name: 'AM',

    appFolder: 'app',

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'userlist',
                    title: 'Users',
                    html : '<h1>List of users will go here</h1>'
                }
            ]
        });
        console.log('Initialized Application! ');
    },
    controllers: [
        'Users'
    ]
});