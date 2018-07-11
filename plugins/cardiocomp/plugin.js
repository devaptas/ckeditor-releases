CKEDITOR.plugins.add( 'cardiocomp', {
    requires: 'widget',
    icons: 'cardiocomp',

    init: function (editor) {
        editor.widgets.add('cardiocomp', {
            template:
                '<div id="cardiocomp-wrapper" class = "cardiocomp-widget">' +

                    '<b><span style="display: inline-block; margin-top: 20px; margin-bottom: 20px"><div>Parâmetros - Função Diastólica do VE:</div></span></b> <br>'+

                    '<table>' +
                        '<tr>' +
                            '<td> Fluxo Mitral Onda E:</td>' +
                            '<td><div id="fmoe" tabindex="1" class="edt compeditable1" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> m/s</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "reffmoe" class="compeditable2"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Fluxo Mitral Onda A:</td>' +
                            '<td><div id="fmoa" tabindex="2" class="edt compeditable3" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> m/s</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "reffmoa" class="compeditable4"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Valsalva E/A:</td>' +
                            '<td><div id="vsea" tabindex="3" class="edt compeditable5" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> </td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" style = "min-width: 40px" id = "refvsea" class="compeditable6"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> e\' Septal:</td>' +
                            '<td><div id="es" tabindex="4" class="edt compeditable7" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> </td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refes" class="compeditable8"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> e\' Lateral:</td>' +
                            '<td><div id="el" tabindex="5" class="edt compeditable9" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td> </td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refel" class="compeditable10"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td>Relação E/A:</td>' +
                            '<td><div id="rea"> </div> </td>' +
                            '<td> </td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refrea" class="compeditable11"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td>Média Rel E/e\':</td>' +
                            '<td><div id="mree"> </div> </td>' +
                            '<td> </td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refmree" class="compeditable12"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> TD Mitral:</td>' +
                            '<td><div  tabindex="6" id="tdm" class="edt compeditable13" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td>ms</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "reftdm" class="compeditable14"></div> </td>' +
                        '</tr>' +
                    '</table>' +

                    ' <b><span style="display: inline-block; margin-top: 20px; margin-bottom: 20px"><div>Pressão Sistólica da Artéria Pulmonar e Veia Cava:</div></span></b> <br>'+

                    '<table>'+
                        '<tr>' +
                            '<td> PSAP:</td>' +
                            '<td><div  tabindex="7" id="psap" class="edt compeditable15" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td>mmHG</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refpsap" class="compeditable16"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Pressão Estimada do Átrio Direito:</td>' +
                            '<td><div  tabindex="8" id="pead" class="edt compeditable17" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td>mmHG</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refpead" class="compeditable18"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Veia Cava Inferior:</td>' +
                            '<td><div  tabindex="9" id="vci" class="edt compeditable19" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td>mm</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refvci" class="compeditable20"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Veia Cava Inferior(Expiração):</td>' +
                            '<td><div  tabindex="10" id="vcie" class="edt compeditable21" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td>mm</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refvcie" class="compeditable22"></div> </td>' +
                        '</tr>' +

                        '<tr>' +
                            '<td> Variação da Veia Cava Inferior:</td>' +
                            '<td><div id="vvci" style="width: 45px;height: 18px;overflow: hidden;"> </div> </td>' +
                            '<td>%</td>' +
                            '<td style = "padding-left: 20px"><div style = "min-width: 40px" id = "refvvci" class="compeditable23"></div> </td>' +
                        '</tr>' +
                    '</table>'+
                '</div>',

            editables: _compeditables(),

            upcast: function( element ) {
                return element.name == 'div' && element.hasClass('cardiocomp-widget');
            }
        })
    }
});

function _compeditables() {
    var _compeditables = {};

    for (var i = 1; i <= 23; i++) {
        _compeditables['_compeditable' + i] = {
            selector: '.compeditable' + i
        };
    }
    
    return _compeditables;
}