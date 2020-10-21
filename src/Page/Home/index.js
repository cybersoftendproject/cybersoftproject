import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header/header";
import Carousel from "./Components/Carousel/carousel";
import Searchbox from "./Components/Searchbox/searchbox";
import CarouselMovie from "./Components/CarouselMovie/carouselmovie";
import Footer from "./Components/Footer/footer";
import SignIn from "./Components/Header/Signin/signin.js";
import DetailMovie from "../Home/Detail/ThongTinPhim";
import Index from "./Components/Index"

// Admin

import AdminLogin from "../Home/Admin/Login/adminlogin";
import AdminNavbar from "../Home/Admin/Admin_Navbar/Navbar";
import AdminManageUser from "../Home/Admin/Admin_ManageUser/manageuser"

//Get Data
import GetMovieByPage from "../../GetDataFromAPI/GetMovieByPage";
import GetUser from "../../GetDataFromAPI/Admin/GetUser";
import SearchUser from "../../GetDataFromAPI/Admin/SearchUser";
import SearchUserByPage from "../../GetDataFromAPI/Admin/SearchUserByPage";
import ListUserByPage from "../../GetDataFromAPI/Admin/GetUserByPage";
import ListTheater from "../../GetDataFromAPI/Theaters/TheaterInfo";


export default class index extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/index" component={Index} />

            <Route path="/admin/login" component={AdminLogin} />
            <Route path="/" component={AdminManageUser} />

          </div>
        </BrowserRouter>
      </div>
    );
  }
}
