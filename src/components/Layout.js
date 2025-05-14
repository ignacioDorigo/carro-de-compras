import React, { Component } from "react";

const styles = {
  layout: {
    padding: "0px 5px",
  },
  container: {
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
  },
};

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div style={styles.layout}>
        <div style={styles.container}>{children}</div>
      </div>
    );
  }
}
