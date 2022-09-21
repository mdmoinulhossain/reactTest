import React, { useState } from "react";
import "./Dropdown.css";
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
            {data.map((menu) => (
              <li>
                <a href={menu.url}>{menu.title}</a>
                {menu?.submenu?.map((ch) => (
                  <ul>
                    <li>
                      <a href={ch?.url}>{ch?.title}</a>
                      {ch?.subchildmenu?.map((subCh) => (
                        <ul>
                          <li>
                            <a href={subCh?.url}>{subCh?.title}</a>
                          </li>
                        </ul>
                      ))}
                    </li>
                  </ul>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Dropdown;
