import React from "react";

function PrimaryButton({ buttonText }) {
  return (
    <button className="primary-button" style={{ alignItems: "center" }}>
      <span className={`font-semibold text-[20px]`}>{buttonText}</span>
    </button>
  );
}

export default PrimaryButton;
