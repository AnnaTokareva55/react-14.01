//console.warn("Привет! сейчас ",(new Date).valueOf());
import React from "react";
import ReactDom from "react-dom";
import MessageField from "./components/MessageField"

ReactDOM.render(<MessageField/>, document.getElementById('root'));