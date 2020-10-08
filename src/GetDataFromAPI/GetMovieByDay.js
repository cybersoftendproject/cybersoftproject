import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class GetMovieByDay extends Component {
  render() {
    return <div></div>;
  }
}
const mapDispactToProps = (dispatch) => {
  axios({
    url:
      "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP02&tenPhim=haha&soTrang=1&soPhanTuTrenTrang=10&tuNgay=12%2F01%2F2012&denNgay=12%2F09%2F2020        ",
    method: "GET",
  })
    .then((res) => {
      const action = {
        type: "LIST_MOVIE_BY_DAY",
        payload: res.data,
      };
      dispatch(action);
    })
    .catch((err) => {
      console.log(err);
    });
};
const mapStateToProps = (state) => {
  return {
    listMovieByDay: state.ListMovie.listMovieByDay,
  };
};
export default connect(mapStateToProps, mapDispactToProps)(GetMovieByDay);
