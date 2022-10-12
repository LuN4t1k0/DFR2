import { Route, Routes } from "react-router-dom";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import AppProvider from "./context/AppContext";
import Details from "./pages/Details";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Pizza from "./pages/Pizza";

function App() {
  return (
    <>
      <AppProvider>
        <MyNavBar/>
        <Routes>
          <Route path="/"element={<Home/>} />
          <Route path="pizza" element={<Pizza/>} />
          <Route path="pizza:id" element={<Details/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </AppProvider>
    </>
  );
}

export default App;
