import Navbar from "./Components/layout/Navbar";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
function App() {
  return (
    <Router>
      {/* <h1>Hello Ankush</h1>
      <Navbar /> */}
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main>Content</main>
      </div>
    </Router>
  );
}

export default App;
