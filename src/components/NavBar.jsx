const Navbar = () => {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <span className="has-text-weight-bold has-text-white">INICIO</span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item navbar-hover" href="#">
            ARTISTAS
          </a>
          <a className="navbar-item navbar-hover" href="#">
            NOTICIAS
          </a>
          <a className="navbar-item navbar-hover" href="#">
            LANZAMIENTOS
          </a>
          <a className="navbar-item navbar-hover" href="#">
            CMTV ACÚSTICOS
          </a>
          <a className="navbar-item navbar-hover" href="#">
            #DATA
          </a>
          <a className="navbar-item navbar-hover" href="#">
            AGENDA
          </a>
          <a className="navbar-item navbar-hover" href="#">
            EXTRAS
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-dark" href="https://www.facebook.com">
                <span className="icon">
                  <i className="fab fa-facebook"></i>
                </span>
              </a>
              <a className="button is-dark" href="https://www.youtube.com">
                <span className="icon">
                  <i className="fab fa-youtube"></i>
                </span>
              </a>
              <a className="button is-dark" href="https://www.instagram.com">
                <span className="icon">
                  <i className="fab fa-instagram"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
