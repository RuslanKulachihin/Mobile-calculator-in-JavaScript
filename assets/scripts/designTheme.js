document.querySelector('.function-button').addEventListener('click', () => {
    designTheme();
});
const designThemeWhite = function () {
    style = document.createElement('style');
    style.innerHTML = `
        .white{
            background: url(assets/img/interactive-buttons/moon-night.svg) 100% / contain no-repeat;
        }
        .tack-menu__completed-tasks{
            background: url(assets/img/interactive-buttons/list-black.svg) 100% / contain no-repeat;

        }
        .container {
            background: rgb(224 227 235);
            color: #1c1b1b;
            border: 3px solid #0d8afc;
        }

        .calculator-dial {
            background: rgb(224 227 235);
            border: 3px solid #0d8afc;
            
        }
        
        .input-calculation {
            background: rgb(224 227 235);
            user-select: none;
        }
        .result-calculation {
            color: #1c1b1b;
            user-select: none;
        }
        .button-color{
            background: rgb(224 192 167);
            box-shadow: 0px 0px 1px 11px rgb(224 192 167);
            user-select: none;
        }
        .gray-button{
            background: rgb(161 171 202);
            box-shadow: 0px 0px 1px 11px rgb(161 171 202); 
            user-select: none;
        }
        .orange-button{
                background: rgba(193, 93, 23, 1);
                box-shadow: 0px 0px 1px 11px rgba(193, 93, 23, 1);
                user-select: none;
        }

        .tack{
            border: 3px solid #0d8afc;
            user-select: none;
        }
        
        .tack__card_numbers{
            border-bottom: 2px solid #0d8afc;
            user-select: none;
        }

        .clear_all {
            
            
            background:rgb(224 227 235) url(assets/img/interactive-buttons/delete-all-black.svg) 100% / contain no-repeat;
           
        
        }
        `;

    document.head.appendChild(style);
};
const designThemeBlack = function () {
    style = document.createElement('style');

    style.innerHTML = `
        .black{
            background: url(assets/img/interactive-buttons/sunny-landscape.svg) 100% / contain no-repeat;
        }

        .tack-menu__completed-tasks{
            background: url(assets/img/interactive-buttons/list-white.svg) 100% / contain no-repeat;
        }

        .container {
            background-color: #1c1b1b;
            color: #ffff;
        }

        .function-button-black {
            
        }

        .calculator-dial {
            border: 3px solid #ffff;
            background: #1c1b1b;
        }
        .input-calculation {
            background: #1c1b1b;
            user-select: none;
        }
        .result-calculation {
            color: #ffff;
        }

        .button-color {
            background: rgb(42, 48, 62, 100%);
            box-shadow: 0px 0px 1px 11px #252b38;
            user-select: none;
        }

        .gray-button {
            background: #545f71;
            box-shadow: 0px 0px 1px 11px rgb(70, 82, 98, 100%);
            user-select: none;
        }

        .orange-button {
            background: #d9781f;
            box-shadow: 0px 0px 1px 11px rgb(221, 115, 47);
            user-select: none;
        }

        .tack{
            border: 3px solid #ffff;
            user-select: none;
        }
        
        .tack__card_numbers{
            border-bottom: 2px solid #ffff;
            user-select: none;
        }
        .clear_all {
            background: #1c1b1b url(assets/img/interactive-buttons/delete-all-white.svg) 100% / contain no-repeat;
        }

        `;
    document.head.appendChild(style);
};

function designTheme() {
    event = document.querySelector('.function-button');
    if (event.classList.contains('black')) {
        event.classList.remove('black');
        event.classList.add('white');
        document.head.removeChild(document.head.querySelector('style'));
        designThemeWhite();
    } else if (event.classList.contains('white')) {
        event.classList.remove('white');
        event.classList.add('black');
        document.head.removeChild(document.head.querySelector('style'));
        designThemeBlack();
    }
}
