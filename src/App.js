import Navigation from "./components/Navigation";
import SettingsPage from "./pages/SettingsPage";
import QuizzesPage from "./pages/QuizzesPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/quiz" element={<QuizzesPage />} />
      </Routes>
    </div>
  );
}

export default App;
