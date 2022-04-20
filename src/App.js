import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Magnify from "./component/Magnify";
import Subscribe from "./component/Subscribe";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/magnify" element={<Magnify />} />
      <Route path="/subscribe" element={<Subscribe />} />
    </Routes>
  );
}

export default App;
