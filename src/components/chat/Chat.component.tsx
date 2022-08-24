import { Component } from "react";

import LeftMessage from "../left-message/LeftMessage.component";
import RightMessage from "../right-message/RightMessage.component";


class Chat extends Component {

    state = {
        messageToSend: ''
    }


    sendMessage(message:string, phoneNumber:string) {

        console.log(message);
        console.log(phoneNumber);

        fetch(`http://localhost:9000/api/v1/messages/`, {
            method: 'POST',
            body: JSON.stringify({
                message: message,
                to: `+1${phoneNumber}`
            }),
            headers: {'Content-type': 'application/json; charset=UTF-8'}

            
        }).then(res => res.json())
        .then(data => {
            if (data.message === 'success') {
                this.setState({messageToSend: ''})

                this.props.messages.push({
                    body: message,
                    date_sent: "just now",
                    from: `orinoco`
                })

                alert('Message sent!')
            } else {
                alert('Error sending message')
            }
        })
    }


    handleMessageChange = (message:string) => {
        this.setState({
            messageToSend: message
        })
    }

    render () {
        return (
            <div className="col-12 col-lg-7 col-xl-9">
                <div className="py-2 px-4 border-bottom d-none d-lg-block">
                    <div className="d-flex align-items-center py-1">
                        <div className="position-relative"></div>
                        <div className="flex-grow-1 pl-3"><strong>{this.props.contactName}  </strong>
                            <div className="text-muted small"><em></em></div>
                        </div>
                    </div>
                </div>
                <div className="position-relative">
                    {
                        this.props.loaded ?
                            <div className="chat-messages p-4" style={{maxHeight: '500px'}}>

                                
                            {

                                this.props.messages.map(message => {
                                    if (message.from === 'orinoco') {
                                        return (
                                        <RightMessage message={message.body} timeSent={message.date_sent} />
                                        )
                                    } else {
                                        return (
                                            <LeftMessage message={message.body} timeSent={message.date_sent} contactName={this.props.contactName} />
                                        )
                                    }
                                })
                            }
                        

                            </div>

                        :

                            <div className="chat-messages p-4">
                                <h1>Select a contact to start chatting</h1>
                            </div>
                    }
                    
                </div>

                    {
                        this.props.loaded &&
                        <div className="flex-grow-0 py-3 px-4 border-top">
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Type your message"
                                onChange={(e) => this.handleMessageChange(e.target.value)}
                                value={this.state.messageToSend}
                                />
                                <button className="btn btn-primary"
                                onClick={() => this.sendMessage(this.state.messageToSend, this.props.phoneNumber)}>
                                >
                                    Send
                                </button>
                            </div>
                        </div>

                    }
              
                    
                
                
            </div>
        )
    }


}


export default Chat;