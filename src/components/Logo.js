import React, { Component } from "react";

const styles = {
  logo: {
    color: "#04293d",
    fontSize: "2rem",
    cursor:"pointer"
  },
};

export default class Logo extends Component {
  render() {
    return <h2 style={styles.logo}>Shop</h2>;
  }
}
