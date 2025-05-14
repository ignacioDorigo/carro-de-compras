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
    console.log("Agregar el producto: " + producto);
  };
  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Titulo texto={"Tienda"}/>
          <Productos
            productos={this.state.productos}
            agregarAlCarrito={this.agregarAlCarrito}
          />
        </Layout>
      </div>
    );
  }
}
