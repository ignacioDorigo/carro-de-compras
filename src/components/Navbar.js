import React, { Component } from "react";
import Logo from "./Logo";
import Carro from "./Carro";

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    height: "100px",
    alignItems: "center",
    padding: "0px 50px",
    boxShadow: "0px 5px 8px #E1E1E1",
    marginBottom: "50px",
  },
};

export default class Navbar extends Component {
  render() {
    const { carro, mostrarOcultarCarro, eliminarProductoCarrito } = this.props;
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Carro
          carro={carro}
          visibilidadCarro={this.props.visibilidadCarro}
          mostrarOcultarCarro={mostrarOcultarCarro}
          eliminarProductoCarrito={eliminarProductoCarrito}
        />
      </nav>
    );
  }
}
