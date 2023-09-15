import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
  };

  return (
    <>
      <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex flex-wrap align-items-center">
          <ul className="nav me-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link px-2 text-info"
                style={({ isActive }) => (isActive ? activeStyles : undefined)}
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/administracion"
                className="nav-link  px-2 text-info "
                style={({ isActive }) => (isActive ? activeStyles : undefined)}
              >
                Admistración
              </NavLink>
            </li>
          </ul>
          <div>
            <a href="#" className="nav-link text-danger fw-semibold opacity-75">
              Cerrar Sesión
            </a>
          </div>
        </div>
      </nav>
      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center align-items-center">
          <a
            href="/"
            className="d-flex flex-column flex-lg-row align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none fw-semibold gap-2"
          >
            <img src="/logo.png" style={{ width: "3rem" }} alt="" />
            Psycology Board
          </a>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
            <input
              type="search"
              className="form-control"
              placeholder="Buscar..."
            />
          </form>
        </div>
      </header>
    </>
  );
};

export default Header;
