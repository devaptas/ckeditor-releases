

'use strict';

( function() {
	CKEDITOR.plugins.add( 'placeholder', {
		requires: 'widget,dialog',
		lang: 'af,ar,az,bg,ca,cs,cy,da,de,de-ch,el,en,en-au,en-gb,eo,es,es-mx,et,eu,fa,fi,fr,fr-ca,gl,he,hr,hu,id,it,ja,km,ko,ku,lv,nb,nl,no,oc,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sv,th,tr,tt,ug,uk,vi,zh,zh-cn', // %REMOVE_LINE_CORE%
		icons: 'placeholder',
		hidpi: true,

		onLoad: function() {
			CKEDITOR.addCss( '.cke_placeholder{background-color:#ff0}' );
		},

		init: function( editor ) {

			var lang = editor.lang.placeholder;

			// Registra uma instância do dialog com uma instância do placeholder
			CKEDITOR.dialog.add( 'placeholder', this.path + 'dialogs/placeholder.js' ); 

	        editor.addContentsCss( this.path + 'styles/dialogStyle.css' );

			editor.widgets.add( 'placeholder', {
				dialog: 'placeholder',
				pathName: lang.pathName,
				template: '<span class="cke_placeholder">[[]]</span>',

				downcast: function() {
					return new CKEDITOR.htmlParser.text( '[[' + this.data.name + ']]' );
				},

				init: function() {

					this.setData( 'name', this.element.getText().slice( 2, -2 ) );

					// Ao pressionar a tecla F2, seleciona
					// a próxima variável a partir da posição do cursor.
					// this.on('key', function(ev){
					// 	if (ev.data.keyCode==113){ 
					// 		var editor = CKEDITOR.instances.workflow;
							
					// 	    var range = editor.getSelection().getRanges()[0];
					// 	    range.setEndAt(editor.editable(), CKEDITOR.POSITION_AFTER_END);

					// 	    var walker = new CKEDITOR.dom.walker(range), node;

					// 	    while ((node = walker.next())) {
					// 	        if($(node.$).hasClass('cke_placeholder') && !this.element.equals(node)) {						    
					// 				editor.widgets.getByElement(node).focus();
					// 				break;
					// 	        }
					// 	    } 
					// 	}
     //            	});

     				// this.on('edit', function (ev) {
     				// 	$('.cke_dialog_background_cover').remove();
     				// });

					// this.on('focus', function(ev){
					// 	// let dialog = CKEDITOR.dialog.getCurrent();
					// 	// if (dialog)
					// 	// 	dialog.hide(); 

					// 	if($(this.wrapper.$.parentElement).hasClass('variable'))
					// 		editor.execCommand( 'placeholder' );
					// 	else 
					// 		editor.insertHtml('');						
     //            	});
				},

				data: function() {
					this.element.setText( '[[' + this.data.name + ']]' );
				},

				getLabel: function() {
					return this.editor.lang.widget.label.replace( /%1/, this.data.name + ' ' + this.pathName );
				}
			} );

			editor.ui.addButton && editor.ui.addButton( 'CreatePlaceholder', {
				label: lang.toolbar,
				command: 'placeholder',
				toolbar: 'insert,5',
				icon: 'placeholder'
			} );
		},

		afterInit: function( editor ) {
			var placeholderReplaceRegex = /\[\[([^\[\]])+\]\]/g;

			editor.dataProcessor.dataFilter.addRules( {
				text: function( text, node ) {
					var dtd = node.parent && CKEDITOR.dtd[ node.parent.name ];

					// Skip the case when placeholder is in elements like <title> or <textarea>
					// but upcast placeholder in custom elements (no DTD).
					if ( dtd && !dtd.span )
						return;

					return text.replace( placeholderReplaceRegex, function( match ) {
						// Creating widget code.
						var widgetWrapper = null,
							innerElement = new CKEDITOR.htmlParser.element( 'span', {
								'class': 'cke_placeholder'
							} );

						// Adds placeholder identifier as innertext.
						innerElement.add( new CKEDITOR.htmlParser.text( match ) );
						widgetWrapper = editor.widgets.wrapElement( innerElement, 'placeholder' );

						// Return outerhtml of widget wrapper so it will be placed
						// as replacement.
						return widgetWrapper.getOuterHtml();
					} );
				}
			} );
		}
	} );

} )();
