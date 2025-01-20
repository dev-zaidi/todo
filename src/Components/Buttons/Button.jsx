import React from "react";
import styles from "./button.module.css";

const Button = ({ handleFunction, icon, label, color, backgroundColor }) => {
  const buttonStyle = {
    color: color || "inherit", // Default to inherited text color if not provided
    backgroundColor: backgroundColor || "inherit", // Default to inherited background color if not provided
  };

  return (
    <button
      className={styles.button}
      onClick={handleFunction}
      style={buttonStyle}>{icon || label}
    </button>
  );
};

export default Button;
