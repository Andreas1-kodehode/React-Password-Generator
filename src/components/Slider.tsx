import React from 'react';
import './Slider.css';
export default class Slider extends React.Component
{
    onChange(e : React.ChangeEvent<HTMLInputElement>)
    {
        let elem = document.getElementById("char_output");
        if(elem)
            elem.innerText = e.currentTarget.value;
    }

    render(): React.ReactNode
    {
        return(
            <div className="slider_container">
                <input onChange={this.onChange} className="slider" type="range" min="1" max="32" defaultValue="1" id="char_length"></input>
            </div>
        )
    }
}