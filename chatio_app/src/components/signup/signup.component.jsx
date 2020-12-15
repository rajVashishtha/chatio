import React from 'react'
import './signup.style.scss'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {Typography} from '@material-ui/core'
 
class SignUp extends React.Component{
    state={
        name:"",
        password:"",
        confirmPassword:"",
        email:"",
        match:0,
        emailExist :false,
    }
    handleChange = (event)=>{
        const {name,value} = event.target;
        this.setState({
            [name]:value
        },()=>{
            if(!this.state.confirmPassword && !this.state.password){
                this.setState({match:0})
                return;
            }
            if(this.state.confirmPassword.length >= this.state.password.length && this.state.confirmPassword !== this.state.password){
                this.setState({match:1})
                return;
            }
            if(this.state.confirmPassword !== this.state.password){
                this.setState({match:1})
            }else{
                console.log("match")
                this.setState({match:2})
            }
        })
    }
    handleSubmit = event =>{
        event.preventDefault();
        
    }
    render(){
        return(
            <div>
                <div className="form">
                <Form onSubmit={this.handleSubmit}>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Name
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control required type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control required type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control required type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Confirm
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control required type="password" placeholder="Confirm Password" name="confirmPassword" isValid={this.state.match === 2} isInvalid={this.state.match === 1} value={this.state.confirmPassword} onChange={this.handleChange} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Sign in</Button>
                    <Typography variant="caption" style={{marginLeft:"15px",cursor:"pointer"}} onClick={this.props.sectionChange}>Already have an account ? Sign in</Typography>
                    </Col>
                </Form.Group>
                </Form>
                </div>
            </div>
        )
    }
}
export default SignUp;