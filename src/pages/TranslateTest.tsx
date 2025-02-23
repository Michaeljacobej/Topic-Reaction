import React from "react";
import { useTranslation } from "react-i18next";

const Translate: React.FC = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === "en-US" ? "it-IT" : "en-US";
    i18n.changeLanguage(nextLang);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{t("hello_welcome")}</h2>
      <p>{t("example_text")}</p>
      <button onClick={toggleLanguage}>{t("switch_language")}</button>
    </div>
  );
};

export default Translate;
