import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo'

import LocalStore from '../util/localStore'
import {CITYNAME} from '../config/localStoreKey'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            initDone: false,    // loading标识
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.initDone
                        ? this.props.children
                        : <div>loading...</div>
                }
            </div>
        )
    }

    componentDidMount() {
        // 获取LS中的城市信息
        let cityName = LocalStore.getItem(CITYNAME)
        if (cityName == null) {
            cityName = '沈阳';
        }
        // 把当前城市信息存到redux中
        this.props.userInfoActions.update({
            cityName: cityName
        })
        // 隐藏loading
        this.setState({
            initDone: true
        })
    }
}


// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);