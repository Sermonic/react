class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to="Ringo"
          from="Paul"
          bangs={4}
          img="https://images.unsplash.com/photo-1584553249204-5d4fb3affa0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80"
        />

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
