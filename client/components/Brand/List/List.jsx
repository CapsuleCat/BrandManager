/**
 * Brand List
 */
Brand = typeof Brand === 'undefined' ? {} : Brand;

Brand.List = React.createClass({
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
  bem_blocks: ['list'],
  bem_block_modifiers: ['brand'],
  bem_render() {
    return (
      <div bem_element="">
        {this.props.brands.map(function (brand) {
          return <Brand.Item key={brand._id} brand={brand} />
        })}
      </div>
    );
  }
});
