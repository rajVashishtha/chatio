import React from 'react';
import ChatPerson from '../../components/chatpersons/chatpersons.component';
import Chating from '../../components/chating/chating.component';
import {IconButton, TextareaAutosize} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import {socketConnect} from 'socket.io-react';
import Messenger from '../../components/messenger/Messenger/index'

class ChatPage extends React.Component{
  state={
    message:"",
    messages:[]
  }
  componentDidMount(){
    const {socket} = this.props;
    socket.on("message",(data)=>{
      this.setState({
        messages:[...this.state.messages, {id:2, message:data.data}]
      })
    })
  }

  handleChange = event =>{
    this.setState({[event.target.name]:event.target.value})
  }

  sendMessage = ()=>{
    console.log("working")
    const {socket} = this.props;
    
    socket.emit("send",this.state.message);
    this.setState({messages:[...this.state.messages, {id:1,message:this.state.message}],message:""})
  }


  render(){
    return(
      <div style={{display:"flex",flexDirection:"row"}}>
        {/* <div style={{width:"30%",position:"sticky",left:"0px"}}>
          <ChatPerson persons={[{messsage:"Aja", name:"pratham"}]} />
        </div>
        <div style={{width:"100%",paddingRight:"15px",paddingTop:"20px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
          <div >
            <Chating sender={false} message="Message that has been send by the person" />
            <Chating sender={true} message="Message that has been send by the person kndckndkncdn ckjdncjd" />
          {
            this.state.messages.map(item=>(<Chating sender={item.id === 2} message={item.message} />))
          }
          </div>
          <div style={{display:'flex',flexDirection:"row",alignItems:"flex-start",bottom:"5px",position:"sticky"}}>
            <TextareaAutosize aria-label="chat message" rowsMin={1} rowsMax={3} placeholder="Enter your message..." 
              style={{width:"95%",borderRadius:"20px", padding:"10px 5px",outline:"none"}} value={this.state.message} name="message"
              onChange={this.handleChange}
            />
            <IconButton onClick={this.sendMessage}>
              <SendIcon />
            </IconButton>
          </div>
        </div> */}
        <Messenger />
      </div>
    )
  }
}

export default socketConnect(ChatPage);