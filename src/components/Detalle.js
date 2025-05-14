import React, { Component } from "react";

const styles = {
  detalle: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "300px",
    height: "100px",
    padding: "5px 20px",
    borderBottom: "1px solid #E1E1E1",
  },
  detalleImg: {
    height: "50px",
  },
};

export default class Detalle extends Component {
  render() {
    const { producto } = this.props;
    return (
      <li style={styles.detalle}>
        <img
          style={styles.detalleImg}
          src={producto.img}
          alt={producto.nombre}
          title={producto.nombre}
        />
        <p>{producto.nombre}</p>
        <p>{producto.cantidad}</p>
      </li>
    );
  }
}
