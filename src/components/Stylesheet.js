import React from "react";
import "../myStyles.css";

function Stylesheet({ primary }) {
  let className = primary ? "primary" : "secondary";
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheets</h1>
    </div>
  );
}

export default Stylesheet;
