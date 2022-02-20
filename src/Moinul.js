import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tree from "./component/Tree";

function Moinul() {
  return (
    <Routes>
      <Route path="/tree" element={<Tree />} />
    </Routes>
  );
}

export default Moinul;
