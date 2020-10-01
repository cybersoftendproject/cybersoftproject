import React, { Component } from "react";
import avartarHuman from "../Image/avartarHuman.jpg"
import { NavLink } from "react-router-dom"
// import Login from "../../Pages/Home/User/Login";
// import Register from "../../Pages/Home/User/Register";

// import redux
// import { connect } from "react-redux";

// import action
// import * as action from "../../Redux/Actions/userAction";

// import Swal from "sweetalert2";
// import shortid from "shortid";

class NavbarAdmin extends Component {
  
    handleSubmit = event => {
        event.preventDefault();
        localStorage.removeItem("UserAdmin");
    }

  render() {
        return (
          <header className="header">
            <nav
              className=" mynav1 navbar navbar-expand-lg"
              style={{ position: "relative" }}
            >
              
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <img
                  alt="menu"
                  src={avartarHuman}
                />
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav my-2 my-lg-0">
                  <li className="nav-item dropdown pr-5">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        alt="avatar"
                        src={avartarHuman}
                      />
                      <span>{}</span>
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                      style={{ minWidth: "7rem", padding: 0 }}
                    >
                      <form onSubmit={this.handleSubmit}>
                        <button
                          className="btn btn-secondary dropdown-item"
                          name="logoutAdmin"
                          type="submit"
                        >
                          Đăng xuất
                        </button>
                      </form>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        );
  }
}



export default (NavbarAdmin);

