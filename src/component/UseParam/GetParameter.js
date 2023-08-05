import React from "react";
import { useParams } from "react-router-dom";

const GetParameter = () => {
  const { getData } = useParams();

  return (
    <div>
      {getData ? (
        <>
          <h4>Here Your Url Parameter Data:</h4>
          <h2>{getData}</h2>
        </>
      ) : (
        <>
          <h2>No Parameter Found</h2>
        </>
      )}
    </div>
  );
};

export default GetParameter;
