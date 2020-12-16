import React from 'react';
import './chating.style.scss';

class Chating extends React.Component{
    render(){
        const {sender, message} = this.props;
        const sender_style = {backgroundColor:"#4e7f53",borderRadius:"10px",borderTopRightRadius:"0px",color:"white"};
        const non_sender_style = {backgroundColor:"#efefef",borderRadius:"10px",borderTopLeftRadius:"0px",color:"#01ab01"};
        return(
            <div className="chating_main_container" style={sender?(null):({flexDirection: "row-reverse"})} >
                <div className="chating_secondary_container" style={sender?(non_sender_style):(sender_style)}>
                    <div className="chating_for_message" >
                        <span>{message}</span>
                    </div>
                    <div className="chating_for_time">
                        <span>{new Date().toUTCString()}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chating;