import React, {Component} from 'react';

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            display: "0"
        }
    }

    getButton(element) {
        return (
            <button onClick={() => this.handleNumberClick({element})}>{element}</button>
        );
    }

    handleNumberClick(value) {
        if (this.state.display === "0") {
            this.setState({display: value});
        } else {
            this.setState({display: this.state.display.toString().concat(value)});
        }
    }

    handleOperatorClick(value) {
        if (value === "x") {
            value = "*";
        }
        if (this.state.display === "0" && (value == "(")) {
            this.setState({display: value});
            return;
        } else if (this.state.display === "0" && (value == ")")) {
            return;
        }
        
        this.setState({display: this.state.display.toString().concat(value)});
    }

    isValidExpression(expression) {
        try {
            eval(expression);
            return true;
        } catch(exception) {
            return false;
        }
    }

    clear() {
        this.setState({display: "0"});
    }

    showErrorAndReset(msg) {
        this.setState({display: "0"});
        alert("error: " + msg);
    }

    calculate() {

        if (this.isValidExpression(this.state.display)) {
            var result = eval(this.state.display);
            if (result == "Infinity") {
                this.showErrorAndReset("Division by zero");
            } else {
                this.setState({display: result});
            }
        } else {
            this.showErrorAndReset("Expression is not valid");
        }
       
    }

    getCalculatorUI() {
        return (
            <table className="calculator-body">
                <tr>
                    <td className="calculation-result" colspan="4">{this.state.display}</td>
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
                    <td colspan="1"><button onClick={() => this.clear()}>CE</button></td>
                    <td colspan="1"><button onClick={() => this.handleOperatorClick('.')}>.</button></td>
                    <td colspan="2"><button onClick={() => this.calculate()}>=</button></td>
                </tr>
            </table>
        );
    }
    
    render() {
        return (
            <div>
                <h1></h1>
                {this.getCalculatorUI()}
            </div>
        );
    }
}

export default Calculator;