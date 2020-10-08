import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class SearchUser extends Component {
  render() {
      console.log(this.props.searchUser);
    return <div></div>;
  }
}
const mapDispactToProps = (dispatch) => {
  axios({
    url:
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP02&tuKhoa=a",
    method: "GET",
  })
    .then((res) => {
      const action = {
        type: "SEARCH_USER",
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
    searchUser: state.ListUser.searchUser,
  };
};
export default connect(mapStateToProps, mapDispactToProps)(SearchUser);
