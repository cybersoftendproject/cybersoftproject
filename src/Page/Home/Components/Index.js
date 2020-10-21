import React, { Component } from 'react'
import Header from './Header/header'
import Carousel from './Carousel/carousel'
import Searchbox from './Searchbox/searchbox'
import CarouselMovie from './CarouselMovie/carouselmovie'
import Footer from "./Footer/footer";

class Index extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Carousel/>
                <Searchbox/>
                <CarouselMovie/>
                <Footer/>
            </div>
        )
    }
}
export default (Index);