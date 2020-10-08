import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class GetListTheater extends Component {
  render() {
    return <div></div>;
  }
}
const mapDispactToProps = (dispatch) => {
  axios({
    url:
      "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap?maHeThongRap=5211 ",
    method: "GET",
  })
    .then((res) => {
      const action = {
        type: "LIST_THEATER",
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
    listTheater: state.ListTheater.listTheater,
  };
};
export default connect(mapStateToProps, mapDispactToProps)(GetListTheater);
