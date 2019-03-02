CKEDITOR.plugins.add( 'simage', {
	icons: 'simage',
	init: function( editor ) {
		editor.addCommand('simage', {
			exec: function (editor) {
				fileInput = document.createElement('input');
					fileInput.setAttribute('type','file')
					fileInput.setAttribute('accept', '.jpg')
					fileInput.click();
				fileInput.onchange = function(){
					file = fileInput.files[0];

					if (file.size > 12000000){
						callNotify({
							icon: 'fa-times',
							type: 'danger',
							title: 'Erro!',
							message: 'O tamanho máximo de um arquivo não pode exceder 12 mb.'
						});
						return 0;
					}else if (['jpeg','bmp','jpg','png','svg','gif','tif', 'svg+xml'].indexOf(file.type.split('/')[1]) === -1){
						callNotify({
							icon: 'fa-times',
							type: 'danger',
							title: 'Erro!',
							message: 'Este tipo de arquivo não é suportado. Selecione apenas imagens.'
						});
						return 0;
					}
					formData = new FormData;
					formData.append('file', file);
					editor.setReadOnly(true)
					imageDefaultSize = editor.config.imageSize;
					$.ajax({
						url: editor.config.imageUploadURL,
						type: 'POST',
						data: formData,
						processData: false,
						contentType: false,
						success: function(data, textStatus, jqXHR) {
							editor.setReadOnly(false);
							splitUrl = data['files'][0].url.split("/dados/www");
							url = splitUrl[0] + splitUrl[1]
							editor.insertHtml('<img src="' + url + '" class="image-editor" data-width="'+imageDefaultSize+' "width="'+imageDefaultSize+'">');
						},
						error: function(data, textStatus, jqXHR){
							callNotify(data);
						}
					})
				}
			}
		});

		editor.ui.addButton( 'SImage', {
			label: 'Anexar Imagem',
			command: 'simage',
			toolbar: 'insert'
		});
	}
});
