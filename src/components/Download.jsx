import React from "react";

function Download({ textLine1, textLine2, icon }) {
  return (
    <button className="download-button" style={{ display: "flex", alignItems: "center" }}>
      <span
        style={{
          marginRight: "15px",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        {icon}
      </span>
      <span
        className="font-semibold"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <span>{textLine1}</span>
        <span style={{fontWeight: "bold", fontSize: "18px" }}>
          {textLine2}
        </span>
      </span>
    </button>
  );
}

export default Download;
