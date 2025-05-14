import React, { Component } from "react";

const styles = {
  bubble: {
    position: "absolute",
    backgroundColor: "#e5745b",
    color: "#FFFFFF",
    padding: "5px 10px",
    borderRadius: "50%",
    left: -20,
  },
};

export default class BubbleAlert extends Component {
  cantidadProductosEnCarrito(carro) {
    const cant = carro.reduce((acum, x) => acum + x.cantidad, 0);
    if (cant > 9) {
      return "9+";
    } else if (cant < 1) {
      return null;
    } else {
      return cant;
    }
  }
  render() {
    const { carro } = this.props;
    return (
      <div
        style={
          this.cantidadProductosEnCarrito(carro) != null ? styles.bubble : null
        }
      >
        {this.cantidadProductosEnCarrito(carro)}
      </div>
    );
  }
}
