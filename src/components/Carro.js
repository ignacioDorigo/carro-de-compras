import React, { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetallesCarro from "./DetallesCarro";

const styles = {
  divSvg: {
    backgroundColor: "#349827",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  svgCarro: {},
  divCarro: {
    position: "relative",
  },
};

export default class Carro extends Component {
  render() {
    const {
      carro,
      visibilidadCarro,
      mostrarOcultarCarro,
      eliminarProductoCarrito,
    } = this.props;
    return (
      <div style={styles.divCarro}>
        <div style={styles.divSvg} onClick={mostrarOcultarCarro}>
          <svg
            style={styles.svgCarro}
            xmlns="http://www.w3.org/2000/svg"
            width={28}
            height={28}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            color="#FFFFFF"
          >
            {" "}
            <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />{" "}
            <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />{" "}
            <path d="M17 17h-11v-14h-2" /> <path d="M6 5l14 1l-1 7h-13" />{" "}
          </svg>
          {visibilidadCarro ? null : <BubbleAlert carro={carro} />}
        </div>
        {visibilidadCarro ? (
          <DetallesCarro
            carro={carro}
            eliminarProductoCarrito={eliminarProductoCarrito}
          />
        ) : null}
      </div>
    );
  }
}
