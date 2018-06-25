
//Seta o estado dos botões dos widgets
//Caso exista qualquer widget no editor, todos os botões são desabilitados
function setButtonState(editor) {
    cardioWidget = editor.document.getById('cardio-wrapper');
    cardioEcoWidget = editor.document.getById('cardioeco-wrapper');
    cardioCompWidget = editor.document.getById('cardiocomp-wrapper');

    if(cardioWidget || cardioEcoWidget || cardioCompWidget) {
        return CKEDITOR.TRISTATE_DISABLED;
    } else {

        return CKEDITOR.TRISTATE_ENABLED;
    }
}


// Define os valores de referência para os campos dos widgets Ecocardio e Ecocardio Complementar
function setReferenceValues(editor) { 
    patientGender = editor.config.patientGender;
    patientAge = editor.config.patientAge;
    cardioWidget = editor.document.getById('cardio-wrapper');
    cardioCompWidget = editor.document.getById('cardiocomp-wrapper');

    if(cardioWidget) {
        if (patientAge.indexOf('A') > -1 && parseInt(patientAge)> 15) {

            fields = ['refsao', 'refjsn', 'refaa', 'refaesq', 'refddfve', 'refdsfve', 'refeds', 'refedppve','refaae4','refaae2','refvaesc','refvedsc','refvdf','refvsf','reffes','refpec','refmvesc','refmve','referpve'];

            if (patientGender == 'M') {

                adultReferences = ['31 - 37 mm','26 - 32 mm','26 - 34 mm','30 - 40 mm','42 - 58 mm','25 - 40 mm','06 - 10 mm','06 - 10 mm','<= 200 mm','<= 200 mm','16 - 34 mm/m²','22 - 30 mm/m²','62 - 150 ml','21 - 61 ml','52 - 72 %','25 - 43 %','50 - 102 g/m²','96 - 200 g','24 - 42 mmm'];

            } else {

                adultReferences = ['27 - 33 mm', '23 - 29 mm', '23 - 31 mm', '27 - 38 mm', '38 - 52 mm', '22 - 35 mm', '06 - 09 mm', '06 - 09 mm', '<= 200 mm', '<= 200 mm', '16 - 34 mm/m²', '23 -31 mm/m²', '46 - 106 ml', '14 - 42 ml', '54 - 74 %', '27 - 45 %', '44 - 88 g/m²', '66 - 150 g', '22 - 42 mm'];
                
            }

            for (var i = 0; i < fields.length; i++) {
                editor.document.getById(fields[i]).setText(adultReferences[i]);
            }

        } else {

            fields = ['refddfve','refaesq','refeds', 'refedppve'];

            if (patientAge.indexOf('M') > -1) { //Caso Exista a letra M na string de idade, significa que o paciente possui menos de 1 ano

                if(parseInt(patientAge)<=3) {
                    childReferences = ['21,7 mm', '15,7 mm', '4,2 mm', '4,2 mm'];

                } else if(parseInt(patientAge)> 3 && parseInt(patientAge)< 12) {
                    childReferences = ['26,4 mm', '19,2 mm', '4,6 mm', '4,6 mm'];
                }
            } else if(parseInt(patientAge) >= 1 && parseInt(patientAge)<= 2){
                    childReferences = ['30,8 mm', '21,2 mm', '5,6 mm','5,4 mm']
            } else if(parseInt(patientAge) >= 3 && parseInt(patientAge)<= 5){
                    childReferences = ['35,9 mm', '21,0 mm', '5,7 mm', '6,1 mm'];
            } else if(parseInt(patientAge) >= 6 && parseInt(patientAge)<= 10){
                    childReferences = ['39,7 mm','23,4 mm','7,0 mm','7,3 mm'];
            } else if(parseInt(patientAge) >= 11 && parseInt(patientAge)<= 15){
                    childReferences = ['46,3 mm','28,2 mm','7,0 mm','8,8 mm'];
            }

            for (var i = 0; i < fields.length; i++) {
                editor.document.getById(fields[i]).setText(childReferences[i]);
            }
        }
    } else if (cardioCompWidget) {
        if (patientAge.indexOf('A') > -1 && parseInt(patientAge)> 15) {
            fields = ['reffmoe','reffmoa','refvsea','refes','refel','refrea','refmree','reftdm','refpsap','refvci','refvcie','refvvci'];
            if (patientGender == 'M') {
                adultReferences = ['0,6 - 1,0 m/s','0,3 - 0,7 m/s','< 0,5','< 0,06','< 0,08','1,1 - 1,7','> 6','180 +/- 31 ms','35 - 40 mmHg','< 21 mm','colapso espontâneo = 0','> 50 %'];
            } else {
                adultReferences = ['0,6 - 1,0 m/s','0,3 - 0,7 m/s','< 0,5','< 0,06','< 0,08','1,1 - 1,7','> 6','180 +/- 31 ms','35 - 40 mmHg','< 21 mm','colapso espontâneo = 0','> 50 %']
            }

            for (var i = 0; i < fields.length; i++) {
                editor.document.getById(fields[i]).setText(adultReferences[i]);
            }
        }
    }
}

function  initializeEditorEvents(editor) {

    editor.on('afterCommandExec', function(event) {
        var commandName = event.data.name;
        
        if(commandName == 'cardio' || commandName == 'cardiocomp') {
            setReferenceValues(editor);
        }

    });

    editor.on( 'change', function(e) {

        changedElement = editor.document.getActive();

        if (changedElement.hasClass('rep') || changedElement.hasClass('rec') || changedElement.hasClass('esf')) {
            getAverage(changedElement, editor);
        }
        else if(changedElement.hasClass('edt')) {
            makeCalculations(editor, changedElement);
        }
    });

    editor.on( 'key', function( event ) {

        activeElement = editor.document.getActive();

        if ((editor.document.getById('cardio-wrapper') || editor.document.getById('cardioeco-wrapper')|| editor.document.getById('cardiocomp-wrapper')) && activeElement.hasClass('edt')) {
            if (activeElement.hasClass('rep') || activeElement.hasClass('esf') || activeElement.hasClass('rec')) {
                checkCharcount(activeElement,2,event);
            } else if (activeElement.hasClass('cke_widget_editable')){
                checkCharcount(activeElement,5,event);
            }
        } 
         // else if (activeElement.hasClass('cke_editable')) {
         //        checkCharcount(activeElement,10,event);
         // }
    }, null, null, 0);
}

//Cancela os eventos de keyDown caso o elemento editável tenha mais que o número de caracteres permitido
//e caso as teclas não sejam tab, shift + tab, del, as setas ou backspace. Caso a tecla seja Enter ou Tab,
//o foco é movido para o próximo campo.
function checkCharcount(element,charcount, e){

     keycode = e.data.keyCode;

     if(keycode ==13 || keycode == 9) {
        e.cancel();
        element.focusNext();
     }

    if (((element.getText().length >= charcount) && (!(keycode == 8 || keycode == 46 || keycode == 9 || keycode == 2228233|| keycode == 37 || keycode == 38 || keycode == 39 || keycode == 40)))) {
       e.cancel();
    }
}

//Obtém a média de todos os campos do widget Ecocardio com estresse
function getAverage(element, editor) {
    var sum = 0
    var filledItens = 0
    if (element.hasClass('rep')) {
        elementClass = '.rep'
    }
    else if (element.hasClass('esf')) {
        elementClass = '.esf'
    }
    else if (element.hasClass('rec')) {
        elementClass = '.rec'
    }

    elements = editor.document.find(elementClass);

    for (i=0; i< elements.count(); i++) {
        element = parseInt(elements.getItem(i).getText());

        if(!isNaN(element) && element > 0) {
            sum += element;
            filledItens++;
        }
    }

    average = (sum / filledItens).toFixed(2);
    
    if (average == 1)
        average = average + ' (Valor Normal)'
    else if (average > 1.0 && average <= 1.6)
        average = average + ' (Disfunção Discreta)'
    else if (average > 1.6 && average <= 2.0)
        average = average + ' (Disfunção Moderada)'
    else if (average > 2.0)
        average = average + ' (Disfunção Importante)'
    else
        average = '0 (Não Verificado)';

    switch (elementClass) {
        case '.rep':
            editor.document.getById('rep').setText(average);
            break;
        case '.esf':
            editor.document.getById('esf').setText(average);
            break;
        case '.rec':
            editor.document.getById('rec').setText(average);
            break;
    }
}

//Efetua os cálculos de acordo com o elemento que foi alterado nos widgets Ecocardio e Ecocardio Complementar
function makeCalculations(editor, changedElement) {

    elementId = changedElement.getId();

    if (elementId == 'altura' || elementId == 'peso') { //Superfície Corporal (m²)

        sc = editor.document.getById('sc');
        values = getFormattedValues('altura', 'peso');

        if (checkNumeric(values)) {
            result = 0.007184 * (Math.pow(values[0], 0.725)) * (Math.pow(values[1], 0.425));
            sc.setText(truncate(result, 3));
            makeCalculations(editor, sc);
        } else {
            sc. setText(0);
        }
    }

    if (elementId == 'aae4' || elementId == 'aae2' || elementId == 'cae'|| elementId == 'sc') { //Volume do AE / Superfície Corporal

        vaesc = editor.document.getById('vaesc');
        values = getFormattedValues('aae4', 'aae2', 'cae', 'sc');

        if (checkNumeric(values)) {
            result = ((0.85 * ((values[0] * values[1]) / values[2])) / values[3]);
            vaesc.setText(truncate(result, 2));
        } else {
            vaesc. setText(0);
        }
    }

    if (elementId == 'ddfve' || elementId == 'sc') { //VE(d) / Superfície Corporal

        vedsc = editor.document.getById('vedsc');
        values = getFormattedValues('ddfve', 'sc');

        if (checkNumeric(values)) {
            result = values[0] / values[1];
            vedsc.setText(truncate(result, 2));
        } else {
            vedsc. setText(0);
        }
    }

    if (elementId == 'ddfve' || elementId == 'sc') { // VE(d) / Altura

        veda = editor.document.getById('veda');
        values = getFormattedValues('ddfve', 'altura');

        if (checkNumeric(values)) {
            result = (values[0] / values[1]) * 100;
            veda.setText(truncate(result, 2));
        } else {
            veda. setText(0);
        }
    }

    if (elementId == 'ddfve' || elementId == 'sc') { //Volume Diastólico Final /Superficie Corporal

        vdf = editor.document.getById('vdf');
        values = getFormattedValues('ddfve', 'sc');

        if (checkNumeric(values)) {
            result = (((7*values[0]*values[0]*values[0])/(2.4+(values[0]/10)))/1000) / values[1]
            vdf.setText(truncate(result, 2));
        } else {
            vdf. setText(0);
        }
    }

    if (elementId == 'dsfve' || elementId == 'sc') { //Volume Sistólico Final / Superfície Corporal

        vsf = editor.document.getById('vsf');
        values = getFormattedValues('dsfve', 'sc');

        if (checkNumeric(values)) {
            result = (((7*values[0]*values[0]*values[0])/(2.4+(values[0]/10)))/1000) / values[1]
            vsf.setText(truncate(result, 2));
        } else {
            vsf. setText(0);
        }
    }

    if (elementId == 'ddfve' || elementId == 'dsfve') { //Fração de Ejeção (Teicholz)

        fet = editor.document.getById('fet');
        values = getFormattedValues('ddfve', 'dsfve');

        if (checkNumeric(values)) {
            result = (((Math.pow(values[0], 2) - Math.pow(values[1], 2)) / Math.pow(values[0], 2)) * 100) * 1.05;
            fet.setText(truncate(result, 2));
        } else {
            fet. setText(0);
        }
    }

    if (elementId == 'vsf' || elementId == 'dsfve'|| elementId == 'vdf') { //Pecentual Encurtamento Cavidade

        pec = editor.document.getById('pec');
        values = getFormattedValues('ddfve', 'dsfve');

        if (checkNumeric(values)) {
            result = (values[0] - values[1]) * (100 / values[0]);
            pec.setText(truncate(result, 2));
        } else {
            pec. setText(0);
        }
    }

    if (elementId == 'eds' || elementId == 'edppve' || elementId == 'sc'|| elementId == 'ddfve') { //Massa do VE/superficie Corporal

        mvesc = editor.document.getById('mvesc');
        values = getFormattedValues('eds', 'edppve', 'ddfve', 'sc');

        if (checkNumeric(values)) {
            temp = values[0] + values[1] + values[2];
            result = ((0.8 * (1.04 * (Math.pow(temp, 3) - Math.pow(values[2], 3)) + 0.6)) / values[3]) / 1000;
            mvesc.setText(truncate(result, 2));
        } else {
            mvesc. setText(0);
        }
    }

    if (elementId == 'edppve' || elementId == 'vsf'|| elementId == 'ddfve') { //Massa Ventricular Esquerda

        mve = editor.document.getById('mve');
        values = getFormattedValues('eds', 'edppve', 'ddfve');

        if (checkNumeric(values)) {
            result = ((0.8 * (1.04 * (Math.pow(values[0] + values[1] + values[2], 3) - Math.pow(values[2], 3)) + 0.6))) / 1000;
            mve.setText(truncate(result, 2));
        } else {
            mve. setText(0);
        }
    }

    if (elementId == 'edppve' || elementId == 'ddfve') { //Espessura Relativa das Paredes do VE

        erpve = editor.document.getById('erpve');
        values = getFormattedValues('edppve', 'ddfve');

        if (checkNumeric(values)) {
            result = (2 * values[0]) / values[1];
            erpve.setText(truncate(result, 2));
            makeCalculations(editor,erpve);
        } else {
            erpve. setText(0);
        }
    }

    if (elementId == 'erpve' || elementId == 'mvesc') { //Relação ERP e Massa VE i

        rerp = editor.document.getById('rerp');
        patientGender = editor.config.patientGender;
        patientAge = editor.config.patientAge;

        values = getFormattedValues('erpve', 'mvesc');
        
        if(checkNumeric(values)) {
            if(patientGender == 'M'){
                if(values[1] <= 115) {
                    if(values[0] <= 0.42) {
                        rerp.setText('Geometria normal');
                    } else if (values[0] > 0.42) {
                        rerp.setText('Remodelamento Concêntrico');
                    }
                } else {
                    if(values[0] <= 0.42) {
                        rerp.setText('Hipertrofia Excêntrica');
                    } else if (values[0] > 0.42) {
                        rerp.setText('Hipertrofia Concêntrica');
                    }
                }
            } else {
                if(values[1] <= 95) {
                    if(values[0] <= 0.42) {
                        rerp.setText('Geometria normal');
                    } else if (values[0] > 0.42) {
                        rerp.setText('Remodelamento Concêntrico');
                    }
                } else {
                    if(values[0] <= 0.42) {
                        rerp.setText('Hipertrofia Excêntrica');
                    } else if (values[0] > 0.42) {
                        rerp.setText('Hipertrofia Concêntrica');
                    }
                }
            }
        }
    }

    if (elementId == 'fmoe' || elementId == 'fmoa') { //Relação E / A

        rea = editor.document.getById('rea');
        values = getFormattedValues('fmoe', 'fmoa');

        if (checkNumeric(values)) {
            result = values[0] / values[1];
            rea.setText(truncate(result, 2));
        } else {
            rea. setText(0);
        }
    }

    if (elementId == 'fmoe' || elementId == 'es' || elementId == 'el') { //Média Rel E / e'

        mree = editor.document.getById('mree');
        values = getFormattedValues('fmoe', 'es', 'el');

        if (checkNumeric(values)) {
            result = values[0] / ((values[1] + values[2]) / 2);
            mree.setText(truncate(result, 2));
        } else {
            mree. setText(0);
        }
    }

    if (elementId == 'vci' || elementId == 'vcie') { //Variação da Veia Cava Inferior

        vvci = editor.document.getById('vvci');
        values = getFormattedValues('vci', 'vcie');

        if (checkNumeric(values)) {
            result = (values[0] - values[1]) / values[1];
            if (result > 100) //Caso a divisão seja por 0, o resultado tende a infinito, então esse caso é tratado manualmente.
                result = 100;
            vvci.setText(truncate(result, 2));
        } else {
            vvci. setText(0);
        }
    }
}

//Transforma o valor de determinado campo do CKEditor em um valor float válido
//Devem ser passados como argumentos todos os ids dos campos dos quais se quer os valores
function getFormattedValues() {
    editor = CKEDITOR.instances.workflow;
    values = []
    for (var i = 0; i < arguments.length; i++) {
        value = editor.document.getById(arguments[i]).getText();
        values[i] = value.match(/[a-z]/i) ? '' : parseFloat(value.replace(',', '.'));
    }
    return values;
}

//Deixa todos os resultados com o numero de casas decimais especificado. Caso o resultado não seja numérico, retorna 0.
function truncate(numToBeTruncated, numOfDecimals) {
    var number = numToBeTruncated.toString();
    var pointIndex = number.indexOf('.');
    var truncatedNumber = +(number.slice(0, pointIndex > -1 ? ++numOfDecimals + pointIndex : undefined));
    if ($.isNumeric(truncatedNumber)) {
        return truncatedNumber;
    } else {
        return 0;
    }
}

//Checa se todos os argumentos passados são números(evita ter que ficar chamado isNumeric para todos os elementos manualmente)
function checkNumeric(values) {
    for (var i = 0; i < values.length; i++) {
        if (!$.isNumeric(values[i])) { console.log($.isNumeric(values[i]));
            return false;
        }
    }
    return true;
}