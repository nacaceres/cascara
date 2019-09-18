import React from "react";
import Viz from "./NavioComp.js";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      datos : "https://www.datos.gov.co/resource/fgp3-4nha.json",
      navios: []
    };
    this.link = React.createRef();
    this.received = this.received.bind(this);
  }

  handleChange(link) {
    this.setState({ datos: link.target.value });
  }
  received()
  {
    let actual = this.state.navios;
    actual.push(this.state.datos);
    this.setState({
      navios: actual
    });
  }

  renderNavios(){
    return this.state.navios.map ( link => <Viz datos={link} actualizar={this.state.actualizar}/> );
  }

  render(){
    return(
      <div>
        <h1>Herramienta para aplicar navio a JSONs de datos abiertos</h1>
        <input
          type="text"
          value={this.state.datos}
          placeholder="Insert Link"
          onChange={this.handleChange.bind(this)}
          ref={this.link}
          size="50"
        />
        <button className="btn btn-primary" onClick={this.received}>
              Agregar
        </button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {this.renderNavios()}
      </div>
    );
  }
}

export default App;