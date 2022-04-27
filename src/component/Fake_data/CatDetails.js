import React, { useState } from "react";
import CatDatas from "./CatData";

const CatDetails = () => {
  const [catInfo, setcatInfo] = useState(CatDatas);
  return (
    <section className="catData">
      {catInfo.map((catDetails) => (
        <></>
      ))}
      <span
        className="catDataBody"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img
          src="https://icatcare.org/app/uploads/2019/09/The-Kitten-Checklist-1.png"
          alt=""
          className="catImg"
        />
        <b className="catName">Piku</b>
      </span>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                It's Piku
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Happy and good Cat</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatDetails;
