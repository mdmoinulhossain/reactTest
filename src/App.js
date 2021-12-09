import { useEffect, useState } from "react";
import Popup from "./component/Popup";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timePopup, setTimePopup] = useState(false);

  // after 10 seconds
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimePopup(true);
  //   }, 10000);
  // }, []);

  // after 1 seconds
  useEffect(() => {
    setTimeout(() => {
      setTimePopup(true);
    }, 3000);
  }, []);

  return (
    <div>
      <main>
        <h1>Hi Hello</h1>
        <button onClick={() => setButtonPopup(true)}>Open</button>
      </main>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h1>My First POPUP IN React js</h1>
        <p>Hello world</p>
      </Popup>

      <Popup trigger={timePopup} setTrigger={setTimePopup}>
        <h1>My First POPUP IN React js</h1>
        <p>Hello world</p>
      </Popup>
    </div>
  );
}

export default App;
