import React from "react"
import ReactDom from "react-dom"



// const Chat = ({messages}) => {
//     const sendMessage = (event) => {
//         console.log('Button was clicked', event)
//         messages.push({name:"User", content: "New message"})
//         ReactDom.render(<Chat messages={messages}/>, document.getElementById("app"))
//     }
//     return <>
//     <MessageList messages={messages}/>
//     <input type="submit" value="New message" onClick={sendMessage}></input>
//     </>
// }

// ReactDom.render(<Chat messages={messages}/>, document.getElementById("app"))

// import {Counter} from "./components/Counter"
import {MessageList} from "./components/MessageList"

ReactDom.render(<MessageList />, document.getElementById("app"))

