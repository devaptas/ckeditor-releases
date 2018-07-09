CKEDITOR.plugins.add( 'cardioeco', {
    icons: 'cardioeco',

    init: function (editor) {
        var pluginDirectory = this.path;
        var imagePath = pluginDirectory + 'img/cardio-eco.png';

        editor.widgets.add('cardioeco', {

            template:
                '<div id="cardioeco-wrapper" class = "cardioeco-widget" style="text-align: center">' +
                    "<img src= "+imagePath+" style='width: 614px'/>"+
                    '<table style="margin: 0px auto">' +
                        '<caption style=" text-align: left;">Repouso: Índice de Escore de contratilidade da Parede: <span id="rep"> 0 (Não Verificado)</span> </caption style=" text-align: left;">'+
                        '<tr>'+
                            '<td>'+
                                '<table cellpadding="1" cellspacing="0" style="width:50px;border: 1px solid lightgray; line-height: 12px; margin-left: 50px; margin-right: 50px">'+
                                    '<tbody>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">2</td>'+
                                            '<td style = "border:1px solid lightgray"><div  tabindex="1" class="rep edt tabeditable1"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">8</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="2" class="rep edt tabeditable2"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">14</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="3" class="rep edt tabeditable3"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">17</td>'+
                                            '<td style = "border:1px solid lightgray"><div  tabindex="4" class="rep edt tabeditable4"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #f0b551; font-weight: bolder;width: 20px;">16</td>'+
                                            '<td style = "border:1px solid lightgray"><div  tabindex="5" class="rep edt tabeditable5"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #f0b551; font-weight: bolder;width: 20px;">11</td>'+
                                            '<td style = "border:1px solid lightgray"><div  tabindex="6" class="rep edt tabeditable6"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #f0b551; font-weight: bolder;width: 20px;">5</td>'+
                                            '<td style = "border:1px solid lightgray"><div  tabindex="7" class="rep edt tabeditable7"></div></td>'+
                                        '</tr>'+
                                    '</tbody>'+
                                '</table>'+
                            '</td>'+
                            '<td>'+
                                '<table cellpadding="1" cellspacing="0" style="width:50px;border: 1px solid lightgray; line-height: 12px; margin-left: 50px; margin-right: 50px">'+
                                    '<tbody>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">1</td>'+
                                            '<td style = "border:1px solid lightgray"><div   tabindex="8" class="rep edt tabeditable8"></div></td>'+
                                        '</tr>'+
                                             '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">2</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="9" class="rep edt tabeditable9"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #55b658; font-weight: bolder;width: 20px;">3</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="10" class="rep edt tabeditable10"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #55b658; font-weight: bolder;width: 20px;">4</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="11" class="rep edt tabeditable11"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #f0b551; font-weight: bolder;width: 20px;">5</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="12" class="rep edt tabeditable12"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #f0b551; font-weight: bolder;width: 20px;">6</td>'+
                                            '<td style = "border:1px solid lightgray"><div  tabindex="13" class="rep edt tabeditable13"></div></td>'+
                                        '</tr>'+
                                    '</tbody>'+
                                '</table>'+
                            '</td>'+
                            '<td>'+
                                '<table cellpadding="1" cellspacing="0" style="width:50px;border: 1px solid lightgray; line-height: 12px; margin-left: 30px; margin-right: 50px">'+
                                    '<tbody>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #55b658; font-weight: bolder;width: 20px;">3</td>'+
                                            '<td style = "border:1px solid lightgray"><div  tabindex="14" class="rep edt tabeditable14"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #55b658; font-weight: bolder;width: 20px;">9</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="15" class="rep edt tabeditable15"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">14</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="16" class="rep edt tabeditable16"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">17</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="17" class="rep edt tabeditable17"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #f0b551; font-weight: bolder;width: 20px;">16</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="18" class="rep edt tabeditable18"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #f0b551; font-weight: bolder;width: 20px;">12</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="19" class="rep edt tabeditable19"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #f0b551; font-weight: bolder;width: 20px;">6</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="20" class="rep edt tabeditable20"></div></td>'+
                                        '</tr>'+
                                    '</tbody>'+
                                '</table>'+
                            '</td>'+
                            '<td>'+
                                '<table cellpadding="1" cellspacing="0" style="width:50px;border: 1px solid lightgray; line-height: 12px; margin-left: 14px; margin-right: 50px">'+
                                    '<tbody>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #55b658; font-weight: bolder;width: 20px;">4</td>'+
                                            '<td style = "border:1px solid lightgray"><div  tabindex="21" class="rep edt tabeditable21"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #55b658; font-weight: bolder;width: 20px;">10</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="22" class="rep edt tabeditable22"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #55b658; font-weight: bolder;width: 20px;">15</td>'+
                                            '<td style = "border:1px solid lightgray"><div  tabindex="23" class="rep edt tabeditable23"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">17</td>'+
                                            '<td style = "border:1px solid lightgray"><div  tabindex="24" class="rep edt tabeditable24"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">13</td>'+
                                            '<td style = "border:1px solid lightgray"><div  tabindex="25" class="rep edt tabeditable25"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">7</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="26" class="rep edt tabeditable26"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">1</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="27" class="rep edt tabeditable27"></div></td>'+
                                        '</tr>'+
                                    '</tbody>'+
                                '</table>'+
                            '</td>'+
                        '</tr>' +
                    '</table>'+
                    '<table style="margin: 0px auto">' +
                        '<caption style=" text-align: left;">Pico do Esforço: Índice de Escore de contratilidade da Parede: <span id="esf">0 (Não Verificado)</span> </caption style=" text-align: left;">'+
                        '<tr>'+
                            '<td>'+
                                '<table cellpadding="1" cellspacing="0" style="width:50px;border: 1px solid lightgray; line-height: 12px; margin-left: 50px; margin-right: 50px">'+
                                    '<tbody>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">2</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="28" class="esf edt tabeditable28"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">8</td>'+
                                            '<td style = "border:1px solid lightgray"><div  tabindex="29" class="esf edt tabeditable29"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">14</td>'+
                                            '<td style = "border:1px solid lightgray"><div  tabindex="30" class="esf edt tabeditable30"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">17</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="31" class="esf edt tabeditable31"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #f0b551; font-weight: bolder;width: 20px;">16</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="32" class="esf edt tabeditable32"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #f0b551; font-weight: bolder;width: 20px;">11</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="33" class="esf edt tabeditable33"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #f0b551; font-weight: bolder;width: 20px;">5</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="34" class="esf edt tabeditable34"></div></td>'+
                                        '</tr>'+
                                    '</tbody>'+
                                '</table>'+
                            '</td>'+
                            '<td>'+
                                '<table cellpadding="1" cellspacing="0" style="width:50px;border: 1px solid lightgray; line-height: 12px; margin-left: 50px; margin-right: 50px">'+
                                    '<tbody>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">1</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="35" class="esf edt tabeditable35"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">2</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="36" class="esf edt tabeditable36"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #55b658; font-weight: bolder;width: 20px;">3</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="37" class="esf edt tabeditable37"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #55b658; font-weight: bolder;width: 20px;">4</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="38" class="esf edt tabeditable38"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #f0b551; font-weight: bolder;width: 20px;">5</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="39" class="esf edt tabeditable39"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #f0b551; font-weight: bolder;width: 20px;">6</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="40" class="esf edt tabeditable40"></div></td>'+
                                        '</tr>'+
                                    '</tbody>'+
                                '</table>'+
                            '</td>'+
                            '<td>'+
                                '<table cellpadding="1" cellspacing="0" style="width:50px;border: 1px solid lightgray; line-height: 12px; margin-left: 30px; margin-right: 50px">'+
                                    '<tbody>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #55b658; font-weight: bolder;width: 20px;">3</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="41" class="esf edt tabeditable41"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #55b658; font-weight: bolder;width: 20px;">9</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="42" class="esf edt tabeditable42"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">14</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="43" class="esf edt tabeditable43"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">17</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="44" class="esf edt tabeditable44"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #f0b551; font-weight: bolder;width: 20px;">16</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="45" class="esf edt tabeditable45"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #f0b551; font-weight: bolder;width: 20px;">12</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="46" class="esf edt tabeditable46"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #f0b551; font-weight: bolder;width: 20px;">6</td>'+
                                            '<td style = "border:1px solid lightgray"><div  tabindex="47" class="esf edt tabeditable47"></div></td>'+
                                        '</tr>'+
                                    '</tbody>'+
                                '</table>'+
                            '</td>'+
                            '<td>'+
                                '<table cellpadding="1" cellspacing="0" style="width:50px;border: 1px solid lightgray; line-height: 12px; margin-left: 14px; margin-right: 50px">'+
                                    '<tbody>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #55b658; font-weight: bolder;width: 20px;">4</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="48" class="esf edt tabeditable48"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #55b658; font-weight: bolder;width: 20px;">10</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="49" class="esf edt tabeditable49"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #55b658; font-weight: bolder;width: 20px;">15</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="50" class="esf edt tabeditable50"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">17</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="51" class="esf edt tabeditable51"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">13</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="52" class="esf edt tabeditable52"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">7</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="53" class="esf edt tabeditable53"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">1</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="54" class="esf edt tabeditable54"></div></td>'+
                                        '</tr>'+
                                    '</tbody>'+
                                '</table>'+
                            '</td>'+
                        '</tr>' +
                    '</table>'+
                    '<table style="margin: 0px auto">' +
                        '<caption style=" text-align: left;">Recuperação: Índice de Escore de contratilidade da Parede: <span id="rec"> 0 (Não Verificado)</span> </caption style=" text-align: left;">'+
                        '<tr>'+
                            '<td>'+
                                '<table cellpadding="1" cellspacing="0" style="width:50px;border: 1px solid lightgray; line-height: 12px; margin-left: 50px; margin-right: 50px">'+
                                    '<tbody>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">2</td>'+
                                            '<td style = "border:1px solid lightgray"><div  tabindex="55" class="rec edt tabeditable55"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">8</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="56" class="rec edt tabeditable56"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">14</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="57" class="rec edt tabeditable57"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">17</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="58" class="rec edt tabeditable58"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #f0b551; font-weight: bolder;width: 20px;">16</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="59" class="rec edt tabeditable59"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #f0b551; font-weight: bolder;width: 20px;">11</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="60" class="rec edt tabeditable60"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #f0b551; font-weight: bolder;width: 20px;">5</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="61" class="rec edt tabeditable61"></div></td>'+
                                        '</tr>'+
                                    '</tbody>'+
                                '</table>'+
                            '</td>'+
                            '<td>'+
                                '<table cellpadding="1" cellspacing="0" style="width:50px;border: 1px solid lightgray; line-height: 12px; margin-left: 50px; margin-right: 50px">'+
                                    '<tbody>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">1</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="62" class="rec edt tabeditable62"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">2</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="63" class="rec edt tabeditable63"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #55b658; font-weight: bolder;width: 20px;">3</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="64" class="rec edt tabeditable64"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #55b658; font-weight: bolder;width: 20px;">4</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="65" class="rec edt tabeditable65"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #f0b551; font-weight: bolder;width: 20px;">5</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="66" class="rec edt tabeditable66"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #f0b551; font-weight: bolder;width: 20px;">6</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="67" class="rec edt tabeditable67"></div></td>'+
                                        '</tr>'+
                                    '</tbody>'+
                                '</table>'+
                            '</td>'+
                            '<td>'+
                                '<table cellpadding="1" cellspacing="0" style="width:50px;border: 1px solid lightgray; line-height: 12px; margin-left: 30px; margin-right: 50px">'+
                                    '<tbody>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #55b658; font-weight: bolder;width: 20px;">3</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="68" class="rec edt tabeditable68"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #55b658; font-weight: bolder;width: 20px;">9</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="69" class="rec edt tabeditable69"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">14</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="70" class="rec edt tabeditable70"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">17</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="71" class="rec edt tabeditable71"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #f0b551; font-weight: bolder;width: 20px;">16</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="72" class="rec edt tabeditable72"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #f0b551; font-weight: bolder;width: 20px;">12</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="73" class="rec edt tabeditable73"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #f0b551; font-weight: bolder;width: 20px;">6</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="74" class="rec edt tabeditable74"></div></td>'+
                                        '</tr>'+
                                    '</tbody>'+
                                '</table>'+
                            '</td>'+
                            '<td>'+
                                '<table cellpadding="1" cellspacing="0" style="width:50px;border: 1px solid lightgray; line-height: 12px; margin-left: 14px; margin-right: 50px">'+
                                    '<tbody>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #55b658; font-weight: bolder;width: 20px;">4</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="75" class="rec edt tabeditable75"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #55b658; font-weight: bolder;width: 20px;">10</td>'+
                                            '<td style = "border:1px solid lightgray"><div  tabindex="76" class="rec edt tabeditable76"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #55b658; font-weight: bolder;width: 20px;">15</td>'+
                                            '<td style = "border:1px solid lightgray"><div  tabindex="77" class="rec edt tabeditable77"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">17</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="78" class="rec edt tabeditable78"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">13</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="79" class="rec edt tabeditable79"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">7</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="80" class="rec edt tabeditable80"></div></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style = "border:1px solid lightgray; background-color: #e1303a; font-weight: bolder;width: 20px;">1</td>'+
                                            '<td style = "border:1px solid lightgray"><div tabindex="81" class="rec edt tabeditable81"></div></td>'+
                                        '</tr>'+
                                    '</tbody>'+
                                '</table>'+
                            '</td>'+
                        '</tr>' +
                    '</table>'+
                    '</td>'+
                    '</tr>' +
	                '</table>'+
	                '<p style=" font-size: 10px; "><b>Índice de Contratilidade: </b>0-Não Visualizada &nbsp&nbsp&nbsp 1-Contrat. Normal &nbsp&nbsp&nbsp 2-Hipocinesia &nbsp&nbsp&nbsp 3-Acinesia &nbsp&nbsp&nbsp 4-Dicinesia</p>'+
	                '<p style=" font-size: 10px; "><b>Escore de Contratilidade: </b>1-Valor Normal &nbsp&nbsp&nbsp &gt1 e &lt1,6-Disfunção Discreta &nbsp&nbsp&nbsp &gt1,6 e &lt2,0-Disfunção Moderada &nbsp&nbsp&nbsp &gt2,0-Disfunção Importante</p>'+
	            '</div>',

            editables: _tabeditables(),

            upcast: function( element ) {
                 return element.name == "div" && element.hasClass( 'cardioeco-widget' );
            }
        })
    },
});

//O CKEditor não aceita definir uma classe única para tornar todos os elementos editáveis, por isso cada um precisa ter uma classe única.
function _tabeditables() {
  var tabeditables = {};

  for (var i = 0; i <= 83; i++) {
    tabeditables['tabeditable' + i] = {
      selector: '.tabeditable' + i,
    };
  }
  return tabeditables;
}