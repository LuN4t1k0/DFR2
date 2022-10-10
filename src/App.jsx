import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppProvider from "./context/AppContext";

function App() {
  return (
    <>
      <AppProvider>
        <Routes>
          <Route path="/"element={""} />
          <Route path="pizza" element={""} />
          <Route path="pizza:id" element={""} />
          <Route path="*" element={""} />
        </Routes>
      </AppProvider>
    </>
  );
}

export default App;
