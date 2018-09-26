CKEDITOR.plugins.add( 'cardio', {
    icons: 'cardio',

    init: function (editor) {
        editor.widgets.add('cardio', {
            template:
                '<div id="cardio-wrapper" class = "cardio-widget">' +
                    '<table style="font-family: verdana; font-size: 12px">' +
                        '<tr>' +
                            '<td colspan="4" style="background-color: #bcc9dd; height: 25px; font-size: 14px"> <b>Dados do Paciente:</b></td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td> Altura:</td>' +
                            '<td><div id="altura" class="edt single-line editable1 " tabindex="1" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> cm</td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Peso:</td>' +
                            '<td><div id="peso" class="edt single-line editable2" tabindex="2" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> kg</td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Superficie Corporal:</td>' +
                            '<td><div id="sc"> </div> </td>' +
                            '<td> m²</td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td colspan="4" style="background-color: #bcc9dd; height: 25px; font-size: 14px"> <b>Parâmetros Estruturais:</b></td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td> Seios Aórticos:</td>' +
                            '<td><div id="sao" class="edt single-line editable3" tabindex="3" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> mm</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px; height: 18px" id = "refsao" class="editable4 edt refeditable"></div></td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Junção Sinotubular:</td>' +
                            '<td><div id="jsn" class="edt single-line editable5" tabindex="4" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> mm</td>' +
                            '<td  style = "padding-left: 20px"><div style = "min-width: 40px; height: 18px" id = "refjsn" class="editable6 edt refeditable"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Aorta Ascendente:</td>' +
                            '<td><div id="aasc" class="edt single-line editable7" tabindex="5" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> mm</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px; height: 18px" id = "refaa" class="editable8 edt refeditable"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Átrio Esquerdo:</td>' +
                            '<td><div id="aesq" class="edt single-line editable9" tabindex="6" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> mm</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px; height: 18px" id = "refaesq" class="editable10 edt refeditable"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Volume do Átrio Esquerdo:</td>' +
                            '<td><div id="vae" class="edt single-line editable11" tabindex="7" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> ml</td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Diâmetro Basal do Ventrículo Direito:</td>' +
                            '<td><div id="dbvd" class="edt single-line editable12" tabindex="8" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> mm</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px; height: 18px" id = "refdbvd" class="editable13 edt refeditable"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Diâmetro Proximal da Via de Saída do VD:</td>' +
                            '<td><div id="dpvsvd" class="edt single-line editable14" tabindex="9" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> mm</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px; height: 18px" id = "refdpvsvd" class="editable15 edt refeditable"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Diâmetro Diastólico Final do VE:</td>' +
                            '<td><div id="ddfve" class="edt single-line editable16" tabindex="10" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> mm</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px; height: 18px" id = "refddfve" class="editable17 edt refeditable"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Diâmetro Sistólico Final do VE:</td>' +
                            '<td><div id="dsfve" class="edt single-line editable18" tabindex="11" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> mm</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px; height: 18px" id = "refdsfve" class="editable19 edt refeditable"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Espessura Diastólica do Septo:</td>' +
                            '<td><div id="eds" class="edt single-line editable20" tabindex="12" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> mm</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px; height: 18px" id = "refeds" class="editable21 edt refeditable"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Espessura Diastólica da PPVE:</td>' +
                            '<td><div id="edppve" class="edt single-line editable22" tabindex="13" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> mm</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px; height: 18px" id = "refedppve" class="editable23 edt refeditable"></div> </td>' +
                        '</tr>' +


                        '<tr>' +
                            '<td colspan="4" style="background-color: #bcc9dd; height: 25px; font-size: 14px"> <b>Relações e Funções:</b></td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td>Volume do AE / Superfície Corporal:</td>' +
                            '<td><div id="vaesc"> </div> </td>' +
                            '<td>ml/m²</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px; height: 18px" id = "refvaesc" class="editable24 edt refeditable"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td>Volume Diastólico Final:</td>' +
                            '<td><div id="vdf" class="edt single-line editable39" tabindex="14" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> ml</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px; height: 18px" id = "refvdf" class="editable25 edt refeditable"></div></td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td>Volume Sistólico Final:</td>' +
                            '<td><div id="vsf" class="edt single-line editable40" tabindex="15" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> ml</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px; height: 18px" id = "refvsf" class="editable26 edt refeditable"></div></td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td>Volume Diastólico Final / SC:</td>' +
                            '<td><div id="vdfsc"> </div> </td>' +
                            '<td> ml/m²</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px; height: 18px" id = "refvdfsc" class="editable27 edt refeditable"></div></td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td>Volume Sistólico Final / SC:</td>' +
                            '<td><div id="vsfsc"> </div> </td>' +
                            '<td>  ml/m²</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px; height: 18px" id = "refvsfsc" class="editable28 edt refeditable"></div></td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td>Diâmetro Diastólico Final do VE / SC:</td>' +
                            '<td><div id="ddfvesc"> </div> </td>' +
                            '<td> mm/m²</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px; height: 18px" id = "refddfvesc" class="editable29 edt refeditable"></div></td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td>Diâmetro Sistólico Final do VE / SC:</td>' +
                            '<td><div id="dsfvesc"> </div> </td>' +
                            '<td> mm/m²</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px; height: 18px" id = "refdsfvesc" class="editable30 edt refeditable"></div></td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Fração de Ejeção (Simpson):</td>' +
                            '<td><div id="fes" class="edt single-line editable31" tabindex="16" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> %</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px; height: 18px" id = "reffes" class="editable32 edt refeditable"></div></td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Fração de Ejeção:</td>' +
                            '<td><div id="fet" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> %</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px; height: 18px" id = "reffet" class="editable33 edt refeditable"></div></td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Percent. Encurt. Cavidade:</td>' +
                            '<td><div id="pec" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td>%</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px; height: 18px" id = "refpec" class="editable34 edt refeditable"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Massa do VE /  Superfície Corporal:</td>' +
                            '<td><div id="mvesc" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td>g/m²</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px; height: 18px" id = "refmvesc" class="editable35 edt refeditable"></div></td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Massa Ventricular Esquerda:</td>' +
                            '<td><div id="mve" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td>g</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px; height: 18px" id = "refmve" class="editable36 edt refeditable"></div></td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Espessura Relativa das Paredes do VE:</td>' +
                            '<td><div id="erpve" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td>mm</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px; height: 18px" id = "referpve" class="editable37 edt refeditable"></div></td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Relação ERP e Massa VE i:</td>' +
                            '<td colspan="3"><div id="rerp" class="editable38" style="height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td></td>' +
                            '<td style = "padding-left: 20px"><div></div></td>' +
                        '</tr>' +
                    '</table>' +
                '</div>',

            editables: _editables(),
            upcast: function(element) {
                 return element.name == "div" && element.hasClass('cardio-widget');
            }
        });
    }
});

// O CKEditor não aceita definir uma classe geral para tornar todos os elementos editáveis, por isso cada um precisa ter uma classe única.
function _editables() {
    var editables = {};

    for (var i = 0; i <= 40; i++) {
        editables['editable' + i] = {
            selector: '.editable' + i
        };
    }

    return editables;
}