import React, { Component } from 'react';

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            display: "0",
            previousExpression: "0",
            calculateButtonPressed: "false"
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
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
        if (value === "x") {
            value = "*";
        }
        if (this.state.display === "0" && (value === "(")) {
            this.setState({ display: value, calculateButtonPressed: "false" });
            return;
        } else if (this.state.display === "0" && (value === ")")) {
            return;
        } else if (this.state.calculateButtonPressed === "true" && value === ".") {
            if (this.state.display.toString().indexOf(".") > -1) {
                return;
            }
        } else if (value === "." && this.state.display.toString().charAt(this.state.display.length-1) == ".") {
            return;
        }

        this.setState({ display: this.state.display.toString().concat(value), calculateButtonPressed: "false", previousExpression: "0" });
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
                this.setState({ display: result, calculateButtonPressed: "true", previousExpression: this.state.display });
            }
        } else {
            this.showErrorAndReset("Expression is not valid");
        }

    }

    getCalculatorUIBootstrap() {
        return (
            <div className="container calculator-body">
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
                    <div className="col-4">
                        <button type="button" className="btn btn-block btn-outline-warning" onClick={() => this.clear()}>CE</button>
                    </div>
                    <div className="col-4">
                        <button type="button" className="btn btn-block btn-outline-primary" onClick={() => this.handleOperatorClick('.')}>.</button>
                    </div>
                    <div className="col-4">
                        <button type="button" className="btn btn-block btn-outline-primary" onClick={() => this.calculate()}>=</button>
                    </div>
                </div>
            </div>
        );
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