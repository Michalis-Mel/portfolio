import React from "react";
import notFound from "../images/notFound.jpg";

const NotFound = () => (
  <div className="bounds">
    <h1>Not Found</h1>
    <p>Sorry! The page you are looking for doesn't exist.</p>
    <img src={notFound} alt="Not Found" />
  </div>
);

export default NotFound;
