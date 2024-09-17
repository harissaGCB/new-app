import React, { useState } from "react";
import axios from "axios";
import "./SendMessage.css"; // Link your CSS file

const SendMessage = () => {
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendMessage = async () => {
    try {
      await axios.post(process.env.REACT_APP_API + "/w/send-message", {
        message,
        phoneNumber,
      });
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert(error);
    }
  };

  return (
    <div className="container">
      <h1>Send WhatsApp Message</h1>
      <input
        type="text"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <textarea
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default SendMessage;
