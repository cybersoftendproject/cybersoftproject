import React, { Component } from 'react'
import './product.scss'

export default class listmovie extends Component {
    render() {
        let {movie} = this.props;
        return (
            <div>
                <div className="products__film">
            <div
              className="filmThumbnail"
              style={{
                backgroundImage: `url(${movie.hinhAnh})`
              }}
            >
              <div className="hoverInfo showHover showingDetail"></div>
            </div>
            <div className="products__info">
              <div className="nameFilm hideHover">{movie.tenPhim}</div>
              <div className="showHover">
                  MUA VÉ
              </div>
            </div>
            </div>
            </div>
        )
    }
}
