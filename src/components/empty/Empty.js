import React from "react";
import photo from "../../assets/empty.webp";

function Empty() {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={photo} width={350} alt="" />
      <h1>Empty</h1>
    </div>
  );
}

export default Empty;
