import React from 'react';
import {Toolbar, Avatar} from '@material-ui/core';
import ToolbarButton from '../ToolbarButton/index';
import Compose from '../Compose/compose.component';
import Message from '../Message/message.component';
import './MessageList.css';
import { socketConnect } from 'socket.io-react';
import { SendOutlined } from '@material-ui/icons';

class MessageList extends React.Component{
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.myId = 2
  }
  state={
    messages:[],
    message:"",

  }
  componentDidMount(){
    const {socket} = this.props;
    const addable = {
      id:this.state.messages.length+1,
      isMine:false,
      startSequence:false,
      endSequence:false,
      showTimestamp:new Date().toISOString()
    }
    socket.on("message",data=>{
      this.setState({messages:[...this.state.messages,{...addable,id:data.id,isMine:data.id === this.myId, showData:!(data.id === this.myId)
         ,data:data.data}]},()=>{this.myRef.current.scrollIntoView();});
    });
    this.myRef.current.scrollIntoView();
  }

  handleChange = event =>{
    this.setState({message:event.target.value});
  }

  sendMessage = event =>{
    const {socket} = this.props;
    const addable = {
      id:2,
      isMine:true,
      startSequence:false,
      endSequence:false,
      showTimestamp:new Date().toISOString(),
      data:this.state.message
    }
    this.setState({messages:[...this.state.messages,addable]},()=>{this.myRef.current.scrollIntoView()})
    socket.emit("send",this.state.message);
    this.setState({message:""});
    this.myRef.current.scrollIntoView();
  }

  render(){
    return(
        <div className="message-list">
          <Toolbar
            leftItems={<Avatar src="https://picsum.photos/200/300" />}
            title="Contact Name"
          />
  
          <div className="message-list-container">
          {
            this.state.messages.map(item=>(
              <Message
                key={item.id}
                isMine={item.isMine}
                startsSequence={item.startsSequence}
                endsSequence={item.endsSequence}
                showTimestamp={item.showTimestamp}
                data={item.data}
              />
            ))
          }
          <div ref={this.myRef} /></div>
  
          <Compose value={this.state.message} handleChange={this.handleChange} rightItems={[
            <ToolbarButton onClick={this.sendMessage} key="send_message" icon={<SendOutlined />} />,
          ]}/>
        </div>
    )
  }
}

export default socketConnect(MessageList);