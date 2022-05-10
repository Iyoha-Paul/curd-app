import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/NewItem";
import Home from "./pages/Home";
import Item from "./pages/Item";
import Update from "./pages/Update";
import NewItem from "./pages/NewItem";
import NotFound from "./pages/NotFound";
//  basename={window.location.pathname || ""}
function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ""}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newItem" element={<NewItem />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/item/:id" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
