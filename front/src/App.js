import React from "react";
import navio from "navio";

class Viz extends React.Component {
  setUp(){
    let nv = new navio(this.props.referencia,600);
    nv.data(this.props.datos);
    return nv;
  }
  render(){
    return(
      <div>
        {this.setUp()}
      </div>
    );
  }

}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      datos : undefined
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
      <div>
        <h1>parcial</h1>
        <Viz referencia={myIn => this.myIn=myIn} datos={this.state.datos}/>
      </div>
    );
  }
}

export default App;