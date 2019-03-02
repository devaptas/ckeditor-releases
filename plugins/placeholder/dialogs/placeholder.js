var timer = 0;

CKEDITOR.dialog.add( 'placeholder', function( editor ) {

	return {
		title: 'Preenchimento de valores',
		minWidth: 200,
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
							$('#values-container').empty();
							$('.cke_editor_workflow_dialog').removeClass('cke_reset_all');
							$('a.cke_dialog_ui_button').addClass('btn btn-xs').removeClass('cke_dialog_ui_button');
							$('.cke_dialog_ui_button_ok').addClass('btn-success cke_disabled').removeClass('cke_dialog_ui_button_ok');
							$('.cke_dialog_ui_button_cancel').addClass('btn-danger').removeClass('cke_dialog_ui_button_cancel');

							$('.variables-dialog').remove();

			                $.ajax({ 
			                    url: editor.config.placeholderUrl,
			                    data: {name: widget.data.name},
			                    success: function(data) {
			                    	$('#values-container').empty().hide().append(data.htmlMessage).slideDown(100);;
									let dialog = CKEDITOR.dialog.getCurrent();
									if (dialog)
										dialog.enableButton('ok');
			                    }
			                });
						},
						commit: function( widget ) {
							// Quando o botão "OK" é pressionado, insere o valor da variável no lugar do placeholder
							// e incrementa o contador de uso do respectivo valor.
							let selectedField = $("#values-container input[type='radio']:checked");
			                
							if(selectedField.val()) {
								let editor = CKEDITOR.instances.workflow;
								editor.insertHtml(selectedField.val(), 'text');
								editor.updateElement();
								clearTimeout(timer);
	                            timer = setTimeout(function() {
	                               focusVariable(CKEDITOR.instances.workflow);
	                            }, 10);
							}
						}
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
