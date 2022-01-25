import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./views/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCanal from "./views/addCanal/AddCanal";
import UpdateCanal from "./views/updateCanal/UpdateCanal";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addCanal" element={<AddCanal />} />
            <Route path="/updateCanal/:id" element={<UpdateCanal />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
