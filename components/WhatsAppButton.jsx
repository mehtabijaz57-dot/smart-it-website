// components/WhatsAppButton.js
import React from "react";

const WhatsAppButton = () => {
  // WhatsApp number (apna number with country code)
  const phoneNumber = "+923333882626"; 
  const message = "Discuss Your IT Project.";

  // WhatsApp link generate karte hain
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",      // page ke upar fixed
        bottom: "20px",         // bottom se 20px
        left: "20px",           // left se 20px
        width: "60px",          // button ka size
        height: "60px",
        borderRadius: "50%",    // round button
        backgroundColor: "#25D366", // WhatsApp green
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
        zIndex: 1000,           // page ke upar dikhe
        cursor: "pointer",
      }}
    >
      <img
        src="/whatsapp-icon.png" // ye icon public folder me rakhein
        alt="WhatsApp"
        style={{ width: "35px", height: "35px" }}
      />
    </a>
  );
};

export default WhatsAppButton;
