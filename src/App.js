import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Cart, ProductListing, Saved } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/saved" elements={<Saved />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
