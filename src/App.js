import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Magnify from "./component/Magnify";
import Subscribe from "./component/Subscribe";
import CatDetails from "./component/Fake_data/CatDetails";
import ContactUs from "./component/ContactUs/ContactUs";
import MultyDropdown from "./component/MultyDropdown/Dropdown";
import Webmail from "./component/Webmail/Webmail";
import Coverflow from "./component/Coverflow/Coverflow";
// import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/magnify" element={<Magnify />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/cats" element={<CatDetails />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/menus" element={<MultyDropdown />} />
        <Route path="/webmail" element={<Webmail />} />
        <Route path="/coverFlow" element={<Coverflow />} />
      </Routes>
      {/* <div>
        <MessengerCustomerChat
          pageId="248491315296285"
          appId="1083660138985344"
          htmlRef="<html>HI</html>"
        />
      </div> */}
    </>
  );
}

export default App;
