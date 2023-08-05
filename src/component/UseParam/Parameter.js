import React, { useState } from "react";
import { Link } from "react-router-dom";

const Parameter = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <h4>Pass This parameter into url:- {input}</h4>

      <input
        type="text"
        value={input}
        onInput={(e) => setInput(e.target.value)}
      />
      <Link to={`/url/${input}`}>
        <button>Click To view</button>
      </Link>
    </div>
  );
};

export default Parameter;
