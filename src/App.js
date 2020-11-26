import './assets/css/App.css';
import './assets/css/Calculator.css';
import logo from './assets/img/logo.svg';

import Calculator from './components/calculator/Calculator'

function App() {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </head>

      <body>
        <header>
          <div class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container d-flex justify-content-between">
              <a href="#" class="navbar-brand d-flex align-items-center">
                <svg width="30px" height="30px" viewBox="0 0 16 16" class="bi bi-calculator-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2 .5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM4 12.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zM7.5 6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM7 9.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm.5 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM10 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm.5 2.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-1z" />
                </svg>
              </a>
            </div>
          </div>
        </header>

        <main role="main">

          <section class="jumbotron text-center">
            <div class="container">
              <h1>A simple calculator below</h1>
              <p class="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>
                <a href="#" class="btn btn-primary my-2">Thats great. I want more calculators</a>
              </p>
            </div>
          </section>


          <div class="album py-5 bg-light">
            <div class="container">
              <div class="row">                
                <div class="col-md-4">
                  <div class="card mb-4 shadow-sm">
                    <section className="components">
                      <Calculator />
                    </section>
                  </div>
                </div>
            
              </div>
            </div>
          </div>
        </main>

        <footer class="text-muted">
          <div class="container">
            <p class="float-right">
              <a href="#">Back to top</a>
            </p>
            <p>New to Bootstrap? <a href="https://getbootstrap.com/">Visit the homepage</a> or read our <a href="/docs/4.5/getting-started/introduction/">getting started guide</a>.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

export default App;
