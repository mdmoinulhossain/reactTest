import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Magnify from "./component/Magnify";
import Subscribe from "./component/Subscribe";
import CatDetails from "./component/Fake_data/CatDetails";
import ContactUs from "./component/ContactUs/ContactUs";
import MultyDropdown from "./component/MultyDropdown/Dropdown";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/magnify" element={<Magnify />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/cats" element={<CatDetails />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/menus" element={<MultyDropdown />} />
    </Routes>
  );
}

export default App;
