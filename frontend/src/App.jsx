import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { routes } from "./constants/routes";
import MainContent from "./components/MainContent";
function App() {
  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            element={<MainContent children={route.element} />}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
