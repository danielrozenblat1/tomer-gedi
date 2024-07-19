import React from "react";
import styles from "./Button.module.css";
const handleButtonClick = () => {
  const phoneNumber = "+972549912001";
  // Set the message content
  const message ="היי תומר ,אני רוצה לשמוע ממך עוד על..";

  // Encode the message for the URL
  const encodedMessage = encodeURIComponent(message);
  // Construct the WhatsApp message URL with phone number and message
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Open the URL in a new tab
  window.open(whatsappURL, "_blank");

};
const Button = (props) => {
  return <button onClick={handleButtonClick} className={styles.button}>{props.text}</button>;
};

export default Button;