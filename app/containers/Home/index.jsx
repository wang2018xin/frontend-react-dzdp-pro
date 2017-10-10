import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import HomeHeader from '../../components/HomeHeader'
import Ad from './subpage/Ad'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        console.log('this.props', this.props);
        const {userinfo} = this.props;
        const {cityName} = userinfo;
        return (
            <div>
                <HomeHeader cityName={cityName}/>
                <hr />
                <Ad />
            </div>
        )
    }
}


// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);