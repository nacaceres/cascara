import React from "react";
import navio from "navio";

class Viz extends React.Component {
  async setUp(){
    let data = [];
    const filas = 1000;
    while (true) {
      let res = await fetch(this.props.datos+"?$limit="+filas+"&$offset="+data.length).then(res=> res.json());
      if (res.length===0){
        break;
      }
      data = data.concat(res);
    }
    let nv = new navio(this.myIn,600);
    nv.data(data);
    nv.addAllAttribs();

  }
  componentDidMount(){
    this.setUp();
  }
  render(){
    return(
      <div>
        <h3> Fuente: {this.props.datos}</h3>
        <br></br>
        <div ref={myIn => this.myIn=myIn}/>
      </div>
    );
  }

}
export default Viz;