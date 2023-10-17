import { ItemDetailContainer } from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer />}>
          {" "}
        </Route>
        <Route path="/item" element={<ItemDetailContainer itemId={2} />}>
          {" "}
        </Route>
        <Route path="/nosotros" element={<Nosotros />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
