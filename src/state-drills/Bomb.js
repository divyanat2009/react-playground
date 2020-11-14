import React, { Component } from 'react';

class Bomb extends Component {
    state = 
    { 
      count = 0,  
    }
    componentDidMount()
    {
      this.interval = setInterval(() =>{
        this.setState({
          count: this.state.count + 1
        })    
      }, 1000)
    } 
    componentWillMount(){
      clearInterval(this.interval)  
    }
    renderDisplay(){
      const {count} = this.state
      if (count >= 8){
        clearInterval(this.interval)
        return "BOOM!"
      }
      if (count % 2 === 0){
        return "Tick"  
      }
      else{
        return "Tock"
      }  
    }

    render() { 
      return (
        <div className ='CountdownBomb'>
          {this.renderDisplay()}    
        </div>
        )
    }
}
 
export default Bomb;