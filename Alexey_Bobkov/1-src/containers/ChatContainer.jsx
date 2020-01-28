import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat.jsx'

export class ChatContainer extends Component {
    state = {
        messages: [
            { name: 'Name1', content: 'Text1' },
            { name: 'Name2', content: 'Text2' },
            { name: 'Name3', content: 'Text3' },
            { name: 'Name4', content: 'Text4' }

        ],
    }


    handleSendMessage = (message) => {
        this.setState((state) => ({messages: [...state.messages, message]}))
    }

    componentDidUpdate(){

        if (this.state.messages[this.state.messages.length-1].name != 'Robot' ){
            setTimeout(()=>
                this.handleSendMessage({name: 'Robot', content: 'dont touch me' }),2000);
        } else {
            var classrobot = document.getElementsByClassName('Message')[document.getElementsByClassName('Message').length-1];
            classrobot.className =  classrobot.className + ' Robot';
        }
    }

    render () {
        const {messages} = this.state;

        return <Chat {...{messages, onSendMessage: this.handleSendMessage}} />
    }
}