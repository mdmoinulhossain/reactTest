import React from "react";
import { useEffect, useState } from "react";
import Popup from "./Popup";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Header from "./Header";

function Home() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timePopup, setTimePopup] = useState(false);

  // after 10 seconds
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimePopup(true);
  //   }, 10000);
  // }, []);

  // after 3 seconds
  useEffect(() => {
    setTimeout(() => {
      setTimePopup(true);
    }, 3000);
  }, []);

  return (
    <div>
      <Header />
      <main>
        <h1>POP UP</h1>
        <button onClick={() => setButtonPopup(true)}>Open</button>
      </main>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h1>Popup When Click</h1>
        <p>Hello world</p>
      </Popup>
      <Popup trigger={timePopup} setTrigger={setTimePopup}>
        <h1>Popup After Page Load</h1>
        <p>Hello world</p>
      </Popup>
    </div>
  );
}

export default Home;
