import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Magnify from "./component/Magnify";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/magnify" element={<Magnify />} />
    </Routes>
  );
}

export default App;
