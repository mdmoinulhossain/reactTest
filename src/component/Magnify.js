import React, { useState, useRef } from "react";
// import watch from "../img/test.jpg";
import ReactImageMagnify from "react-image-magnify";
import Header from "./Header";
import "./Magnify.css";
const images = [
  "https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0b21vYmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
  "https://c4.wallpaperflare.com/wallpaper/787/18/502/cars-hd-widescreen-high-quality-desktop-wallpaper-preview.jpg",
  "https://wallpaperaccess.com/full/6834939.jpg",
  "https://wallpaperaccess.com/full/115257.jpg",
  "https://www.supercars.net/blog/wp-content/uploads/2017/10/lamborghini_egoista_concept_car-1920x1200.jpg",
];
const Magnify = () => {
  const [img, setImg] = useState(images[0]);
  const hoverHandler = (image, i) => {
    setImg(image);
    refs.current[i].classList.add("active");
    for (var j = 0; j < images.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove("active");
      }
    }
  };
  const refs = useRef([]);
  refs.current = [];
  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="left">
          <div className="left_1">
            {images.map((image, i) => (
              <div
                className={i == 0 ? "img_wrap active" : "img_wrap"}
                key={i}
                onClick={() => hoverHandler(image, i)}
                ref={addRefs}
              >
                <img src={image} alt="" />
              </div>
            ))}
          </div>
          <div className="left_2">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  // src: watch,
                  width: 400,
                  height: 400,
                  // isFluidWidth: true,
                  src: img,
                },
                largeImage: {
                  // src: watch,
                  width: 800,
                  height: 800,
                  src: img,
                },
                enlargedImageContainerDimensions: {
                  width: "150%",
                  height: "120%",
                },
              }}
            />
          </div>
        </div>
        <div className="right"></div>
      </div>
      {/* <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Wristwatch by Ted Baker London",
            src: watch,
            width: 400,
            height: 400,
          },
          largeImage: {
            src: watch,
            width: 1200,
            height: 1800,
          },
        }}
      /> */}
      {/* <img src={watch} alt="Watch" /> */}
    </div>
  );
};

export default Magnify;
