import React, { Component } from "react";
import Producto from "./Producto";

export default class Productos extends Component {
  render() {
    const { productos, agregarAlCarrito } = this.props;
    return (
      <div>
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
