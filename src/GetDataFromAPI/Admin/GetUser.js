import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class GetUser extends Component {
  render() {
      console.log(this.props.listUser);
    return <div></div>;
  }
}
const mapDispactToProps = (dispatch) => {
  axios({
    url:
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP02&tuKhoa=a",
    method: "GET",
  })
    .then((res) => {
      const action = {
        type: "LIST_USER",
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
    listUser: state.ListUser.listUser,
  };
};
export default connect(mapStateToProps, mapDispactToProps)(GetUser);
