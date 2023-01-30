import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        {/* <SearchBar /> */}
        <WeatherInfo />
      </div>
      <div className="navbar">
       
              <div className="navbar-content">
                Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
              </div>
      </div>
    </div>
  );
}

export default App;
