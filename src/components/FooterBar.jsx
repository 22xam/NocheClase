// src/components/FooterBar.js

import React from "react";
import "./FooterBar.css";
import "./FooterBar.css";

function FooterBar() {
  return (
    <div className="footer-container has-text-centered">
      <footer className="footer">
        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            aria-label="Facebook"
            className="icon-link"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com"
            aria-label="Instagram"
            className="icon-link"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.twitter.com"
            aria-label="Twitter"
            className="icon-link"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
        <p>
          ® 2024 - www.sector8G.com.ar. Todos los derechos reservados. Término y
          condiciones | Políticas de uso
        </p>
        <code className="code">Suarez Matias & Fernando Barroso</code>
      </footer>
    </div>
  );
}

export default FooterBar;
