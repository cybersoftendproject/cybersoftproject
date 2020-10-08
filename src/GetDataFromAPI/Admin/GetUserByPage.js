import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class GetUserByPage extends Component {
  render() {
    console.log(this.props.listUserByPage);
    return <div></div>;
  }
}
const mapDispactToProps = (dispatch) => {
  axios({
    url:
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&tuKhoa=hihi&soTrang=1&soPhanTuTrenTrang=20      ",
    method: "GET",
  })
    .then((res) => {
      const action = {
        type: "LIST_USER_BY_PAGE",
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
    listUserByPage: state.ListUser.listUserByPage,
  };
};
export default connect(mapStateToProps, mapDispactToProps)(GetUserByPage);
