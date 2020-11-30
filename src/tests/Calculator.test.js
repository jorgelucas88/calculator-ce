import Calculator from '../components/calculator/Calculator';

it('sum numbers', () => {
    const calculator = shallow(<Calculator />);
    var expression = "2+5+3";
    var result = "10";
    calculator.getInstance().state = {display: expression};
    calculator.getInstance().calculate();
    expect(calculator.getInstance().display).toEqual(result);
    expect(calculator.getInstance().previousExpression).toEqual(expression);
});

it('evaluate invalid expression', () => {
    var calculator = new Calculator();
    var invalidExpression = "(1+2(";
    expect(calculator.isValidExpression(invalidExpression)).toBeFalsy();
});

it('evaluate valid expression', () => {
    var calculator = new Calculator();
    var invalidExpression = "(1+2)*(5+3)";
    expect(calculator.isValidExpression(invalidExpression)).toBeTruthy();
});

it('get button', () => {
    var calculator = new Calculator();
    expect(calculator.getButton()).toBeDefined();
})

it('get HTML UI', () => {
    var calculator = new Calculator();
    expect(calculator.getCalculatorHTML()).toBeDefined();
})

it('get Bootstrap UI', () => {
    var calculator = new Calculator();
    expect(calculator.getCalculatorUIBootstrap()).toBeDefined();
})