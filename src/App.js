import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>FSR kleurtest</h1>
      <p class="hint">
        Open deze pagina in Chrome of Edge. Sluit eerst de Serial Monitor én de
        Serial Plotter in Arduino.
      </p>

      <button id="connect">Verbind met ESP32</button>
      <p id="status">Niet verbonden</p>

      <div id="sensors"></div>
      <div class="legend" id="legend"></div>
    </div>
  );
}

export default App;
