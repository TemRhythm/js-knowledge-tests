import {TestGenerator} from "./test-generator.js";

const numberOfTests = 10;
const body = document.getElementById('tests');

let testGenerator = new TestGenerator();

for(let i = 0; i < numberOfTests; i++) {
    const testDiv = document.createElement('div');
    testDiv.className = 'test';
    const testStringDiv = document.createElement('div');
    const testString = `${testGenerator.getOperand()} ${testGenerator.getOperator()} ${testGenerator.getOperand()}`;
    testStringDiv.append(testString);
    testDiv.append(testStringDiv);
    const input = document.createElement('input');
    input.setAttribute('id', (i + 1).toString());
    testDiv.append(input);
    body.append(testDiv);
}

const checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', () => {
    const tests = document.querySelectorAll('#tests .test');
    for(let test of tests) {
        const expressionParts = test.children[0].textContent.split(' ');
        let result = testGenerator.calculateResult(...expressionParts);
        let stringResult = testGenerator.convertToString(result);
        let resultDiv = test.querySelector('.result') ?? document.createElement('div');
        resultDiv.className = 'result';
        resultDiv.innerText = stringResult;
        let inputValue = testGenerator.getFromString(test.children[1].value);
        resultDiv.style.color = inputValue !== '' && result === inputValue ? 'black' : 'red';
        test.append(resultDiv);
    }
});