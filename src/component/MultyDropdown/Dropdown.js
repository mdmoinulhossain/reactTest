import React from "react";
import "./Dropdown.css";
import MenuItem from "./MenuItem";
import { MenuItems } from "./MenuItems";

const Dropdown = () => {
  return (
    <>
      <section>
        <h5>Dynamic Dropdown</h5>
        <div>
          <ul className="menus">
            {MenuItems.map((menu, index) => {
              return <MenuItem items={menu} key={index} />;
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Dropdown;
