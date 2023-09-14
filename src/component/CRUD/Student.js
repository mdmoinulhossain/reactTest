import React from "react";
const axios = require("axios");

// Usage example:
const dataToAdd = {
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  city: "New York",
};

const Student = () => {
  const postDataToMongoDB = async (e) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/addData",
        dataToAdd
      );
      console.log("Data added successfully:", response.data);
    } catch (error) {
      console.error("Error adding data:", error.message);
    }
  };
  return (
    <div>
      <button onClick={() => postDataToMongoDB()}>postDataToMongoDB</button>
    </div>
  );
};

export default Student;
