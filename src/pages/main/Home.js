import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { WhiteSpace, Grid, Carousel, Flex, WingBlank } from 'antd-mobile';

const data = [
    { icon: 'xinfang.png', text: '新房' },
    { icon: 'zufang.png', text: '租房' },
    { icon: 'ershoufang.png', text: '二手房' },
    { icon: 'ershoufang-act.png', text: '租房' },
    { icon: 'ershoufang-act.png', text: '租房' },
    { icon: 'liaotian.png', text: '租房' },
    { icon: 'maichu.png', text: '租房' },
    { icon: 'zufang.png', text: '租房' },
].map((item, i) => ({
    icon: require(`../../assets/images/${item.icon}`),
    text: item.text
}));
class Home extends Component {
    state = {
        data: [0, 1, 2],//轮播图的图
        imgHeight: 176,
        city: '定位中...',
    }

    componentDidMount() {
        window.AMap.plugin('AMap.CitySearch', () => {
            var citySearch = new window.AMap.CitySearch()
            citySearch.getLocalCity((status, result) => {
                if (status === 'complete' && result.info === 'OK') {
                    this.setState({ city: result.city })
                }
            })
        })
    }
    //点击访问小图标对应的页面
    goto = (path) => {
        this.props.history.push(`/${path}`);
    }
    render() {
        return (

            <div >
                <Flex justify='around' style={{ width: '100%', height: 60, background: '#fff' }}>
                    <div onClick={() => { this.goto('cityList') }}>{this.state.city}▼</div>
                    <Flex onClick={() => { this.goto("search") }} style={{ background: '#f6f6f6', width: 260, height: 40, border: '1px solid #f6f6f6', borderRadius: 20 }}>
                        <img alt="搜索" src={require('../../assets/images/seach.png')} />
                        <span style={{ paddingLeft: 10 }}>搜索内容</span>
                    </Flex>
                    <Flex onClick={() => { this.goto('map') }} justify='center' align='center' style={{ width: 25 }}>
                        <img alt='地图' src={require('../../assets/images/map.png')} />
                    </Flex>
                </Flex>
                {/* 轮播 */}
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`${require('../../assets/images/timg-' + val + '.jpg')}`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                {/* 分类 */}
                <Grid data={data}
                    onClick={_el => console.log(_el)} />

                {/* 房产全百科 */}
                <div style={{ marginTop: 20, background: '#fff', padding: 10 }}>
                    <WingBlank>
                        <WhiteSpace size="md" />
                        <Flex >  <span style={{ color: '#49CF8A', fontSize: 20, fontWeight: 'bold' }}>房产全百科</span><span style={{ color: '#ccc', paddingLeft: 10, }}>专业的买房软件</span>
                        </Flex>
                        <WhiteSpace size="md" />
                        <Flex justify="between">
                            <Flex direction="column">
                                <img style={{ width: 40, height: 40 }} alt="" src={`${require('../../assets/images/jisuanji.png')}`} />
                                <WhiteSpace size="xs" />
                                <span style={{ color: '#ccc', paddingTop: 10 }}>我要贷款</span>
                            </Flex>
                            <Flex direction="column">
                                <img style={{ width: 40, height: 40 }} alt="" src={`${require('../../assets/images/jisuanji.png')}`} />
                                <WhiteSpace size="xs" />
                                <span style={{ color: '#ccc', paddingTop: 10 }}>我要贷款</span>
                            </Flex>
                            <Flex direction="column">
                                <img style={{ width: 40, height: 40 }} alt="" src={`${require('../../assets/images/jisuanji.png')}`} />
                                <WhiteSpace size="xs" />
                                <span style={{ color: '#ccc', paddingTop: 10 }}>我要贷款</span>
                            </Flex>
                            <Flex direction="column">
                                <img style={{ width: 40, height: 40 }} alt="" src={`${require('../../assets/images/jisuanji.png')}`} />
                                <WhiteSpace size="xs" />
                                <span style={{ color: '#ccc', paddingTop: 10 }}>我要贷款</span>
                            </Flex>
                        </Flex>
                    </WingBlank>
                </div>
                {/* 猜你喜欢 */}
                <div style={{ padding: 15, background: '#fff' }}>
                    <span style={{ fontSize: 18 }}>猜你喜欢</span>
                    <div style={{ display: 'flex', height: 100 }}>
                        <img style={{ width: '30%', height: 100 }} alt="" src={`${require('../../assets/images/timg-2.jpg')}`} />
                        <div style={{ flex: 1 }} >
                            <Flex justify='between'>
                                <span style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>绿地锦天府</span>
                                <span style={{ color: '#f00', fontSize: 20 }} >19000/平</span>
                            </Flex>
                            <div style={{ margin: 10 }}>锦江区 东客站</div>
                            <div style={{ margin: 10 }}>二室一厅 72平</div>
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}
export default withRouter(Home)