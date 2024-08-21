import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import GCBicon from "../../assets/images/GCB_icon.png";
import LanguageSwitcher from "../../assets/languages/language_switcher";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          <img src={GCBicon} alt="GCB" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/payment"} className="nav-link">
                {t("payment")}
              </Link>
            </li>
            <li className="nav-item language-switcher">
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
