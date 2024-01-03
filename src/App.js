import Navbar from "./components/Navbar";

function App() {
  const appName = "postmaster"
  return (
    <div className="App">
      <header className="App-header">
        <Navbar appName={appName} />
      </header>
    </div>
  );
}

export default App;
