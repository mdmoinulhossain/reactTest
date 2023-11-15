import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Magnify from "./component/Magnify";
import Subscribe from "./component/Subscribe";
import CatDetails from "./component/Fake_data/CatDetails";
import ContactUs from "./component/ContactUs/ContactUs";
import MultyDropdown from "./component/MultyDropdown/Dropdown";
import Webmail from "./component/Webmail/Webmail";
import Coverflow from "./component/Coverflow/Coverflow";
import EyeOff from "./component/ReactIconKit/EyeOff";
import Filter from "./component/Filter-data/Filter";
import Parameter from "./component/UseParam/Parameter";
import GetParameter from "./component/UseParam/GetParameter";

// import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";
import Design1 from "./component/Raw-design/DesignA";
import Student from "./component/CRUD/Student";
import LoadMore from "./component/LoadMore/LoadMore";

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
        <Route path="/input_eye" element={<EyeOff />} />
        <Route path="/filter-data" element={<Filter />} />
        <Route path="/crud" element={<Student />} />
        <Route path="/url-data" element={<Parameter />} />
        {/* get Data from url */}
        <Route path="/url/:getData" element={<GetParameter />} />
        {/* if no parameter found */}
        <Route path="/url" element={<GetParameter />} />

        <Route path="/design1" element={<Design1 />} />
        <Route path="/loadmore" element={<LoadMore />} />
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
