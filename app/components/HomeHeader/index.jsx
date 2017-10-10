import React from 'react'
import SearchInput from '../SearchInput';

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    enterHandle(value) {
        console.log('search text input value =', value);
    }

    render() {
        console.log('HomeHeader--this.props---', this.props);
        const {cityName} = this.props;
        return (
            <div>
                <div>cityname: {cityName}</div>
                <div><a>登录</a></div>
                <div><SearchInput value='' enterHandle={this.enterHandle.bind(this)}/></div>
            </div>
        )
    }
}

module.exports = HomeHeader