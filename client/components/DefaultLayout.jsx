DefaultLayout = React.createClass({
  render() {
    return (
      <div>
        <Navigation />
        {this.props.content}
      </div>
    );
  }
})