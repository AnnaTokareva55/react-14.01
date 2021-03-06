import React from "react";
import PropTypes from "prop-types";
import { Message } from "../Message/Message";
import "./MessageField.css";

export const MessageField = ({ messages }) => (
  <div className="MessageField">
    {messages.map((message, index) => (
      <Message {...message} key={index} />
    ))}
  </div>
);

MessageField.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message.PropTypes))
};
