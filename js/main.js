const els = {
    textEditor: null,
    btnTextCenter: null,
    btnTextLeft: null,
    btnTextRight: null,
    colors: null,
    fonts: null,
    btnBold: null,
    btnItalic: null
};

let isBold = false;
let isItalic = false;


const init = () => {
    els.textEditor = document.querySelector('.text-editor');
    els.btnTextCenter = document.querySelector('.btn-text-center');
    els.btnTextLeft = document.querySelector('.btn-text-left');
    els.btnTextRight = document.querySelector('.btn-text-right');
    els.colors = document.querySelector('.colors');
    els.fonts = document.querySelector('.fonts select');
    els.btnBold = document.querySelector('.btn-bold');
    els.btnItalic = document.querySelector('.btn-italic');

    els.btnTextCenter.addEventListener('click', () => {
        els.textEditor.style.textAlign = 'center';
    });
    els.btnTextLeft.addEventListener('click', () => {
        els.textEditor.style.textAlign = 'left';
    });
    els.btnTextRight.addEventListener('click', () => {
        els.textEditor.style.textAlign = 'right';
    });

    els.colors.addEventListener('click', ({ target }) => {
        if (target.classList.contains('color') === false) {
            // console.log('wrong target, return');
            return;
        }
        // console.log('good target');
        const color = target.dataset.color;
        // console.log('color', color);
        els.textEditor.style.color = color;
    });

    els.fonts.addEventListener('change', ({ target }) => {
        const val = target.value;
        // console.log('val', val);
        els.textEditor.style.fontFamily = `'${val}', sans-serif`;
    });

    els.btnBold.addEventListener('click', () => {
        if (isBold === false) {
            els.textEditor.style.fontWeight = 'bold';
            els.btnBold.classList.add('disabled');
            isBold = true;
        } else {
            els.textEditor.style.fontWeight = 'normal';
            els.btnBold.classList.remove('disabled');
            isBold = false;
        }
    });
    els.btnItalic.addEventListener('click', () => {
        if (isItalic === false) {
            els.textEditor.style.fontStyle = 'italic';
            els.btnItalic.classList.add('disabled');
            isItalic = true;
        } else {
            els.textEditor.style.fontStyle = 'normal';
            els.btnItalic.classList.remove('disabled');
            isItalic = false;
        }
    });
};

window.addEventListener('load', init);