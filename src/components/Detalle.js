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
    position: "relative",
    overflow: "hidden",
  },
  detalleImg: {
    height: "50px",
  },
  btnEliminarProducto: {
    position: "absolute",
    right: "0",
    top: "0",
    border: "none",
    padding: "5px 10px",
    backgroundColor: "red",
    color: "#FFFFFF",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default class Detalle extends Component {
  render() {
    const { producto, eliminarProductoCarrito } = this.props;
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
        <button
          style={styles.btnEliminarProducto}
          onClick={()=>eliminarProductoCarrito(producto)}
        >
          X
        </button>
      </li>
    );
  }
}
