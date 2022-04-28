import './App.css';
import Quiz from './Quiz'

function App() {
  return (
    <div className="App">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
        <div><Quiz /></div>
        <div><Quiz /></div>
      </div>
    </div>
  );
}

export default App;
