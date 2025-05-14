import React, { Component } from "react";
import Producto from "./Producto";
import "./Productos.css";

const styles = {
  productos: {
    backgroundColor: "#FFFFFF",
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "10px",
  },
};

export default class Productos extends Component {
  render() {
    const { productos, agregarAlCarrito } = this.props;
    return (
      // style={styles.productos}
      <div className="productos">
        {productos.map((producto, index) => (
          <Producto
            producto={producto}
            key={index}
            agregarAlCarrito={agregarAlCarrito}
          />
        ))}
      </div>
    );
  }
}
