import React, { Component } from 'react'
import { Flex, Checkbox, Button, List, InputItem, WingBlank, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom'
// const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
export default class Reg extends Component {
    onChange = (val) => {
        console.log(val);
    }
    render() {
        return (
            <div style={{ background: '#fff', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
                <Flex justify="center">
                    <img src={require('../assets/images/logo.png')} alt="11" style={{ width: 100, heigth: 100 }} />
                    <WingBlank size="md"></WingBlank>
                </Flex>
                <WhiteSpace size="xl" />
                <Flex justify="center">
                    <List >
                        <InputItem placeholder="请输入手机号"  >
                            <div style={{ backgroundImage: `url(${require('../assets/images/phone.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <InputItem placeholder="请输入密码" >
                            <div style={{ backgroundImage: `url(${require('../assets/images/pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <InputItem placeholder="请输入确认密码" >
                            <div style={{ backgroundImage: `url(${require('../assets/images/pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <div style={{ height: '44px', width: '70px', float: 'right', fontSize: '12px', color: '#ccc', lineHeight: '44px' }}>获取验证码</div>
                        <InputItem placeholder="请输入验证码">
                            <div style={{ backgroundImage: `url(${require('../assets/images/pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                    </List>
                </Flex>
                <WhiteSpace size="md" />
                <Flex>
                    <Flex.Item>
                        <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>  我已同意<Link to="/" style={{color:'#0a0'}}>《用户服务协议》</Link>及<Link to="/" style={{color:'#0a0'}}>《隐私政策》</Link></AgreeItem>
                    </Flex.Item>
                </Flex>
                <WhiteSpace size="md" />
                <WingBlank>
                    <Button style={{ background: '#00BC5B', color: '#fff' }} >注册</Button>
                </WingBlank>
                <WhiteSpace size="md" />
                <WingBlank>
                    <Flex>
                        <Link to="/login">已有账号</Link>
                    </Flex>
                </WingBlank>
            </div >
        )
    }
}
