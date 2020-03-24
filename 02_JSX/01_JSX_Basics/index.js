class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>JSX</h1>
        <img src="https://images.unsplash.com/photo-1470246973918-29a93221c455?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
