import React from "react";

function Download({ textLine1, textLine2, icon }) {
  return (
    <button className="download-button" style={{ display: "flex", alignItems: "center" }}>
      <span
        style={{
          marginRight: "12px",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        {icon}
      </span>
      <span
        className="font-regular text-[11px]"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <span>{textLine1}</span>
        <span style={{fontWeight: "bold", fontSize: "15px" }}>
          {textLine2}
        </span>
      </span>
    </button>
  );
}

export default Download;
