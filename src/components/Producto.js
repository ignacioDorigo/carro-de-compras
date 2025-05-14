import React, { Component } from "react";

const styles = {
  producto: {
    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
    width: "100%",
  },
  btnAgregarCarrito: {
    backgroundColor: "#04293c",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    padding: "10px",
    cursor:"pointer"
  },
  img: { width: "100%" },
};

export default class Producto extends Component {
  render() {
    const { producto, agregarAlCarrito } = this.props;
    return (
      <div style={styles.producto}>
        <img
          style={styles.img}
          src={producto.img}
          alt={producto.nombre}
          title={producto.nombre}
        />
        <h3>{producto.nombre}</h3>
        <p>${producto.precio} x Kg</p>
        <button
          style={styles.btnAgregarCarrito}
          onClick={() => agregarAlCarrito(producto)}
        >
          Agregar al carrito
        </button>
      </div>
    );
  }
}
