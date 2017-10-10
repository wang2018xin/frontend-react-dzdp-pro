import React from 'react'
import {getAdData} from '../../../fetch/home/home'
import HomeAd from '../../../components/HomeAd';


class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [], // 广告数据
        }
    }

    componentDidMount() {
        console.log('this.state.data.length==', this.state.data.length)
        // 获取广告数据
        const result = getAdData();
        result.then(res => {
            return res.json()
        }).then(json => {
            const data = json;
            if (data.length) {
                this.setState({
                    data: data
                })
            }
        }).catch(e => {
            if (__DEV__) {
                console.error('首页广告模块获取数据报错, ', e.message);
            }
        })
    }


    render() {
        return (
            <div>
                {
                    this.state.data.length
                        ? <HomeAd data={this.state.data} />
                        : <div>loading...</div>
                }
            </div>
        )
    }
}

module.exports = Ad