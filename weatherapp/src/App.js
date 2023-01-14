import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <SearchBar />
        <WeatherInfo />
      </div>
      
    </div>
  );
}

export default App;
