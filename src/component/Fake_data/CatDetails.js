import React, { useState } from "react";
import CatDatas from "./CatData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const CatDetails = () => {
  const [catInfo, setcatInfo] = useState(CatDatas);
  return (
    <section className="catData">
      {catInfo.map((catDetails) => (
        <div key={catDetails?.id}>
          <div>
            {/* Body */}
            <span
              className="catDataBody"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <LazyLoadImage
                src={catDetails?.image}
                alt=""
                className="catImg"
                loading="lazy"
                effect="blur"
              />
              <b className="catName">{catDetails?.name}</b>
            </span>
          </div>

          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    It's {catDetails?.name}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">{catDetails?.behave}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CatDetails;
