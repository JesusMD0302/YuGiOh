import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CardPage from "./pages/CardPage";
import InfoPage from "./pages/Info";

function App() {
  
  return (
    <div className="font-montserrat min-h-screen max-h-screen bg-[url('./assets/reactjs.jpg')] bg-cover">
      <Navbar />
      <Routes>
        <Route index element={<InfoPage />} />
        <Route path="/card" element={<CardPage/>} />
      </Routes>
    </div>
  );
}

export default App;
