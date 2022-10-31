export class TestGenerator {
    operators = ['+', '-', '*', '/', '&&', '||'];
    operands = [{
        asString: 'null',
        value: null,
    }, {
        asString: 'undefined',
        value: undefined
    }, {
        asString: 'true',
        value: true
    }, {
        asString: 'false',
        value: false
    }];

    constructor() {
        for(let i = 0; i < 10; i++) {
            this.operands.push({ asString: i.toString(), value: i });
            this.operands.push({ asString: `'${i.toString()}'`, value: i.toString() });
        }
    }

    getOperator() {
        return this.operators[Math.floor(Math.random() * this.operators.length)];
    }

    getOperand() {
        return this.operands[Math.floor(Math.random() * this.operands.length)].asString;
    }

    calculateResult(...args) {
        const leftOperand = this.operands.find(o => o.asString === args[0]).value;
        const operator = args[1];
        const rightOperand = this.operands.find(o => o.asString === args[2]).value;
        switch (operator) {
            case '+':
                return leftOperand + rightOperand;
            case '-':
                return leftOperand - rightOperand;
            case '*':
                return leftOperand * rightOperand;
            case '/':
                return leftOperand / rightOperand;
            case '&&':
                return leftOperand && rightOperand;
            case '||':
                return leftOperand || rightOperand;
            default:
                throw 'Unrecognized operator'
        }
    }

    getFromString(value) {
        if(value === '') {
            return '';
        }
        if(value.indexOf("'") === 0) {
            return value.slice(1, value.length - 1);
        }
        let operand = this.operands.find(o => o.asString === value);
        if(operand) {
            return operand.value;
        } else {
            return +value;
        }
    }

    convertToString(value) {
        if(typeof value === 'string') {
            return `'${value}'`
        }
        if(value === null) {
            return 'null'
        }
        return value;
    }
}