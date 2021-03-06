import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./ChatForm.css";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export const ChatForm = ({ onSendMessage }) => {
  const [name, setName] = useState("Я");
  const [content, setContent] = useState("");
  const classes = useStyles();

  const handleClik = () => {
    onSendMessage({ name, content });
    setContent("");
  };

  const handleKeyUp = () => {
    if (event.keyCode === 13 && event.ctrlKey) {
      onSendMessage({ name, content });
      setContent("");
    }
  };

  return (
    <div className="ChatForm">
      <TextField
        className="TextField"
        value={content}
        onChange={({ currentTarget: { value } }) => setContent(value)}
        onKeyUp={handleKeyUp}
        id="outlined-multiline-static"
        label="Мое сообщение"
        multiline
        autoFocus
        rows="1"
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={handleClik}>
        Отправить
      </Button>
    </div>
  );
};

ChatForm.propTypes = {
  onSendMessage: PropTypes.func.isRequired
};

/*
export class ChatForm extends Component {
  state = {
    name: "Я",
    content: ""
  };

  textarea = React.createRef();

  componentDidMount() {
    this.textarea.current.focus();
  }

  handleInput = ({ currentTarget: { value } }) => {
    this.setState(state => ({ content: value }));
  };

  handleClik = () => {
    const { name, content } = this.state;
    this.props.onSendMessage({ name, content });
  };

  render() {
    return (
      <div>
        <span>
          <strong>Мое сообщение</strong>
        </span>
        <textarea
          name="content"
          value={this.state.content}
          onChange={this.handleInput}
          ref={this.textarea}
        />
        <button onClick={this.handleClik}>Отправить</button>
      </div>
    );
  }
}
*/
