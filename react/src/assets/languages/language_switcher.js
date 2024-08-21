import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { startTransition } from "react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation(); // Correctly accessing i18n from the hook
  const [selectedLanguage, setSelectedLanguage] = useState("tr"); // State to track selected language

  const changeLanguage = (lng) => {
    startTransition(() => {
      i18n.changeLanguage(lng);
      setSelectedLanguage(lng); // Update selected language
      localStorage.setItem("selectedLanguage", lng);
    });
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
      setSelectedLanguage(storedLanguage);
    }
  }, [i18n]);

  return (
    <div className="header-language">
      <div className="lang-selected">
        <span
          onClick={() => changeLanguage("en")}
          style={{ color: selectedLanguage === "en" ? "#2b61ff" : "#fff" }} // Change color based on selection
        >
          English
        </span>
        {" | "}
        <span
          onClick={() => changeLanguage("tr")}
          style={{ color: selectedLanguage === "tr" ? "#2b61ff" : "#fff" }} // Change color based on selection
        >
          TUR
        </span>
        {/* Add more buttons for additional languages */}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
