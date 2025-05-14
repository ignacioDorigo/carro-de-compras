import React, { Component } from "react";
import Detalle from "./Detalle";

const styles = {
  detalles: {
    position: "absolute",
    right: 0,
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    listStyle: "none",
    margin: 0,
    padding: 0,
    boxShadow: "0px 5px 8px rgba(0,0,0,0.3)",
  },
};

export default class DetallesCarro extends Component {
  render() {
    const { carro } = this.props;
    return (
      <ul style={styles.detalles}>
        {carro.map((producto, index) => (
          <Detalle producto={producto} key={index} />
        ))}
      </ul>
    );
  }
}
