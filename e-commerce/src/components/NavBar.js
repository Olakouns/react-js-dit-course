const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-2">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          E-commerce app
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Cart
              </a>
            </li>
          </ul>
          <button type="button" className="btn btn-primary position-relative">
            <i className="bi bi-cart"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              0
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
