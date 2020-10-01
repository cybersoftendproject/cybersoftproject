import React, { Component } from 'react'
import Header from './Components/Header/header'
import Carousel from './Components/Carousel/carousel'
import Searchbox from './Components/Searchbox/searchbox'
import CarouselMovie from './Components/CarouselMovie/carouselmovie'
import Footer from './Components/Footer/footer'
import SignIn from './Components/Header/Signin/signin.js'
import DetailMovie from '../Home/Detail/ThongTinPhim'


// Admin

import AdminLogin from '../Home/Admin/Login/adminlogin'
import AdminNavbar from '../Home/Admin/Admin_Navbar/Navbar'

export default class index extends Component {
    render() {
        return (
            <div>
                <AdminNavbar />
            </div>
        )
    }
}
