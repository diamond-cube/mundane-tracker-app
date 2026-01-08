import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainContent from "./components/MainContent";
import Login from "./views/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<MainContent />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
