
// Seta o estado dos botões dos widgets
// Caso exista qualquer widget no editor, todos os botões são desabilitados
function setButtonState(editor) {
    cardioWidget = editor.document.getById('cardio-wrapper');
    cardioEcoWidget = editor.document.getById('cardioeco-wrapper');
    cardioCompWidget = editor.document.getById('cardiocomp-wrapper');

    if (cardioWidget || cardioEcoWidget || cardioCompWidget) {
        return CKEDITOR.TRISTATE_DISABLED;
    } else {

        return CKEDITOR.TRISTATE_ENABLED;
    }
}

// Define os valores de referência para os campos dos widgets Ecocardio e Ecocardio Complementar
function setReferenceValues(editor) {
    patientGender = editor.config.patientGender;
    patientAge = editor.config.patientAge;

    if(patientGender != '' && patientAge != '') {
        cardioWidget = editor.document.getById('cardio-wrapper');
        cardioCompWidget = editor.document.getById('cardiocomp-wrapper');

        if (cardioWidget) {
            if (parseInt(patientAge) > 15) {

                if (patientGender == 'M') {

                    references = {
                         refsao: '31 - 37 mm',
                         refjsn: '26 - 32 mm',
                         refaa: '26 - 34 mm',
                         refaesq: '30 - 40 mm',
                         refdbvd: '25 - 41 mm',
                         refdpvsvd: '20 - 30 mm',
                         refddfve: '42 - 58 mm',
                         refdsfve: '25 - 40 mm',
                         refeds: '06 - 10 mm',
                         refedppve: '06 - 10 mm',
                         refvaesc: '16 - 34 ml/m²',
                         refddfvesc: '22 - 30 mm/m²',
                         refdsfvesc: '13 - 21 mm/m²',
                         refvdf: '62 - 150 ml',
                         refvsf: '21 - 61 ml',
                         refvsfsc: '11 - 31 ml/m²',
                         refvdfsc: '34 - 74 ml/m²',
                         reffes: '52 - 72 %',
                         reffet: '52 - 72 %',
                         refpec: '25 - 43 %',
                         refmvesc: '45 - 115 g/m²',
                         refmve: '96 - 200 g',
                         referpve: '0,24 - 0,42 mm'
                    };
                } else {

                    references = {
                         refsao: '27 - 33 mm',
                         refjsn: '23 - 29 mm',
                         refaa: '23 - 31 mm',
                         refaesq: '27 - 38 mm',
                         refdbvd: '25 - 41 mm',
                         refdpvsvd: '20 - 30 mm',
                         refddfve: '38 - 52 mm',
                         refdsfve: '22 - 35 mm',
                         refeds: '06 - 09 mm',
                         refedppve: '06 - 09 mm',
                         refvaesc: '16 - 34 ml/m²',
                         refddfvesc: '23 -31 mm/m²',
                         refdsfvesc: '13 - 21 mm/m²',
                         refvdf: '46 - 106 ml',
                         refvsf: '14 - 42 ml',
                         refvsfsc: '8 - 24 ml/m²',
                         refvdfsc: '29-61 ml/m²',
                         reffes: '54 - 74 %',
                         reffet: '52 - 72 %',
                         refpec: '27 - 45 %',
                         refmvesc:'43 - 95 g/m²' ,
                         refmve: '66 - 150 g',
                         referpve: '0,22 - 0,42 mm'
                    };
                }

            } else {

                if (parseInt(patientAge) < 1) {
                    if (parseInt(patientAge) <= 3) {

                        references = {
                            refddfve:'21,7 mm',
                            refaesq:'15,7 mm',
                            refeds:'4,2 mm',
                            refedppve:'4,2 mm'
                        }
                    } else if (parseInt(patientAge) > 3 && parseInt(patientAge) < 12) {

                        references = {
                            refddfve:'26,4 mm',
                            refaesq:'19,2 mm',
                            refeds:'4,6 mm',
                            refedppve:'4,6 mm'
                        }
                    }
                } else if (parseInt(patientAge) >= 1 && parseInt(patientAge) <= 2) {

                    references = {
                        refddfve:'30,8 mm',
                        refaesq:'21,2 mm',
                        refeds:'5,6 mm',
                        refedppve:'5,4 mm'
                    }

                } else if (parseInt(patientAge) >= 3 && parseInt(patientAge) <= 5) {

                    references = {
                        refddfve:'35,9 mm',
                        refaesq:'21,0 mm',
                        refeds:'5,7 mm',
                        refedppve:'6,1 mm',
                    }

                } else if (parseInt(patientAge) >= 6 && parseInt(patientAge) <= 10) {

                    references = {
                        refddfve:'39,7 mm',
                        refaesq:'23,4 mm',
                        refeds:'7,0 mm',
                        refedppve:'7,3 mm',
                    }

                } else if (parseInt(patientAge) >= 11 && parseInt(patientAge) <= 15) {

                    references = {
                        refddfve:'46,3 mm',
                        refaesq:'28,2 mm',
                        refeds:'8,8 mm',
                        refedppve:'8,8 mm',
                    }

                }
            }

            for (var key in references) {
                field = editor.document.getById(key);

                if(field)
                    text = field.getText();
                    if(!text.replace(/^\s+/g, '').length)
                        field.setText(references[key]);
            }

        } else if (cardioCompWidget) {
            if (parseInt(patientAge) > 15) {

                if (patientGender == 'M') {

                references = {
                    reffmoe: '0,6 - 1,0 m/s',
                    reffmoa: '0,3 - 0,7 m/s',
                    refvsea: '< 0,5',
                    refes: '< 0,06',
                    refel: '< 0,08',
                    refrea: '1,1 - 1,7',
                    refmree: '> 6',
                    reftdm: '180 +/- 31 ms',
                    refpsap: '35 - 40 mmHg',
                    refpead: '<5 mmHg',
                    refvci: '< 21 mm',
                    refvcie: 'colapso espontâneo = 0',
                    refvvci: '> 50 %'

                };

                } else {

                    references = {
                        reffmoe: '0,6 - 1,0 m/s',
                        reffmoa: '0,3 - 0,7 m/s',
                        refvsea: '< 0,5',
                        refes: '< 0,06',
                        refel: '< 0,08',
                        refrea: '1,1 - 1,7',
                        refmree: '> 6',
                        reftdm: '180 +/- 31 ms',
                        refpsap: '35 - 40 mmHg',
                        refpead: '<5 mmHg',
                        refvci: '< 21 mm',
                        refvcie: 'colapso espontâneo = 0',
                        refvvci: '> 50 %'

                    };

                }
            }

            for (var key in references) {
                field = editor.document.getById(key);

                if(field)
                    text = field.getText();
                    if(!text.replace(/^\s+/g, '').length)
                        field.setText(references[key]);
            }
	    }

    }
}

// Inicializa os eventos escutados pelo CKEditor
function initializeEditorEvents(editor) {

    // Caso o widget venha de um modelo com texto, é necessário preencher os valores de referência assim que o editor é carregado.
    if (CKEDITOR.instances.workflow){
        setReferenceValues(editor);
    }

    // Sempre que um widget é inserido, preenche os valores de referência adequados.
    editor.on('afterCommandExec', function (event) {
        var commandName = event.data.name;

        if (commandName == 'cardio' || commandName == 'cardiocomp') {
            setReferenceValues(editor);
        }
    });

    editor.on('change', function (e) {
        changedElement = editor.document.getActive();

        if (changedElement.hasClass('rep') || changedElement.hasClass('rec') || changedElement.hasClass('esf')) {
            getAverage(changedElement, editor);
        } else if (changedElement.hasClass('edt')) {
            makeCalculations(editor, changedElement);
        }

    });

    editor.on('key', function (event) {
        activeElement = editor.document.getActive();

        if ((editor.document.getById('cardio-wrapper') || editor.document.getById('cardioeco-wrapper') ||
                editor.document.getById('cardiocomp-wrapper')) && activeElement.hasClass('edt')) {
            if(activeElement.hasClass('refeditable')) {
                checkCharcount(activeElement, 30, event);
            } else if (activeElement.hasClass('rep') || activeElement.hasClass('esf') || activeElement.hasClass('rec')) {
                checkCharcount(activeElement, 2, event);
            } else if (activeElement.hasClass('cke_widget_editable')) {
                checkCharcount(activeElement, 5, event);
            }
        }

		setTimeout(function(){ editor.fire('change');}, 100); //Corrige o bug do autosave não guardar a ultima informação editada

    }, null, null, 0);
}

// Cancela os eventos de keyDown caso o elemento editável tenha mais que o número de caracteres permitido
// e caso as teclas não sejam tab, shift + tab, del, as setas ou backspace. Caso a tecla seja Enter ou Tab,
// o foco é movido para o próximo campo.
function checkCharcount(element, charcount, e) {
    keycode = e.data.keyCode;

    if (keycode == 13 || keycode == 9) {
        e.cancel();
        if (!element.hasClass('refeditable'))
            element.focusNext();
    }

    if (((element.getText().length >= charcount) && (!(keycode == 8 || keycode == 46 || keycode == 9
            || keycode == 2228233 || keycode == 37 || keycode == 38 || keycode == 39 || keycode == 40)))) {
        e.cancel();
    }
}

// Obtém a média de todos os campos do widget Ecocardio com estresse
function getAverage(element, editor) {
    var sum = 0
    var filledItens = 0

    if (element.hasClass('rep')) {
        elementClass = '.rep'
    } else if (element.hasClass('esf')) {
        elementClass = '.esf'
    } else if (element.hasClass('rec')) {
        elementClass = '.rec'
    }

    elements = editor.document.find(elementClass);

    for (i = 0; i < elements.count(); i++) {
        element = parseInt(elements.getItem(i).getText());

        if (!isNaN(element) && element > 0) {
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

// Efetua os cálculos de acordo com o elemento que foi alterado nos widgets Ecocardio e Ecocardio Complementar
function makeCalculations(editor, changedElement) {
    elementId = changedElement.getId();

    if (elementId == 'altura' || elementId == 'peso') { // Superfície Corporal (m²)

        sc = editor.document.getById('sc');
        values = getFormattedValues('altura', 'peso');

        if (checkNumeric(values)) {
            result = 0.007184 * (Math.pow(values[0], 0.725)) * (Math.pow(values[1], 0.425));
            sc.setText(truncate(result, 2));
            makeCalculations(editor, sc);
        } else {
            sc.setText('-');
        }
    }

    if (elementId == 'vae' || elementId == 'cae' || elementId == 'sc') { // Volume do AE / Superfície Corporal
        vaesc = editor.document.getById('vaesc');
        values = getFormattedValues('vae', 'sc');

        if (checkNumeric(values)) {
            result = values[0] / values[1];
            vaesc.setText(truncate(result, 1));
        } else {
            vaesc.setText('-');
        }
    }

    // if (elementId == 'ddfve' || elementId == 'sc') { // VE(d) / Superfície Corporal
    //     vedsc = editor.document.getById('vedsc');
    //     values = getFormattedValues('ddfve', 'sc');

    //     if (checkNumeric(values)) {
    //         result = values[0] / values[1];
    //         vedsc.setText(truncate(result, 1));
    //     } else {
    //         vedsc.setText('-');
    //     }
    // }

    // if (elementId == 'ddfve' || elementId == 'sc') { // VE(d) / Altura
    //     veda = editor.document.getById('veda');
    //     values = getFormattedValues('ddfve', 'altura');

    //     if (checkNumeric(values)) {
    //         result = (values[0] / values[1]);
    //         veda.setText(truncate(result, 1));
    //     } else {
    //         veda.setText('-');
    //     }
    // }

    if (elementId == 'ddfve') { // Volume Diastólico Final
        vdf = editor.document.getById('vdf');
        values = getFormattedValues('ddfve');

        if (checkNumeric(values)) {
            result = (((7 * values[0] * values[0] * values[0]) / (2.4 + (values[0] / 10))) / 1000);
            vdf.setText(truncate(result, 1));
        } else {
            vdf.setText('-');
        }
    }

    if (elementId == 'dsfve') { // Volume Sistólico Final
        vsf = editor.document.getById('vsf');
        values = getFormattedValues('dsfve');

        if (checkNumeric(values)) {
            result = (((7 * values[0] * values[0] * values[0]) / (2.4 + (values[0] / 10))) / 1000);
            vsf.setText(truncate(result, 1));
        } else {
            vsf.setText('-');
        }
    }

    if (elementId == 'ddfve' || elementId == 'sc') { // Volume Diastólico Final /Superficie Corporal
        vdfsc = editor.document.getById('vdfsc');
        values = getFormattedValues('ddfve', 'sc');

        if (checkNumeric(values)) {
            result = (((7 * values[0] * values[0] * values[0]) / (2.4 + (values[0] / 10))) / 1000) / values[1]
            vdfsc.setText(truncate(result, 1));
        } else {
            vdfsc.setText('-');
        }
    }

    if (elementId == 'vdf') { // Volume Diastólico Final /Superficie Corporal (caso seja alterado o campo Volume Diastólico Final)
        vdfsc = editor.document.getById('vdfsc');
        values = getFormattedValues('vdf', 'sc');

        if (checkNumeric(values)) {
            result = values[0] / values[1]
            vdfsc.setText(truncate(result, 1));
        } else {
            vdfsc.setText('-');
        }
    }

    if (elementId == 'dsfve' || elementId == 'sc' || elementId == 'vsf') { // Volume Sistólico Final / Superfície Corporal
        vsfsc = editor.document.getById('vsfsc');
        values = getFormattedValues('dsfve', 'sc');

        if (checkNumeric(values)) {
            result = (((7 * values[0] * values[0] * values[0]) / (2.4 + (values[0] / 10))) / 1000) / values[1]
            vsfsc.setText(truncate(result, 1));
        } else {
            vsfsc.setText('-');
        }
    }

    if (elementId == 'vsf') { // Volume Sistólico Final /Superficie Corporal (caso seja alterado o campo Volume Sistólico Final)
        vsfsc = editor.document.getById('vsfsc');
        values = getFormattedValues('vsf', 'sc');

        if (checkNumeric(values)) {
            result = values[0] / values[1]
            vsfsc.setText(truncate(result, 1));
        } else {
            vsfsc.setText('-');
        }
    }

    if (elementId == 'ddfve' || elementId == 'sc') { // Diâmetro Diastólico Final do VE / SC
        ddfvesc = editor.document.getById('ddfvesc');
        values = getFormattedValues('ddfve', 'sc');

        if (checkNumeric(values)) {
            result = values[0] / values[1];
            ddfvesc.setText(truncate(result, 1));
        } else {
            ddfvesc.setText('-');
        }
    }

    if (elementId == 'dsfve' || elementId == 'sc') { // Diâmetro Sistólico Final do VE / SC
        dsfvesc = editor.document.getById('dsfvesc');
        values = getFormattedValues('dsfve', 'sc');

        if (checkNumeric(values)) {
            result = values[0] / values[1];
            dsfvesc.setText(truncate(result, 1));
        } else {
            dsfvesc.setText('-');
        }
    }

    if (elementId == 'ddfve' || elementId == 'dsfve') { // Fração de Ejeção (Teicholz)
        fet = editor.document.getById('fet');
        values = getFormattedValues('ddfve', 'dsfve');

        if (checkNumeric(values)) {
            result = ((Math.pow(values[0], 2) - Math.pow(values[1], 2)) / Math.pow(values[0], 2));
            result = 100.0 * (result + (1 - result) * 0.15);
            result = Math.round(result);
            fet.setText(truncate(result, 1));
        } else {
            fet.setText('-');
        }
    }

    if (elementId == 'vsf' || elementId == 'dsfve'|| elementId == 'ddfve' || elementId == 'vdf') { // Pecentual Encurtamento Cavidade
        pec = editor.document.getById('pec');
        values = getFormattedValues('ddfve', 'dsfve');

        if (checkNumeric(values)) {
            result = (values[0] - values[1]) * (100 / values[0]);
            pec.setText(truncate(result, 1));
        } else {
            pec.setText('-');
        }
    }

    if (elementId == 'eds' || elementId == 'edppve' || elementId == 'sc' || elementId == 'ddfve') { // Massa do VE/superficie Corporal
        mvesc = editor.document.getById('mvesc');
        values = getFormattedValues('eds', 'edppve', 'ddfve', 'sc');

        if (checkNumeric(values)) {
            temp = values[0] + values[1] + values[2];
            result = ((0.8 * (1.04 * (Math.pow(temp, 3) - Math.pow(values[2], 3)) + 0.6)) / values[3]) / 1000;
            mvesc.setText(truncate(result, 1));

        } else {
            mvesc.setText('-');
        }
    }

    if (elementId == 'edppve' || elementId == 'vsf' || elementId == 'ddfve') { // Massa Ventricular Esquerda
        mve = editor.document.getById('mve');
        values = getFormattedValues('eds', 'edppve', 'ddfve');

        if (checkNumeric(values)) {
            result = ((0.8 * (1.04 * (Math.pow(values[0] + values[1] + values[2], 3) - Math.pow(values[2], 3)) + 0.6))) / 1000;
            mve.setText(truncate(result, 1));
        } else {
            mve.setText('-');
        }
    }

    if (elementId == 'edppve' || elementId == 'ddfve') { // Espessura Relativa das Paredes do VE
        erpve = editor.document.getById('erpve');
        values = getFormattedValues('edppve', 'ddfve');

        if (checkNumeric(values)) {
            result = (2 * values[0]) / values[1];
            erpve.setText(truncate(result, 2));
            makeCalculations(editor, erpve);
        } else {
            erpve.setText('-');
        }
    }

    if (elementId == 'erpve' || elementId == 'mvesc'|| elementId == 'eds') { // Relação ERP e Massa VE i
        rerp = editor.document.getById('rerp');
        patientGender = editor.config.patientGender;
        patientAge = editor.config.patientAge;

        values = getFormattedValues('erpve', 'mvesc');

        if (checkNumeric(values)) {
            if (patientGender == 'M') {
                if (values[1] <= 115) {
                    if (values[0] <= 0.42) {
                        rerp.setText('Geometria normal');
                    } else if (values[0] > 0.42) {
                        rerp.setText('Remodelamento Concêntrico');
                    }
                } else {
                    if (values[0] <= 0.42) {
                        rerp.setText('Hipertrofia Excêntrica');
                    } else if (values[0] > 0.42) {
                        rerp.setText('Hipertrofia Concêntrica');
                    }
                }
            } else {
                if (values[1] <= 95) {
                    if (values[0] <= 0.42) {
                        rerp.setText('Geometria normal');
                    } else if (values[0] > 0.42) {
                        rerp.setText('Remodelamento Concêntrico');
                    }
                } else {
                    if (values[0] <= 0.42) {
                        rerp.setText('Hipertrofia Excêntrica');
                    } else if (values[0] > 0.42) {
                        rerp.setText('Hipertrofia Concêntrica');
                    }
                }
            }
        } else {
            rerp.setText('-');
        }
    }

    if (elementId == 'fmoe' || elementId == 'fmoa') { // Relação E / A
        rea = editor.document.getById('rea');
        values = getFormattedValues('fmoe', 'fmoa');

        if (checkNumeric(values)) {
            result = values[0] / values[1];
            rea.setText(truncate(result, 1));
        } else {
            rea.setText('-');
        }
    }

    if (elementId == 'fmoe' || elementId == 'es' || elementId == 'el') { // Média Rel E / e'
        mree = editor.document.getById('mree');
        values = getFormattedValues('fmoe', 'es', 'el');

        if (checkNumeric(values)) {
            result = values[0] / ((values[1] + values[2]) / 2);
            mree.setText(truncate(result, 1));
        } else {
            mree.setText('-');
        }
    }

    if (elementId == 'vci' || elementId == 'vcie') { // Variação da Veia Cava Inferior
        vvci = editor.document.getById('vvci');
        values = getFormattedValues('vci', 'vcie');

        if (checkNumeric(values)) {
            result = (values[0] - values[1]) / values[1];
            if (result > 100) //Caso a divisão seja por 0, o resultado tende a infinito, então esse caso é tratado manualmente.
                result = 100;
            vvci.setText(truncate(result, 1));
        } else {
            vvci.setText('-');
        }
    }
}

// Transforma o valor de determinado campo do CKEditor em um valor float válido
// Devem ser passados como argumentos todos os ids dos campos dos quais se quer os valores
function getFormattedValues() {
    editor = CKEDITOR.instances.workflow;
    values = [];

    for (var i = 0; i < arguments.length; i++) {
        value = editor.document.getById(arguments[i]).getText();
        values[i] = value.match(/[a-z]/i) ? '' : parseFloat(value.replace(',', '.'));
    }
    return values;
}

// Deixa todos os resultados com o numero de casas decimais especificado. Caso o resultado não seja numérico, retorna 0.
function truncate(numToBeTruncated, numOfDecimals) {
    var number = numToBeTruncated.toString();
    var pointIndex = number.indexOf('.');
    var truncatedNumber = +(number.slice(0, pointIndex > -1 ? ++numOfDecimals + pointIndex : undefined));

    if ($.isNumeric(truncatedNumber)) {
        return truncatedNumber;
    } else {
        return '-';
    }
}

// Checa se todos os argumentos passados são números(evita ter que ficar chamado isNumeric para todos os elementos manualmente)
function checkNumeric(values) {
    for (var i = 0; i < values.length; i++) {
        if (!$.isNumeric(values[i])) {
            return false;
        }
    }
    return true;
}
