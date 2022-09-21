const MenuItems = [
  {
    title: "Home",
    url: "/",
  },

  {
    title: "Services",
    url: "/services",
    submenu: [
      {
        title: "web design",
        url: "web-design",
      },
      {
        title: "web development",
        url: "web-dev",
        subchildmenu: [
          {
            title: "PHP",
            url: "php",
          },
          {
            title: "JavaScript",
            url: "js",
          },
        ],
      },
      {
        title: "SEO",
        url: "seo",
      },
    ],
  },

  {
    title: "About",
    url: "/about",
  },
  {
    title: "Category",
    url: "/category",
    submenu: [
      {
        title: "Shirt",
        url: "shirt",
      },
      {
        title: "Pant",
        url: "pant",
      },
      {
        title: "Panjabi",
        url: "panjabi",
      },
    ],
  },
];

export default MenuItems;
