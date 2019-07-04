import React from "react";
import PropTypes from "prop-types";

export default class App extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired
    };

    render() {
        return <div>{this.props.name}</div>;
    }
}
