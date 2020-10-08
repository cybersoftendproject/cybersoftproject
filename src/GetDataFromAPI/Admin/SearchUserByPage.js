import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class SearchUserByPage extends Component {
  render() {
    console.log(this.props.searchUserByPage);
    return <div></div>;
  };
}
const mapDispactToProps = (dispatch) => {
  axios({
    url:
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=GP01&tuKhoa=hihi&soTrang=1&soPhanTuTrenTrang=1      ",
    method: "GET",
  })
    .then((res) => {
      const action = {
        type: "SEARCH_USER_BY_PAGE",
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
    searchUserByPage: state.ListUser.searchUserByPage,
  };
};
export default connect(mapStateToProps, mapDispactToProps)(SearchUserByPage);
