import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MovieBoxes from "./components/MovieBoxes";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <MovieBoxes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
