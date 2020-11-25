import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import './assets/css/Calculator.css';

import Calculator from './components/calculator/Calculator'

function holaMundo(var1, var2) {
  var dummy = 
  (<div>
    <h1>{var1}, {var2}</h1>
  </div>);

  return dummy;
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
          <section className="components">
            <Calculator/>
          </section>
      </body>
    </div>
  );
}

export default App;
