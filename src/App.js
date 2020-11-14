import React, { Component } from 'react';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import Accordion from'./state-drills/Accordion';

class App extends Component {
  
  render() { 
    return (  
      <div className="App">
        <h2>Hello World!</h2>
        <HelloWorld></HelloWorld>
        <h2>Bomb</h2>
        <Bomb></Bomb>
        <h2>RouletteGun</h2>
        <RouletteGun bulletInChamber={8}></RouletteGun>
        <Accordion></Accordion>
      </div>
    );
  }
}
 
export default App;