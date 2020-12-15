import React from 'react'
import SignUp from '../../components/signup/signup.component'
import SignIn from '../../components/signin/signin.component'
import {Typography} from '@material-ui/core'

class IntroPage extends React.Component{
    state={
        login:true
    }
    changeForm = ()=>{
        this.setState({
            login:!this.state.login
        })
    }
    render(){
        return(
            <div>
                {
                    this.state.login ? (
                        <SignIn sectionChange={this.changeForm} />
                    ):(<SignUp sectionChange={this.changeForm} />)
                }
                
            </div>
        )
    }
}
export default IntroPage