import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Magnify from "./component/Magnify";
import Subscribe from "./component/Subscribe";
import CatDetails from "./component/Fake_data/CatDetails";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/magnify" element={<Magnify />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/cats" element={<CatDetails />} />
    </Routes>
  );
}

export default App;
