import { useState } from "react";
import Popup from "./component/Popup";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
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
    </div>
  );
}

export default App;
