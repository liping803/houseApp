import React, { Component } from 'react'
import { WingBlank, Button, Flex, WhiteSpace, List, InputItem } from 'antd-mobile';
import { Link } from 'react-router-dom'
import { loginApi } from '../apis/login'
export default class Login extends Component {
    state = {
        phone: '',
        pwd: ''
    }
    phoneChange = (val) => {
        this.setState({ phone: val })
    }
    pwdChange = (val) => {
        this.setState({ pwd: val })
    }
    //登录
    login = () => {
        const { phone, pwd } = this.state;
        loginApi({ phoneNum: phone, password: pwd }).then((res) => {

            
            const { token,data } = res 
            console.log("token", token);
       
            if (token) {
                localStorage.setItem("token", token);
                localStorage.setItem('phone', data.phoneNum);
               this.props.history.replace('/')
                
            } else {
                alert('登录失败');
            }
        })

    }
    render() {
        const { phone, pwd } = this.state;
        return (
            <div style={{ background: '#fff', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
                <Flex justify="center">
                    <img src={require('../assets/images/logo.png')} alt="11" style={{ width: 100, heigth: 100 }} />
                    <WingBlank size="md"></WingBlank>
                </Flex>
                <WhiteSpace size="xl" />
                <Flex justify="center">
                    <List >
                        <InputItem placeholder="请输入手机号" value={phone} onChange={this.phoneChange} >
                            <div style={{ backgroundImage: `url(${require('../assets/images/phone.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <InputItem placeholder="请输入密码" value={pwd} onChange={this.pwdChange}>
                            <div style={{ backgroundImage: `url(${require('../assets/images/pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                    </List>

                </Flex>
                <WhiteSpace size="xl" />
                <WingBlank><Button style={{ background: '#00BC5B', color: '#fff' }} onClick={this.login}>立即登录</Button> </WingBlank>

                <WhiteSpace size="md" />
                <WingBlank>
                    <Flex justify="between">
                        <Link to="/reg" >立即注册</Link>
                        <Link to="/forgot" >忘记密码?</Link>
                    </Flex>
                </WingBlank>
            </div >
        )
    }
}
