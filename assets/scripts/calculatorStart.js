function calculatorStart(input = 0, result = 0) {
    functional = document.querySelector('.functional');
    if (!functional.classList.contains('calculator')) {
        document.querySelector('.tack-menu__completed-tasks').classList.remove('tacks');
        document.querySelector('.tack-menu__completed-tasks').classList.add('calculator');
        functional.classList.add('calculator');
        functional.classList.remove('tacks');

        functional.innerHTML = `
				<section class="calculator-dial">
                    <p id="inputCalc" class="input-calculation" >${input}</p>
                    <p class="result-calculation">${result}</p>
                </section>
                <section class="calculator-buttons">
                    <div class="calculator-buttons__container">
                        <bottom id="remove" class="calculator-button gray-button button-remove ">C/AC</bottom>
                        <bottom id="quotes" class="calculator-button gray-button ">( )</bottom>
                        <bottom id="squareRoot" class="calculator-button gray-button ">√</bottom>
                        <bottom id="division" class="calculator-button orange-button">÷</bottom>
                    </div>
                    <div class="calculator-buttons__container">
                        <bottom id="7" class="calculator-button number button-color">7</bottom>
                        <bottom id="8" class="calculator-button number button-color">8</bottom>
                        <bottom id="9" class="calculator-button number button-color">9</bottom>
                        <bottom id="increase" class="calculator-button orange-button">*</bottom>
                    </div>
                    <div class="calculator-buttons__container">
                        <bottom id="4" class="calculator-button number button-color">4</bottom>
                        <bottom id="5" class="calculator-button number button-color">5</bottom>
                        <bottom id="6" class="calculator-button number button-color">6</bottom>
                        <bottom id="subtraction" class="calculator-button orange-button">-</bottom>
                    </div>
                    <div class="calculator-buttons__container">
                        <bottom id="1" class="calculator-button number button-color">1</bottom>
                        <bottom id="2" class="calculator-button number button-color">2</bottom>
                        <bottom id="3" class="calculator-button number button-color">3</bottom>
                        <bottom id="summation" class="calculator-button orange-button">+</bottom>
                    </div>
                    <div class="calculator-buttons__container">
                        <bottom id="0" class="calculator-button digit-zero button-color">0</bottom>
                        <bottom id="point" class="calculator-button button-color">.</bottom>
                        <bottom id="result" class="calculator-button orange-button">=</bottom>
                    </div>
                </section>
	`;
        document.querySelector('.function-button').classList.contains('black');
        document.querySelector('.function-button').classList.contains('black') ? designThemeBlack() : designThemeWhite();

        document.querySelectorAll('.calculator-button').forEach((element) => {
            if (element.id === 'remove') {
                let idTimeout;
                element.addEventListener('pointerdown', () => {
                    idTimeout = setTimeout(() => dialRemove(), 500);
                });
                element.addEventListener('pointerup', () => {
                    clearTimeout(idTimeout);
                });
            }
            element.addEventListener('click', (event) => {
                if (event.target.id == 'remove') dialErase();
                else dialInput(event);
            });
        });
        document.querySelector('#result').addEventListener('click', () => {
            let input = document.querySelector('.input-calculation');
            if (input.textContent === '' || input.textContent === '0') input.textContent = '0';
            else calculations(input);
        });

        document.querySelector('.calculator-dial').addEventListener('input', (event) => {
            console.log(event.clientWidth);
        });
    }
}
calculatorStart();
