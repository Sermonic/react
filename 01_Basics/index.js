class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App Class Component</h1>
        <h2>Hello!</h2>
        <Hello />
      </div>
    );
  }
}

const Hello = () => {
  return (
    <div>
      <p>Function Component</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
