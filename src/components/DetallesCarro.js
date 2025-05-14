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
  total: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "50px",
    padding: "5px 10px",
    borderBottom: "1px solid #E1E1E1",
    fontWeight: "bold",
  },
};

export default class DetallesCarro extends Component {
  calcularTotal(carro) {
    let total = carro.reduce(
      (acum, producto) => acum + producto.precio * producto.cantidad,
      0
    );
    return total;
  }
  render() {
    const { carro } = this.props;
    return (
      <ul style={styles.detalles}>
        {carro.map((producto, index) => (
          <Detalle producto={producto} key={index} />
        ))}
        <li style={styles.total}>Total: ${this.calcularTotal(carro)}</li>
      </ul>
    );
  }
}
