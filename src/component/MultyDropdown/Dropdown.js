import React, { useState } from "react";
import "./Dropdown.css";
import MenuItem from "./MenuItem";
import MenuItems from "./MenuItems";

const Dropdown = () => {
  const [data, setData] = useState(MenuItems);
  console.log(data);
  return (
    <>
      <section>
        <h5>Dynamic Dropdown</h5>
        <div>
          <ul className="menus">
            {/* {data.map((menu) => (
              <MenuItem menu={menu} key={menu.title} />
            ))} */}

            {data.map((menu) =>
              // <div>{menu?.title}</div>
              menu?.submenu?.map((dt) => console.log(dt?.title))
            )}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Dropdown;
