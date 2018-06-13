CKEDITOR.plugins.add( 'cardio', {
    requires: 'widget,cardioeco,cardiocomp',
    icons: 'cardio',

    init: function (editor) {

        editor.widgets.add('cardio', {
            // button: 'Cardio',

            template:
                '<div id="cardio-wrapper" class = "cardio-widget">' +
                    ' <b><span style="display: inline-block; margin-top: 20px; margin-bottom: 20px"><div class="editable"></div>Dados do Paciente:</span></b> <br>'+
                    '<table>' +
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
                    '</table>' +

                    '<b><span style="display: inline-block; margin-top: 20px; margin-bottom: 20px"><div class="editable"></div>Parâmetros estruturais:</span></b><br>'+

                    '<table>' +
                        '<tr>' +
                            '<td> Seios Aórticos:</td>' +
                            '<td><div id="sao" class="edt single-line editable3" tabindex="3" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> mm</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refsao" class="editable16"></div></td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Junção Sinotubular:</td>' +
                            '<td><div id="jsn" class="edt single-line editable5" tabindex="4" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> mm</td>' +
                            '<td  style = "padding-left: 20px"><div style = "min-width: 40px" id = "refjsn" class="editable17"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Aorta Ascendente:</td>' +
                            '<td><div id="aasc" class="edt single-line editable6" tabindex="5" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> mm</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refaa" class="editable18"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Átrio Esquerdo:</td>' +
                            '<td><div id="aesq" class="edt single-line editable7" tabindex="6" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> mm</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refaesq" class="editable19"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Diâmetro Ventricular Direito:</td>' +
                            '<td><div id="dvdir" class="edt single-line editable4" tabindex="7" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> mm</td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Diâmetro Diastólico Final do VE:</td>' +
                            '<td><div id="ddfve" class="edt single-line editable8" tabindex="8" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> mm</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refddfve" class="editable20"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Diâmetro Sistólico Final do VE:</td>' +
                            '<td><div id="dsfve" class="edt single-line editable9" tabindex="9" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> mm</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refdsfve" class="editable21"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Espessura Diastólica do Septo:</td>' +
                            '<td><div id="eds" class="edt single-line editable10" tabindex="10" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> mm</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refeds" class="editable22"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Espessura Diastólica da PPVE:</td>' +
                            '<td><div id="edppve" class="edt single-line editable11" tabindex="11" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> mm</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refedppve" class="editable23"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Área do Átrio Esquerdo (4 Câmaras):</td>' +
                            '<td><div id="aae4" class="edt single-line editable12" tabindex="12" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> mm²</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refaae4" class="editable24"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Área do Átrio Esquerdo (2 Câmaras):</td>' +
                            '<td><div id="aae2" class="edt single-line editable13" tabindex="13" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> mm²</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refaae2" class="editable25"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Comprimento Átrio Esquerdo (L):</td>' +
                            '<td><div id="cae" class="edt single-line editable14" tabindex="14" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> mm</td>' +
                        '</tr>' +
                    '</table>' +

                    '<b><span style="display: inline-block; margin-top: 20px; margin-bottom: 20px"><div class="editable"></div>Relações e Funções Ventriculares:</span></b> <br>'+

                    '<table>' +
                        '<tr>' +
                            '<td>Volume do AE / Superfície Corporal:</td>' +
                            '<td><div id="vaesc"> </div> </td>' +
                            '<td>ml/m²</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refvaesc" class="editable26"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td>VE(d) / Superfície Corporal:</td>' +
                            '<td><div id="vedsc"> </div> </td>' +
                            '<td> m²</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refvedsc" class="editable27"></div></td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td>VE(d) / Altura:</td>' +
                            '<td><div id="veda"> </div> </td>' +
                            '<td> cm</td>' +
                            '<td style = "padding-left: 20px"><div class="editable"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td>Volume Diastólico Final / SC:</td>' +
                            '<td><div id="vdf"> </div> </td>' +
                            '<td> ml</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refvdf" class="editable28"></div></td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td>Volume Sistólico Final / SC:</td>' +
                            '<td><div id="vsf"> </div> </td>' +
                            '<td> ml</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refvsf" class="editable29"></div></td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Fração de Ejeção (Simpson):</td>' +
                            '<td><div id="fes" class="edt single-line editable15" tabindex="15" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> %</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "reffes" class="editable30"></div></td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Fração de Ejeção (Teicholz):</td>' +
                            '<td><div id="fet" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> %</td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Percent. Encurt. Cavidade:</td>' +
                            '<td><div id="pec" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td>%</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refpec" class="editable31"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Massa do VE /  Superfície Corporal:</td>' +
                            '<td><div id="mvesc" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td>g/m²</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refmvesc" class="editable32"></div></td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Massa Ventricular Esquerda:</td>' +
                            '<td><div id="mve" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td>g</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refmve" class="editable33"></div></td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Espessura Relativa das Paredes do VE:</td>' +
                            '<td><div id="erpve" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td>cm</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "referpve" class="editable34"></div></td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Relação ERP e Massa VE i:</td>' +
                            '<td colspan="3"><div id="rerp" style="height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td></td>' +
                            '<td style = "padding-left: 20px"><div class="editable"></div></td>' +
                        '</tr>' +
                    '</table>' +

                    // '<div style="page-break-after: always"><span style="display: none;">&nbsp;</span></div>' +

                '</div>',

            editables: _editables(),

            upcast: function( element ) {
                 return element.name == "div" && element.hasClass( 'cardio-widget' );;
            }
        })
    },
});

//O CKEditor não aceita definir uma classe única para tornar todos os elementos editáveis, por isso cada um precisa ter uma classe única.
function _editables() {
  var editables = {};

  for (var i = 0; i <= 34; i++) {
    editables['editable' + i] = {
        selector: '.editable' + i,
    };
  }

  return editables;
}