import React from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import {Typography} from '@material-ui/core'

class SignIn extends React.Component{
    state={
        email:"",
        password:""
    }
    handleChange = event =>{
        const {name, value} = event.target;
        this.setState({
            [name]:value
        })
    }
    render(){
        return(
            <div>
                <div className="form">
                <Form onSubmit={this.handleSubmit}>
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
                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Sign in</Button>
                    <Typography variant="caption" style={{marginLeft:"15px"}} onClick={this.props.sectionChange}>Don't have an account ? Sign up</Typography>
                    </Col>
                </Form.Group>
                </Form>
                </div>
            </div>
        )
    }
}
export default SignIn;