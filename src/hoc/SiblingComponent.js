import React, { Component } from 'react';

const withSibling = (SiblingComponent, OtherComponent) => {
    //Returning an anonymous class, a common way of implementing HOC
    return class extends Component {
        render() {

            if (OtherComponent) {
                return (
                    <div>
                        <SiblingComponent {...this.props} />
                        <OtherComponent {...this.props} />
                    </div>
                )
            } else {
                return (
                    <SiblingComponent {...this.props} />
                );
            }
        }
    }
}

export default withSibling;