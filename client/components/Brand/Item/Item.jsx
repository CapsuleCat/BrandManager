/**
 * Brand Item
 */
Brand = typeof Brand === 'undefined' ? {} : Brand;

Brand.Item = React.createClass({
  mixins: [ReactMeteorData, ReactBEM],
  getMeteorData() {
    return {};
  },
  getInitialState() {
    return {};
  },
  getDefaultProps() {
    return {};
  },
  componentDidMount() {
    //
  },
  handleClick(e) {
    e.preventDefault();

    FlowRouter.go('/' + this.props.brand.brandName);
  },
  bem_blocks: ['item'],
  bem_block_modifiers: ['brand'],
  bem_render() {
    return (
      <a bem_element="" onClick={this.handleClick}>
        {this.props.brand.brandName}
        <span role="action"><i className="material-icons">send</i></span>
      </a>
    );
  }
});
