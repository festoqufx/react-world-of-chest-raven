import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./homePage.styles.css";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="home">
      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">{t("home.eyebrow")}</p>
          <h1>{t("home.title")}</h1>
          <p className="hero__lead">{t("home.lead")}</p>
          <div className="hero__actions">
            <Link className="btn btn--primary" to="/game">
              {t("home.playNow")}
            </Link>
          </div>
        </div>
        <div className="hero__board" aria-hidden="true">
          {Array.from({ length: 64 }).map((_, index) => {
            const row = Math.floor(index / 8);
            const col = index % 8;
            const isDark = (row + col) % 2 === 1;
            return (
              <span
                key={index}
                className={`hero-square ${isDark ? "is-dark" : "is-light"}`}
              />
            );
          })}
        </div>
      </section>

      <section className="feature-grid" aria-label={t("home.featuresTitle")}>
        <article className="feature-card">
          <h2>{t("home.featurePlayTitle")}</h2>
          <p>{t("home.featurePlayText")}</p>
        </article>
        <article className="feature-card">
          <h2>{t("home.featureThemeTitle")}</h2>
          <p>{t("home.featureThemeText")}</p>
        </article>
      </section>
    </div>
  );
}
