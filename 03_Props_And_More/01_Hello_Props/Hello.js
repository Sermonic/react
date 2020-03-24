class Hello extends React.Component {
  render() {
    // We can't to add to it, we can't update properties that already exist in that object.
    this.props.from = "Some name";
    this.props.age = 10;

    return (
      <p>
        Hi {this.props.to} from {this.props.from}.
      </p>
    );
  }
}
