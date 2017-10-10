import React from 'react'

class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: '',  // search text value
        }
    }

    componentDidMount() {
        // 默认值
        this.setState({
            value: this.props.value || ''
        })
    }

    ChangeHandle(e) {
        // console.log('value===', e.target.value);
        // 监控变化
        this.setState({
            value: e.target.value
        })
    }

    KeyUpHandle(e) {
        // 监控enter事件
        if (e.keyCode !== 13) {
            return
        }
        this.props.enterHandle(e.target.value);
    }


    render() {
        return (
            <input
                type="text"
                placeholder="请输入关键字"
                onChange={this.ChangeHandle.bind(this)}
                onKeyUp={this.KeyUpHandle.bind(this)}
                value={this.state.value}/>
        )
    }

}

module.exports = SearchInput