import React, { Component } from 'react'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import Typography from '@material-ui/core/Typography'
import axios from 'axios';

 class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin: false,
        }
    }
    state = {
        taiKhoan: "",
        matKhau: "",
    };
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
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            method: "POST",
            data:this.state,
        }).then((res)=>{
            if(res.data.maLoaiNguoiDung==="QuanTri"){
            console.log("Đăng nhập thành công")
            this.setState({
                isLogin: true
            })
            localStorage.setItem("accessToken", res.data.accessToken);
        }else{
            console.log("Bạn không có quyền đăng nhập vào trang này")
        }     
        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {

        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit}>
            <Grid container justify='center' alignContent='center'> 
                <Grid item xs={6} md={4}>
                    <Paper elevation={4} style={{ padding: '20px 15px', marginTop: '30px' }}>
                        <Typography variant="headline" gutterBottom >
                            Đăng Nhập
                        </Typography>
                        <FormControl fullWidth margin='normal'>
                            <InputLabel>Tên Tài Khoản</InputLabel>
                            <Input name='taiKhoan' fullWidth  onChange={this.handleChange}/>
                        </FormControl>
                        <FormControl fullWidth margin='normal'>
                            <InputLabel>Mật Khẩu</InputLabel>
                            <Input fullWidth name='matKhau' type='password' onChange={this.handleChange}/>
                        </FormControl>
                        <FormControl fullWidth margin='normal'>
                            <Button
                                variant='extendedFab'
                                color='primary'
                                type='submit'
                            >
                                Đăng nhập
                            </Button>
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
            </form>
        )
    }
}
export default (SignIn);

