import React, {Component} from 'react';
import './Input.css';

export default class Input extends Component<{}>
{


    render()
    {
        return (
            <input id="pw_output" className="input" type="text" placeholder="Password" >
                
            </input>
        )
    }
}