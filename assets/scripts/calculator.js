const listCalculations = new Set();

(function () {
    document.querySelector('.tack-menu__completed-tasks').addEventListener('click', (event) => {
        event.target.classList.contains('calculator') ? taskStart(listCalculations) : calculatorStart();
    });
})();

function dialInput(element) {
    let input = document.querySelector('.input-calculation');
    if (element.target.classList.contains('number')) {
        input.textContent == '0' ? (input.textContent = '' + element.target.id) : (input.textContent += element.target.id);
    } else {
        switch (element.target.id) {
            case 'quotes':
                console.log('quotes');
                console.log('()');
                quotes(input);
                break;
            case 'division':
                console.log('division');
                console.log('÷');
                changeArithmeticSign(input, '/');

                break;
            case 'increase':
                console.log('increase');
                console.log('*');
                changeArithmeticSign(input, '*');
                break;
            case 'subtraction':
                console.log('subtraction');
                console.log('-');
                changeArithmeticSign(input, '-');
                break;
            case 'summation':
                console.log('summation');
                console.log('+');
                changeArithmeticSign(input, '+');

                break;
            case 'point':
                console.log('point');
                console.log('.');
                changeArithmeticSign(input, '.');
                break;
            case 'result':
                console.log('result');

                break;
            case 'squareRoot':
                console.log('squareRoot');
                console.log('√');
                squareRoot(input);

                break;

            default:
                break;
        }
    }
}

function dialErase() {
    num = document.querySelector('.input-calculation');

    if (num.textContent !== '' && num.textContent !== '0') num.textContent = num.textContent.slice(0, -1);
    if (num.textContent === '') num.textContent = '0';
}
function dialRemove() {
    document.querySelector('.input-calculation').textContent = 0;
    document.querySelector('.result-calculation').textContent = 0;
}

function changeArithmeticSign(input, sign) {
    const isNum = (n) => !isNaN(n);
    expression = input.textContent.slice(-1);
    if (isNum(expression) || expression == ')') {
        input.textContent += sign;
    } else {
        input.textContent = `${input.textContent.slice(0, -1)}${sign}`;
    }
}

function calculations(input) {
    let result = document.querySelector('.result-calculation');

    if (input.textContent === '') input.textContent = '0';
    if (isNaN(input.textContent[0]) && input.textContent[0] !== '√') {
        input.textContent = input.textContent.slice(1);
    } else if (isNaN(input.textContent.slice(-1)) && isNaN(input.textContent.slice(-1) === ')')) {
        input.textContent = input.textContent.slice(0, -1);
    } else if (input.textContent[0] == '0') {
        input.textContent = '';
        result.innerHTML = 0;
    } else if (input.textContent.includes('√')) {
        try {
            result.innerHTML = eval(countSquareRoot(input));
            listCalculations.add(`${input.textContent}:${result.textContent}`);
        } catch (error) {
            result.innerHTML = 'Error';
            console.log(error);
        }
    } else if ((!isNaN(input.textContent.slice(-1)) && !isNaN(input.textContent[0]) && !input.textContent.includes('√')) || !input.textContent.includes('√(') || input.textContent.slice(-1) == ')') {
        try {
            result.innerHTML = eval(input.textContent);
            listCalculations.add(`${input.textContent}:${result.textContent}`);
        } catch (error) {
            result.innerHTML = 'Error';
            console.log(error);
        }
    }
}

function quotes(input) {
    leftQuotes = input.textContent.split('(').length - 1;
    rightQuotes = input.textContent.split(')').length - 1;
    if (isNaN(input.textContent.slice(-1)) && leftQuotes !== rightQuotes) {
        input.textContent = input.textContent.slice(0, -1);
    } else if (input.textContent[0] === '0') {
        input.textContent = '(';
    } else if (isNaN(input.textContent[0]) || (isNaN(input.textContent.slice(-1)) && input.textContent.slice(-1) !== ')') || leftQuotes != rightQuotes) {
        if (leftQuotes === rightQuotes) {
            input.textContent += '(';
        } else {
            input.textContent += ')';
        }
    }
}

function squareRoot(input) {
    if (input.textContent.slice(0) === '0' && input.textContent.slice(-1) !== '√') {
        input.textContent = '√';
    } else if (!isNaN(input.textContent[0]) || input.textContent.slice(-1) !== '√') {
        input.textContent += '√';
    }
}

function countSquareRoot(input) {
    let finalInput = input.textContent;
    if (input.textContent.slice(-1) === '√') input.textContent = input.textContent.slice(0, -1);
    let listInx = [];
    let lastIndex = -1;
    while ((lastIndex = input.textContent.indexOf('√', lastIndex + 1)) !== -1) {
        listInx.push(lastIndex);
    }
    listInx = listInx.sort((a, b) => a - b);

    for (let key of listInx) {
        if (!isNaN(input.textContent[key - 1])) {
            let clause = 0;
            let startIndex = key;
            let endIndex = key;
            while (!isNaN(clause) && startIndex > 0) {
                --startIndex;
                clause = input.textContent.at(startIndex);
                if (isNaN(clause)) ++startIndex;
            }
            frontIndex = input.textContent.slice(startIndex, endIndex);
            indexFinal = countExpression(input, frontIndex, key, startIndex);
        } else if (isNaN(input.textContent[key - 1])) {
            indexFinal = countExpression(input, 1, key, key);
        }
        finalInput = finalInput.replaceAll(indexFinal.at(0), indexFinal.at(1));
    }
    return finalInput;
}

function countExpression(input, frontIndex, key, startSquareRoot) {
    let innerIndex;
    let clause = 0;
    let startIndex = key;
    let endIndex = key;
    if (!isNaN(input.textContent[++key])) {
        while (!isNaN(clause) && endIndex <= input.textContent.length) {
            endIndex++;
            clause = input.textContent.at(endIndex);
        }
        innerIndex = input.textContent.slice(++startIndex, endIndex);
        endSquareRoot = endIndex;
    } else if (input.textContent[key] === '(') {
        if (input.textContent.slice(-1) !== ')') input.textContent += ')';
        while (clause !== ')' && endIndex <= input.textContent.length) {
            ++endIndex;
            clause = input.textContent.at(endIndex);
            console.log(startIndex, endIndex, clause, 'startIndex , endIndex , clause');
            if (isNaN(clause)) ++endIndex;
        }
        innerIndex = input.textContent.slice(startIndex + 2, --endIndex);
        endSquareRoot = ++endIndex;
    }
    viewSquareRoot = input.textContent.slice(startSquareRoot, endSquareRoot);
    result = frontIndex * Math.sqrt(eval(innerIndex));
    return [viewSquareRoot, result];
}

function countSquareRootOut(viewSquareRoot, result) {
    let finalInput = input.textContent.replaceAll(viewSquareRoot, result);
    return finalInput;
}
