import React, { Component } from "react";

const style = {
    position:'center',
    width:'100%',
    marginLeft: '50px',
    height: '150px',
    marginTop: '50px'
}
export default class searchbox extends Component {
  render() {
    return (
      <div>
        <section className="search-sec">
          <div className="container">
            <form action="#" method="post" noValidate="novalidate">
              <div className="row" style={style}>
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                      <input
                        type="text"
                        className="form-control search-slt"
                        placeholder="Nhập phim muốn tìm kiếm..."
                      />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                      <input
                        type="text"
                        className="form-control search-slt"
                        placeholder="Ngày xem"
                      />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                      <select
                        className="form-control search-slt"
                        id="exampleFormControlSelect1"
                      >
                        <option>Rạp</option>
                        <option>BHD Bitexco</option>
                        <option>BHD Vincom 3/2</option>
                        <option>BHD Vincom Lê Văn Việt</option>
                        <option>Example one</option>
                        <option>Example one</option>
                        <option>Example one</option>
                      </select>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                      <button type="button" className="btn btn-danger wrn-btn">
                        TÌM KIẾM
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}
