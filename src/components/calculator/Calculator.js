import Draggable from '../draggable/Draggable'

import '../../assets/css/Calculator.css';

class Calculator extends Draggable {

    constructor(props) {
        super(props);
        this.state = {
            display: "0",
            previousExpression: "0",
            calculateButtonPressed: "false",
            pos: {x:0,y:0} // parent definition of this attribute is not working             
        };
    }

    getButton(element) {
        return (
            <button onClick={() => this.handleNumberClick({ element })}>{element}</button>
        );
    }

    handleNumberClick(value) {
        if (this.state.display === "0" || this.state.calculateButtonPressed === "true") {
            this.setState({ display: value, calculateButtonPressed: "false", previousExpression: "0" });
        } else {
            this.setState({ display: this.state.display.toString().concat(value) });
        }
    }

    handleOperatorClick(value) {
        var lastCharacter = this.state.display.toString().charAt(this.state.display.toString().length - 1);
        
        if (value === "x") {
            value = "*";
        }

        // if last character is a dot but coming character is not a number, we concatenate a zero
       if ((lastCharacter === ".") && (!this.isNumber(value))) {
           value = "0" + value;
       }

       this.setState({ display: this.state.display.toString().concat(value), calculateButtonPressed: "false", previousExpression: "0" });
    }

    isNumber(value) {
        return !this.isOperator(value) && (value !== ".") && !this.isParentesis(value);
    }

    isParentesis(value) {
        return (value === "(" || value === ")" ? true : false);
    }

    isOperator(value) {
        return (value === "+" || value === "-" || value === "*" || value === "/" ? true : false);
    }

    lastCharacterIs(expression, value) {
        var lastCharacter = expression.toString().charAt(expression.length-1);
        return (lastCharacter === value ? true : false);
    }

    clear() {
        this.setState(() => ({
            display: "0", calculateButtonPressed: "false"
        }));
    }

    isValidExpression(expression) {
        try {
            eval(expression);
            return true;
        } catch (exception) {
            return false;
        }
    }

    showErrorAndReset(msg) {
        this.setState({ display: "0", calculateButtonPressed: "false" });
        alert("error: " + msg);
    }

    calculate() {

        if (this.isValidExpression(this.state.display)) {
            var result = eval(this.state.display);
            if (result.toString().indexOf("Infinity") > -1) {
                this.showErrorAndReset("Division by zero");
            } else {
                this.setState({ display: result, calculateButtonPressed: "true", previousExpression: this.state.display + " ="});
            }
        } else {
            this.showErrorAndReset("Expression is not valid");
        }

    }

    getCalculatorUIBootstrap() {
        return (
            <div className="calculator-container">
                <div className="container calculator-body card mb-4 shadow-sm" 
                ref={this.myRef} onMouseDown={this.onMouseDown} 
                style={{ position: 'absolute', left: this.state.pos.x + 'px', top: this.state.pos.y + 'px' }}>
                    <div className="row">
                        <div className="col">
                            <p className="calculation-previous-expression" colSpan="4">{this.state.previousExpression}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="calculation-result" colSpan="4">{this.state.display}</p>
                        </div>
                    </div>
                    <div className="row calc-row-margin-top">
                        <div className="col">
                            <button type="button" className="btn btn-block btn-outline-secondary" onClick={() => this.handleNumberClick('7')}>7</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-block btn-outline-secondary" onClick={() => this.handleNumberClick('8')}>8</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-block btn-outline-secondary" onClick={() => this.handleNumberClick('9')}>9</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-block btn-outline-primary" onClick={() => this.handleOperatorClick('+')}>+</button>
                        </div>
                    </div>
                    <div className="row calc-row-margin-top">
                        <div className="col">
                            <button type="button" className="btn btn-block btn-outline-secondary" onClick={() => this.handleNumberClick('4')}>4</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-block btn-outline-secondary" onClick={() => this.handleNumberClick('5')}>5</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-block btn-outline-secondary" onClick={() => this.handleNumberClick('6')}>6</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-block btn-outline-primary" onClick={() => this.handleOperatorClick('-')}>-</button>
                        </div>
                    </div>
                    <div className="row calc-row-margin-top">
                        <div className="col">
                            <button type="button" className="btn btn-block btn-outline-secondary" onClick={() => this.handleNumberClick('1')}>1</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-block btn-outline-secondary" onClick={() => this.handleNumberClick('2')}>2</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-block btn-outline-secondary" onClick={() => this.handleNumberClick('3')}>3</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-block btn-outline-primary" onClick={() => this.handleOperatorClick('x')}>x</button>
                        </div>
                    </div>
                    <div className="row calc-row-margin-top">
                        <div className="col">
                            <button type="button" className="btn btn-block btn-outline-secondary" onClick={() => this.handleOperatorClick('(')}>(</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-block btn-outline-secondary" onClick={() => this.handleNumberClick('0')}>0</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-block btn-outline-secondary" onClick={() => this.handleOperatorClick(')')}>)</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-block btn-outline-primary" onClick={() => this.handleOperatorClick('/')}>/</button>
                        </div>
                    </div>
                    <div className="row calc-row-margin-top">
                        <div className="col">
                            <button type="button" className="btn btn-block btn-outline-warning" onClick={() => this.clear()}>CE</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-block btn-outline-info" onClick={() => this.handleOperatorClick('.')}>.</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-block btn-outline-danger" onClick={() => this.backSpace()}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-backspace-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
                                </svg>
                            </button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-block btn-outline-success" onClick={() => this.calculate()}>=</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    backSpace() {
        var currentDisplay = this.state.display.toString();
        if (currentDisplay === "0") { 
            return;
        } else if (this.isParentesis(currentDisplay) || this.isOperator(currentDisplay) || currentDisplay.length === 1) {
            this.setState({ display: "0" });
            return;
        }
        this.setState({ display: currentDisplay.substring(0, currentDisplay.length - 1) });
    }

    getCalculatorHTML() {
        return (
            <div>
                <table className="calculator-body">
                    <tbody>
                        <tr>
                            <td className="calculation-previous-expression" colSpan="4">{this.state.previousExpression}</td>
                        </tr>
                        <tr>
                            <td className="calculation-result" colSpan="4">{this.state.display}</td>
                        </tr>
                        <tr>
                            <td><button onClick={() => this.handleNumberClick('7')}>7</button></td>
                            <td><button onClick={() => this.handleNumberClick('8')}>8</button></td>
                            <td><button onClick={() => this.handleNumberClick('9')}>9</button></td>
                            <td><button onClick={() => this.handleOperatorClick('+')}>+</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => this.handleNumberClick('4')}>4</button></td>
                            <td><button onClick={() => this.handleNumberClick('5')}>5</button></td>
                            <td><button onClick={() => this.handleNumberClick('6')}>6</button></td>
                            <td><button onClick={() => this.handleOperatorClick('-')}>-</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => this.handleNumberClick('1')}>1</button></td>
                            <td><button onClick={() => this.handleNumberClick('2')}>2</button></td>
                            <td><button onClick={() => this.handleNumberClick('3')}>3</button></td>
                            <td><button onClick={() => this.handleOperatorClick('x')}>x</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => this.handleOperatorClick('(')}>(</button></td>
                            <td><button onClick={() => this.handleNumberClick('0')}>0</button></td>
                            <td><button onClick={() => this.handleOperatorClick(')')}>)</button></td>
                            <td><button onClick={() => this.handleOperatorClick('/')}>/</button></td>
                        </tr>
                        <tr>
                            <td colSpan="1"><button onClick={() => this.clear()}>CE</button></td>
                            <td colSpan="1"><button onClick={() => this.handleOperatorClick('.')}>.</button></td>
                            <td colSpan="2"><button onClick={() => this.calculate()}>=</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.getCalculatorUIBootstrap()}
            </div>
        );
    }
}

export default Calculator;