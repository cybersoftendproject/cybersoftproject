import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./carouselmovie.css";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {connect} from 'react-redux'
import ListMovie from './listmovie'

class carousel extends Component {
  render() {
    console.log(this.props.listMovieFinal);
    return(
      this.props.listMovieFinal.map((index,key)=>{
        return (
          <ListMovie key = {key} movie = {index}/>
        );
      })
      )
  }
  
}

const mapDispatchToProps = (dispatch) => {
    axios({
        url:"https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",
        method: "GET",
    }).then((res)=>{
        const action = {
            type: 'LIST_MOVIE',
            payload: res.data,
        }      
        dispatch(action)
    }).catch((err)=>{
        console.log(err)
    })
}
const mapStateToProps = (state) => {
    return{
    listMovieFinal : state.ListMovie.listMovieData
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(carousel)