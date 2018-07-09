CKEDITOR.plugins.add( 'cardiogroup', {
    requires: 'widget,cardioeco,cardiocomp,cardio',
    icons: 'cardiogroup',

    init: function (editor) {
        var pluginDirectory = this.path;

        editor.addContentsCss( pluginDirectory + 'styles/cardio.css' );

        CKEDITOR.scriptLoader.load( pluginDirectory + 'scripts.js', function( success ) {
            initializeEditorEvents(editor);
        } );

       allowedContent: true,

      items = {} ,          
      editor.addMenuGroup('cardio_group');

      items.cardio = {
        label: 'Ecocardio',
        group: 'cardio_group',
        command: 'cardio',
        order: 1
      };

    items.cardiocomp = {
        label: 'Ecocardio Complementar',
        group: 'cardio_group',
        command: 'cardiocomp',
        order: 2
      };

    items.cardioeco = {
        label: 'Ecocardio com Stress',
        group: 'cardio_group',
        command: 'cardioeco',
        order: 3
      };

      editor.addMenuItems(items);

      editor.ui.add('cardiogroup', CKEDITOR.UI_MENUBUTTON, {
        label: 'Cardiologia',
        name: 'cardio',
        modes: {
          wysiwyg: 1
        },
            onMenu: function() {
                var active = {};

                for ( var p in items )
                    active[ p ] = setButtonState(editor);

                return active;
            }
      });

    },
});