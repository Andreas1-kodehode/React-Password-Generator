import React, {Component} from 'react';
import './Button.css';

export default class Button extends Component<{}>
{
    render(): React.ReactNode
    {
        return (
            <button className="button">
                GENERATE
            </button>
        )
    }
}