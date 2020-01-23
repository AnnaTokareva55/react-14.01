import React from "react";
import ReactDom from "react-dom";
import PropTypes from 'prop-types';

export default class Message extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        sender: PropTypes.string.isRequired
    };
 
    render() {
        return <div>{ this.props.sender }: { this.props.text }</div>
    }
 }
 

