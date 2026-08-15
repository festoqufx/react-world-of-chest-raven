import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./pageNotFound.styles.css";

const PageNotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="page not-found">
      <p className="not-found__code">404</p>
      <h1>{t("notFound.title")}</h1>
      <p>{t("notFound.text")}</p>
      <Link className="btn btn--primary" to="/">
        {t("notFound.home")}
      </Link>
    </div>
  );
};

export default PageNotFound;
