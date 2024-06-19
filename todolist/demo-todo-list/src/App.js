import "./css/App.css";
import "./css/index.css";
import HomeView from "./components/Home/HomeView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomeView/>
      </header>
    </div>
  );
}

export default App;
