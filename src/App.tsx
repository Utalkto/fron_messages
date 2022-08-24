import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


import Leftbar from './components/Left-bar/Leftbar.component'
import Chat from './components/chat/Chat.component'

import { Component } from 'react'


class App extends Component {
  state = {
    contactName: '',
    phoneNumber: '',
    messages: [],
    loaded: false
  }


  changeChat = (contactName:string, phoneNumber:string) => {
    this.setState({
      contactName: contactName,
      phoneNumber: phoneNumber
    })

    fetch(`http://localhost:9000/api/v1/messages?client_number=+1${phoneNumber}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        messages: data.messages,
        loaded: true
      })
      console.log(data.messages)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row clearfix">
        <Leftbar changeChat={this.changeChat} />
        <Chat contactName={this.state.contactName} 
        phoneNumber={this.state.phoneNumber} 
        messages={this.state.messages} 
        loaded={this.state.loaded}
        />
      </div>
      </div>
      </div>
    )
  }

}



export default App
