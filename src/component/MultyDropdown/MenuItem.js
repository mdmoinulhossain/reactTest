import MenuItems from "./MenuItems";

const MenuItem = ({ menu }) => {
  const { title } = menu;
  console.log(title);
  return (
    <li className="menu-items">
      {/* {menu?.submenu ? (
        <>
          <button type="button" aria-haspopup="menu">
            {menu.title}{" "}
          </button>
          <MenuItems submenus={menu.submenu} />
        </>
      ) : (
        <a href={menu.url}>{menu.title}</a>
      )} */}

      {/* {menu?.submenu?.map((dt) => console.log(dt))} */}
    </li>
  );
};

export default MenuItem;
