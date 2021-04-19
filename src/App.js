import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
        fullName:"Rihab EL JAYEZ",
        profession:"Full-Stack JavaScript student",
        bio:"My name is Rihab EL JAYEZ and I am a full-stack Web Application Developer student currently living in Monastir, TUNISIA. I have a Bachelor of Science in Computer Science from FSM, and my primary focus and inspiration for my studies is Web Development. ",
        show:false,
        image:<img className="photo"  src="myPhoto.jpg"></img>,
        cont:0
    }
  }
  show=()=> {
    this.setState({show:!this.state.show})
  }
    componentDidMount=() =>{
    setInterval(()=>{
  this.setState(prevState=>({cont: prevState.cont +1,}));
      },1000);
  };
  render() {
    return (
      <div>
        
        {this.state.show &&<div>
        {this.state.image}
        </div>}
        {this.state.show &&<h1>{this.state.fullName}</h1>}
                {this.state.show &&<h3>{this.state.profession}</h3>}
                {this.state.show && <p className="bioPage">{this.state.bio}</p>}
                <button className="buttonCLK" onClick={this.show}>show me</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p className="counter" >Counter:{this.state.cont}</p>
        
      </div>
    )
  }
}



export default App;
