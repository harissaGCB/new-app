import React from "react";
import "./coming_soon.css";
import { useTranslation } from "react-i18next";

function ComingSoon() {
  const { t } = useTranslation();

  return (
    <div className="app-container-coming-soon">
      <div className="coming-soon">
        <h1>{t("coming_soon")}</h1>
        <p>{t("working_hard")}</p>
      </div>
    </div>
  );
}

export default ComingSoon;
