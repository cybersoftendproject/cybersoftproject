import React, { Component } from "react";
import "./header.css";
import "antd/dist/antd.css";
import { Modal } from "antd";
import { Button } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import axios from "axios";
import swal from "sweetalert2";
import SignIn from "./Signin/signin";

class header extends Component {
  constructor() {
    super();
    this.state = {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "",
      hoTen: "",
    };
  }
  //state = { visible: false, loading: false };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: this.state,
    })
      .then((res) => {
        console.log("Đăng ký thành công");
        swal.fire({
          icon: "success",
          title: "Đăng ký thành công",
          text: "",
          timer: 3000,
        });
      })
      .catch((err) => {
        console.log(err);
        swal.fire({
          icon: "error",
          title: "Đăng ký thất bại ! Vui lòng kiểm tra thông tin",
          text: "",
          timer: 3000,
        });
      });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOkSignUp = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancelSignUp = () => {
    this.setState({ visible: false });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <div className="navigation-wrap bg-light start-header start-style">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <nav className="navbar navbar-expand-md navbar-light">
                    <a
                      className="navbar-brand"
                      href="https://tix.vn/"
                      target="_blank"
                    >
                      <img
                        src="https://assets.codepen.io/1462889/fcy.png"
                        alt
                      />
                    </a>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav ml-auto py-4 py-md-0">
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                          <a
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                            href="#"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            TRANG CHỦ
                          </a>
                        </li>
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          <a className="nav-link" href="#">
                            LỊCH CHIẾU
                          </a>
                        </li>
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          <a className="nav-link" href="#">
                            CỤM RẠP
                          </a>
                        </li>
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          <a
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                            href="#"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            TIN TỨC
                          </a>
                        </li>
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          <a className="nav-link" href="#">
                            ỨNG DỤNG
                          </a>
                        </li>
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4"></li>
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          <Button type="primary" onClick={this.showModal}>
                            ĐĂNG KÝ
                          </Button>
                          <Modal
                            visible={this.state.visible}
                            title="Đăng Ký"
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                          >
                            <form onSubmit={this.handleSubmit}>
                              <FormControl
                                onSubmit={this.handleSubmit}
                                fullWidth
                                margin="normal"
                              >
                                <InputLabel>Tên Tài Khoản</InputLabel>
                                <Input
                                  name="taiKhoan"
                                  fullWidth
                                  onChange={this.handleChange}
                                />
                              </FormControl>
                              <FormControl fullWidth margin="normal">
                                <InputLabel>Mật Khẩu</InputLabel>
                                <Input
                                  fullWidth
                                  name="matKhau"
                                  type="password"
                                  onChange={this.handleChange}
                                />
                              </FormControl>
                              <FormControl fullWidth margin="normal">
                                <InputLabel>Email</InputLabel>
                                <Input
                                  name="email"
                                  fullWidth
                                  onChange={this.handleChange}
                                />
                              </FormControl>
                              <FormControl fullWidth margin="normal">
                                <InputLabel>Số điện thoại</InputLabel>
                                <Input
                                  name="soDt"
                                  fullWidth
                                  onChange={this.handleChange}
                                />
                              </FormControl>

                              <FormControl fullWidth margin="normal">
                                <InputLabel>Mã Nhóm</InputLabel>
                                <Input
                                  name="maNhom"
                                  fullWidth
                                  onChange={this.handleChange}
                                />
                              </FormControl>

                              <FormControl fullWidth margin="normal">
                                <InputLabel>Mã Loại</InputLabel>
                                <Input
                                  name="maLoaiNguoiDung"
                                  fullWidth
                                  onChange={this.handleChange}
                                />
                              </FormControl>
                              <FormControl fullWidth margin="normal">
                                <InputLabel>Họ Tên</InputLabel>
                                <Input
                                  name="hoTen"
                                  fullWidth
                                  onChange={this.handleChange}
                                />
                              </FormControl>
                              <FormControl fullWidth margin="normal">
                                <Button
                                  type="submit"
                                  variant="contained"
                                  color="primary"
                                >
                                  Đăng Ký
                                </Button>
                              </FormControl>
                            </form>
                          </Modal>
                        </li>
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          <Button variant="contained" color="primary">
                            Đăng Nhập
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(header);
