import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <SearchBar />
      </div>
      
    </div>
  );
}

export default App;
