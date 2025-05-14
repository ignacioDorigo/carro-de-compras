import "./App.css";

import React, { Component } from "react";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Titulo from "./components/Titulo";

export default class App extends Component {
  state = {
    productos: [
      { nombre: "Tomate", precio: 1500, img: "/productos/tomate.jpg" },
      { nombre: "Lechuga", precio: 1000, img: "/productos/lechuga.jpg" },
      { nombre: "Arbejas", precio: 1750, img: "/productos/arbejas.jpg" },
      { nombre: "Arbejas", precio: 1750, img: "/productos/arbejas.jpg" },
      { nombre: "Arbejas", precio: 1750, img: "/productos/arbejas.jpg" },
    ],
    carro: [],
    visibilidadCarro: false,
  };
  agregarAlCarrito = (producto) => {
    const { carro } = this.state;
    const estaEnCarrito = carro.find((x) => x.nombre === producto.nombre);
    if (!estaEnCarrito) {
      return this.setState({ carro: [...carro, { ...producto, cantidad: 1 }] });
    } else {
      const nuevoCarro = carro.map((x) =>
        x.nombre === producto.nombre ? { ...x, cantidad: x.cantidad + 1 } : x
      );
      return this.setState({ carro: nuevoCarro });
    }
  };
  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Titulo texto={"Tienda"} />
          <Productos
            productos={this.state.productos}
            agregarAlCarrito={this.agregarAlCarrito}
          />
        </Layout>
      </div>
    );
  }
}
