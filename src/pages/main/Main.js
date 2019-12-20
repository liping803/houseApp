import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import Home from './Home'
import My from './My'
import History from './History'
import Shop from './Shop'
export default class Main extends Component {
    state = {
        selectedTab: 0,
        list: [
            { id: 0, title: '首页', icon: 'home' },
            { id: 1, title: '商城', icon: 'shop' },
            { id: 2, title: '消息', icon: 'history' },
            { id: 3, title: '我的', icon: 'My' }
        ]
    };
    renderContent(id) {
        switch (id) {
            case 0:
                return <Home />;
            case 1:
                return <Shop />;
            case 2:
                return <History />;
            case 3:
                return <My />;
            default:
                return <Home />
        }
    }
    //.am-tab-bar-bar
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#2c2c2c"
                    barTintColor="white"
                    tabBarPosition="bottom"   >
                    {
                        this.state.list.map((item, key) => {
                            const { title, id, icon } = item;
                            return (
                                <TabBar.Item
                                    title={title}
                                    key={id}
                                    icon={<div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: `url(${require('../../assets/images/' + icon + '.png')}) center center /  21px 21px no-repeat`
                                    }}
                                    />
                                    }
                                    selectedIcon={<div style={{ width: '22px', height: '22px', background: `url(${require('../../assets/images/' + icon + '-s.png')}) center center /  21px 21px no-repeat` }} />}
                                    selected={this.state.selectedTab === id}
                                    onPress={() => {
                                        this.setState({
                                            selectedTab: id,
                                        });
                                    }} >
                                    {this.renderContent(id)}
                                </TabBar.Item>
                            )
                        })
                    }
                </TabBar>
            </div >
        )
    }
}
