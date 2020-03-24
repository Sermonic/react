class JSXDemo extends React.Component {
  render() {
    return React.createElement("h1", null, "This is Header!");
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
