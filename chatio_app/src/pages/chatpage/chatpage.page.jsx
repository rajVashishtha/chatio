import React, { Component } from "react";
import { Card, Row, Col, ListGroup, Badge,Button } from "react-bootstrap";
import {Avatar} from '@material-ui/core';
import { socketConnect } from 'socket.io-react';
import "./chatpage.css";



class ChatPage extends Component {
constructor() {
super();
this.state = {
text_message:"",
friends: [
{
name: "John Doe",
avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-8",
message: "Hello, Are you there?",
when: "Just now",
toRespond: 1,
seen: false,
active: true
}
],
messages: [
{
author: "Brad Pitt",
avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6",
when: "12 mins ago",
message:
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},
{
author: "Lara Croft",
avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5",
when: "13 mins ago",
message:
" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
},
{
author: "Brad Pitt",
avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6",
when: "14 mins ago",
message:
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}
]
};
}
componentDidMount(){
  const {socket} = this.props;
  socket.on("message",(data)=>{console.log(data)})
}

handleChange = event =>{
    const {name, value} = event.target;
    this.setState({
        [name]:value
    })
}

sendMessage = event =>{
  const {socket} = this.props;
  socket.emit("send",this.state.text_message );
  this.setState({text_message:""});
}

componentWillUnmount(){
}

render() {
return (
<Card className="grey lighten-3 chat-room">
  <Card.Body>
    <Row className="px-lg-2 px-2">
      <Col md="6" xl="4" className="px-0 mb-2 mb-md-0">
        <h6 className="font-weight-bold mb-3 text-lg-left">Member</h6>
        <div className="white z-depth-1 p-3">
          <ListGroup className="friend-list">
            {this.state.friends.map(friend => (
            <Friend key={friend.name} friend={friend} />
            ))}
          </ListGroup>
        </div>
      </Col>
      <Col md="6" xl="8" className="pl-md-3 px-lg-auto mt-2 mt-md-0">
        <Row>
          <ListGroup className="list-unstyled pl-3">
            {this.state.messages.map(message => (
            <ChatMessage key={message.author + message.when} message={message} />
            ))}
            <li>
              <div className="form-group basic-textarea">
                <textarea className="form-control pl-2 my-0" id="exampleFormControlTextarea2" rows="3"
                  placeholder="Type your message here..." value={this.state.text_message} name="text_message" onChange={this.handleChange} />
                <Button
                    color="info"
                    rounded
                    size="sm"
                    className="float-right mt-4"
                    onClick={this.sendMessage}
                    >
                    Send
                </Button>
                    </div>
                  </li>
                </ListGroup>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

const Friend = ({
  friend: { name, avatar, message, when, toRespond, seen, active }
}) => (
  <ListGroup.Item
    href="#!"
    className="d-flex justify-content-between p-2 border-light"
    style={{ backgroundColor: active ? "#eeeeee" : "" }}
  >
    <Avatar
      tag="img"
      src={avatar}
      alt="avatar"
      circle
      className="mr-2 z-depth-1"
    />
    <div style={{ fontSize: "0.95rem" }}>
      <strong>{name}</strong>
      <p className="text-muted">{message}</p>
    </div>
    <div>
      <p className="text-muted mb-0" style={{ fontSize: "0.75rem" }}>
        {when}
      </p>
      {seen ? (
        <span className="text-muted float-right">
          check
        </span>
      ) : toRespond ? (
        <Badge color="danger" className="float-right">
          {toRespond}
        </Badge>
      ) : (
        <span className="text-muted float-right">
          Reply
        </span>
      )}
    </div>
  </ListGroup.Item>
);

const ChatMessage = ({ message: { author, avatar, when, message } }) => (
  <li className="chat-message d-flex justify-content-between mb-4">
    <Avatar
      tag="img"
      src={avatar}
      alt="avatar"
      circle
      className="mx-2 z-depth-1"
    />
    <Card>
      <Card.Body>
        <div>
          <strong className="primary-font">{author}</strong>
          <small className="pull-right text-muted">
            <i className="far fa-clock" /> {when}
          </small>
        </div>
        <hr />
        <p className="mb-0">{message}</p>
      </Card.Body>
    </Card>
  </li>
);

export default socketConnect(ChatPage);