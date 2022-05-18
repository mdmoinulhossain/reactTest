import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Magnify from "./component/Magnify";
import Subscribe from "./component/Subscribe";
import CatDetails from "./component/Fake_data/CatDetails";
import ContactUs from "./component/ContactUs/ContactUs";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/magnify" element={<Magnify />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/cats" element={<CatDetails />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
