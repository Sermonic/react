class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to='Ringo'
          from='Paul'
          bangs={5}
        />
        <Hello
          to='George'
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
