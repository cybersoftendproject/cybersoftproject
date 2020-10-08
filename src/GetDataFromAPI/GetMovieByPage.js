import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios';

class GetMovieByPage extends Component {

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
const mapDispactToProps = (dispatch) => {
    axios({
        url:"https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP02&soTrang=1&soPhanTuTrenTrang=10",
        method: "GET",
    }).then((res) => {
        const action = {
            type: 'LIST_MOVIE_BY_PAGE',
            payload: res.data,
        }      
        dispatch(action)
    }).catch((err) => {
        console.log(err)
    })
}
const mapStateToProps = (state) => {
    return{
    listMovieByPage : state.ListMovie.listMovieByPage
    }
}
export default connect(mapStateToProps,mapDispactToProps)(GetMovieByPage);