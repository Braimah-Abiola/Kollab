import React from "react";

function SecondaryButton({ buttonText, icon }) {
  return (
    <button
      className="secondary-button"
      style={{ display: "flex", alignItems: "center" }}
    >
      <span
        style={{
          marginRight: "15px",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        {icon}
      </span>
      <span className={`font-semibold text-[20px]`}>{buttonText}</span>
    </button>
  );
}

export default SecondaryButton;
