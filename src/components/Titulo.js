import React, { Component } from "react";

const styles = {
  titulo: {
    color: "#04293d",
    fontSize: "2.4rem",
  },
};

export default class Titulo extends Component {
  render() {
    const { texto } = this.props;
    return <h1 style={styles.titulo}>{texto}</h1>;
  }
}
