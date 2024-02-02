import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Monitoring from "./source/Monitoring";
import FormCase from "./source/FormCase";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container-fluid mt-5">
          <div className="inquiry">
            <div className="mt-5">
              <FormCase/>
            </div>
            <div className="mt-5">
              {/* bisa filter transaction, cardno, status, range (transaction date) */}
              <Monitoring />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
