function taskStart(listCalculations) {
    functional = document.querySelector('.functional');

    if (!functional.classList.contains('tacks')) {
        document.querySelector('.tack-menu__completed-tasks').classList.remove('calculator');
        document.querySelector('.tack-menu__completed-tasks').classList.add('tacks');
        functional.classList.add('tacks');
        functional.classList.remove('calculator');
        functional.innerHTML = `
				    <div class="functional__container-tacks"></div>
                    <div class="clear">
                        <button class="clear_all"></button>
                        <p class="clear_subtitle">Удалить все вычисления</p>
                    </div>
	`;
        tack = document.querySelector('.functional__container-tacks');
        if (listCalculations.size <= 0) {
            let container = document.createElement('div');
            container.innerHTML = `
				    <p class="functional__container_subtitle">У вас пока нет вычислений =)</p>
                    
	`;
            tack.appendChild(container);
        } else {
            listCalculations.forEach((calculation) => {
                values = calculation.split(':');
                let container = document.createElement('bottom');
                container.classList.add('tack');
                container.innerHTML = `
                <button class="tack_clear"><img src="assets/img/interactive-buttons/delete.svg" /></button>
                <div class="tack__card">
                    <p class="tack__card_numbers">${values[0]}</p>
                    <p class="tack__card_result">${values[1]}</p>
                </div>
            `;
                tack.appendChild(container);
            });
        }
    }
    document.querySelectorAll('.tack').forEach((element) =>
        element.addEventListener('click', (event) => {
            if (event.target.closest('.tack_clear')) {
                listCalculations.delete(`${event.target.closest('.tack').querySelector('.tack__card_numbers').textContent}:${event.target.closest('.tack').querySelector('.tack__card_result').textContent}`);
                overloadTask(functional);
            } else if (event.target.closest('.tack')) {
                calculatorStart(event.target.closest('.tack').querySelector('.tack__card_numbers').textContent, event.target.closest('.tack').querySelector('.tack__card_result').textContent);
            }
        })
    );
    document.querySelector('.clear_all').addEventListener('click', () => {
        listCalculations.clear();
        overloadTask(functional);
    });
}

function overloadTask(functional) {
    functional.classList.remove('tacks');
    document.querySelectorAll('.tack').forEach((element) => element.remove());
    taskStart(listCalculations);
}
