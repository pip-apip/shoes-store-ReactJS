import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './page/Navbar';
import Table from './page/Table';
import AddShoes from "./page/AddShoes";
import EditShoes from "./page/EditShoes";
import Home from "./page/Home";
import AllShoes from "./page/AllShoes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/manage-shoes" element={<Table />} />
          <Route path="/all-shoes" element={<AllShoes />} />
          <Route path="/tambah-shoes" element={<AddShoes />} />
          <Route path="/edit-shoes/:id" element={<EditShoes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
