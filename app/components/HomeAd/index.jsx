import React from 'react'

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {data} = this.props;
        return (
            <div>
                {
                    data.map((item, index) => {
                        const attr = {
                            src: item.img,
                            alt: item.title
                        }
                        return (
                            <div key={index}>
                                <img width="20" height="20" {...attr} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

module.exports = HomeAd