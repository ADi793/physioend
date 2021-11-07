import React from "react";
import { Link } from "react-router-dom";

function Navbar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white p-4">
      <div className="container-md">
        <Link className="navbar-brand text-primary fs-2" to="/">
          PHYSIOAI.
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {!user && (
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/signin">
                  Sign In
                </Link>
              </li>
            )}
            {user && (
              <React.Fragment>
                <li className="nav-item mx-2">
                  <Link className="nav-link" to="/physiodashboard">
                    Physio Dashboard
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="nav-link" to="#">
                    {user.basic_info.first_name} {user.basic_info.last_name}
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="nav-link" to="/signout">
                    Sign Out
                  </Link>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
