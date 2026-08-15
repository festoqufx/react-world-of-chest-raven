import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useTheme } from "../../context/ThemeContext";
import "./header.styles.css";

function Header() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand__mark" aria-hidden="true">
            ♞
          </span>
          <span className="brand__text">World of Chess</span>
        </Link>

        <button
          className="icon-button menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="visually-hidden">
            {isMenuOpen ? t("header.closeMenu") : t("header.openMenu")}
          </span>
          <span aria-hidden="true">{isMenuOpen ? "✕" : "☰"}</span>
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav ${isMenuOpen ? "is-open" : ""}`}
          aria-label={t("header.navigation")}
        >
          <NavLink exact to="/" className="nav-link" onClick={closeMenu}>
            {t("header.home")}
          </NavLink>
          <NavLink to="/game" className="nav-link nav-link--cta" onClick={closeMenu}>
            {t("header.play")}
          </NavLink>
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? t("header.switchToLight") : t("header.switchToDark")
            }
            title={theme === "dark" ? t("header.lightMode") : t("header.darkMode")}
          >
            <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
