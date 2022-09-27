import React from 'react';
import './App.css';
import Button from './components/Button';
import Slider from './components/Slider'
import Input from './components/Input';

/*
  Color palette used
https://coolors.co/a1deab-13121a-0e0d13-fbd273-2d2d39-191920
*/

class Box extends React.Component<React.PropsWithChildren>
{

  render()
  {
    return (
    <div className="box">
        {this.props.children}
    </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <h3>Password Generator</h3>
      <Box>
        
        <Input/>

      </Box>
      <Box>
        <p>Character length</p> <p id="char_output">0</p>
        <div className="break"></div>
        <Slider/>
        <div className="break"></div>
        <Button/>
      </Box>
    </div>
  );
}

export default App;
