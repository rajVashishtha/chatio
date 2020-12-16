import React from 'react';
import './Compose.css';
import { TextareaAutosize } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles'



export default function Compose(props) {
    return (
      <div className="compose">
        
        <TextareaAutosize onChange={props.handleChange} value={props.value} id="compose_message" placeholder="Enter your message.." className="compose-input"  rows={1} autoFocus={true} rowsMax={3} />

        {
          props.rightItems
        }
      </div>
    );
}