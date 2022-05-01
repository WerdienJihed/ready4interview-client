import Navigation from "./components/Navigation";
import Settings from "./pages/Settings";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
