import React, { useState, useEffect } from "react";
import "./filter.css";

const Filter = () => {
  const [activeBtn, setActiveBtn] = useState("all");

  const filterSelection = (c) => {
    const elements = document.getElementsByClassName("filterDiv");
    if (c === "all") c = "";
    for (let i = 0; i < elements.length; i++) {
      removeClass(elements[i], "show");
      if (elements[i].className.indexOf(c) > -1) addClass(elements[i], "show");
    }
  };

  const addClass = (element, name) => {
    const arr1 = element.className.split(" ");
    const arr2 = name.split(" ");
    for (let i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) === -1) {
        element.className += ` ${arr2[i]}`;
      }
    }
  };

  const removeClass = (element, name) => {
    const arr1 = element.className.split(" ");
    const arr2 = name.split(" ");
    for (let i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  };

  const handleButtonClick = (button) => {
    setActiveBtn(button);
    filterSelection(button);

    // Store the active button in localStorage
    // localStorage.setItem("activeBtn", button);
  };

  useEffect(() => {
    // Get the active button from localStorage if available
    // const storedActiveBtn = localStorage.getItem("activeBtn");
    // if (storedActiveBtn) {
    //   setActiveBtn(storedActiveBtn);
    //   filterSelection(storedActiveBtn);
    // }

    // Active 'all' -div's by default
    filterSelection("all");
    // Add active class to the current button (highlight it)
    const btnContainer = document.getElementById("myBtnContainer");
    const btns = btnContainer.getElementsByClassName("btn");
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }, []);

  return (
    <>
      <h2>Filter DIV Elements</h2>
      <div id="myBtnContainer">
        <button
          className={`btn${activeBtn === "all" ? " active" : ""}`}
          onClick={() => handleButtonClick("all")}
        >
          Show all
        </button>
        <button
          className={`btn${activeBtn === "cars" ? " active" : ""}`}
          onClick={() => handleButtonClick("cars")}
        >
          Cars
        </button>
        <button
          className={`btn${activeBtn === "animals" ? " active" : ""}`}
          onClick={() => handleButtonClick("animals")}
        >
          Animals
        </button>
        <button
          className={`btn${activeBtn === "fruits" ? " active" : ""}`}
          onClick={() => handleButtonClick("fruits")}
        >
          Fruits
        </button>
        <button
          className={`btn${activeBtn === "colors" ? " active" : ""}`}
          onClick={() => handleButtonClick("colors")}
        >
          Colors
        </button>
      </div>
      <div className="container">
        <div className="filterDiv cars">BMW</div>
        <div className="filterDiv colors fruits">Orange</div>
        <div className="filterDiv cars">Volvo</div>
        <div className="filterDiv colors">Red</div>
        <div className="filterDiv cars">Ford</div>
        <div className="filterDiv colors">Blue</div>
        <div className="filterDiv animals">Cat</div>
        <div className="filterDiv animals">Dog</div>
        <div className="filterDiv fruits">Melon</div>
        <div className="filterDiv fruits animals">Kiwi</div>
        <div className="filterDiv fruits">Banana</div>
        <div className="filterDiv fruits">Lemon</div>
        <div className="filterDiv animals">Cow</div>
      </div>
    </>
  );
};

export default Filter;
