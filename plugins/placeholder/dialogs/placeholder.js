'use strict';

CKEDITOR.dialog.add( 'placeholder', function( editor ) {

	return {
		title: 'Preenchimento de valores',
		minWidth: 500,
		minHeight: 100,
		contents: [
			{
				id: 'var',
				elements: [
					{
						id: 'name',
						type: 'html',
						html: '<div id="values-container"></div>',
						style: 'width: 100%;',
						required: true,
						setup: function( widget ) {
							// Ao carregar o dialog, limpa o html dos valores anteriores e
							// remove as classes do CKEDITOR que interferem com o css.
							$('#values-container').html('');
							$('.cke_reset_all').removeClass('cke_reset_all');
							$('a.cke_dialog_ui_button').addClass('btn btn-xs').removeClass('cke_dialog_ui_button');
							$('.cke_dialog_ui_button_ok').addClass('btn-success').removeClass('cke_dialog_ui_button_ok');
							$('.cke_dialog_ui_button_cancel').addClass('btn-danger').removeClass('cke_dialog_ui_button_cancel');

			                $.ajax({
			                    url: editor.config.placeholderUrl,
			                    data: {name: widget.data.name},
			                    success: function(data) {
									$('#values-container').append(data.htmlMessage);
			                    }
			                });
						},
						commit: function( widget ) {
							// Quando o botão "OK" é pressionado, insere o valor da variável no lugar do placeholder
							// e incrementa o contador de uso do respectivo valor.
							let selectedField = $("#values-container input[type='radio']:checked");
			                $.ajax({
			                    url: selectedField.data('url'),
			                    data: {id: selectedField.data('id')},
			                    success: function(data) {
									$('#values-container').append(data.htmlMessage);
			                    }
			                });
							if(selectedField.val())
								CKEDITOR.instances.workflow.insertHtml(selectedField.val());
						},
					}
				],
			}
		],
	  buttons: [
	    CKEDITOR.dialog.cancelButton,
	    CKEDITOR.dialog.okButton
	 ]
 	};
} );
