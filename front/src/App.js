import React from "react";
import navio from "navio";

class Viz extends React.Component {
  setUp(){
    let nv = new navio(this.,600);
    nv.data(this.props.datos);
    return nv;
  }
  componentDidMount(){
    fetch("https://www.datos.gov.co/resource/fgp3-4nha.json")
      .then(res => res.json())
      .then(data => this.setState({
        datos: data
      }));
  }
  render(){
    return(
      <div ref={myIn => this.myIn=myIn}>
      </div>
    );
  }

}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      datos : []
    };
  }

  componentDidMount(){
    fetch("https://www.datos.gov.co/resource/fgp3-4nha.json")
      .then(res => res.json())
      .then(data => this.setState({
        datos: data
      }));
  }


  render(){
    return(
        <h1>parcial</h1>
        <input
          type="text"
        />
        <Viz datos = {this.state.datos}/>
    );
  }
}

export default App;