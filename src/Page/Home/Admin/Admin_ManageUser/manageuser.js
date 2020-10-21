import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import ManageUser from "./manageruserindex"

class manageuser extends Component {
  render() {   
    return (
      this.props.listUser.map((index,key)=>{
          return(
            <div>
            <div>
              <div className="header">
                <div className="container" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="well">
                          <input
                            type="text"
                            className="form-control"
                            id="customer_id"
                            placeholder="Customer ID"
                          />
                        </div>
                      </div>
                    </div>
                    <table
                      id="customer-online"
                      className="table table-striped table-bordered table-hover"
                    >
                      <thead>
                        <tr>
                          <td>Họ Tên</td>
                          <td>Customer ID</td>
                          <td>Last Page Visited</td>
                          <td>Referer</td>
                          <td> Last Click</td>
                          <td>Action</td>
                        </tr>
                      </thead>
                      
    
                      <tbody>  
                        <tr>
                          <td>127.0.0.1</td>
                          <td>1</td>
                          <td>
                            <a>admin/user/edit/1</a>
                          </td>
                          <td />
                          <td />
                          <td className="text-center">
                            <a role="button" className="btn btn-danger">
                              Delete
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>127.0.0.2</td>
                          <td>2</td>
                          <td>
                            <a>admin/customer/edit/2</a>
                          </td>
                          <td />
                          <td />
                          <td className="text-center">
                            <a role="button" className="btn btn-danger">
                              Delete
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>127.0.0.3</td>
                          <td>3</td>
                          <td>
                            <a>admin/blog/edit/1</a>
                          </td>
                          <td />
                          <td />
                          <td className="text-center">
                            <a role="button" className="btn btn-danger">
                              Delete
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>127.0.0.4</td>
                          <td>4</td>
                          <td>
                            <a>admin/product/edit/1</a>
                          </td>
                          <td />
                          <td />
                          <td className="text-center">
                            <a role="button" className="btn btn-danger">
                              Delete
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        )
      })
    )
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
export default connect(mapStateToProps, mapDispactToProps)(manageuser);