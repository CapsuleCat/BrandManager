/**
 * Brand View
 */
Brand = typeof Brand === 'undefined' ? {} : Brand;

Brand.View = React.createClass({
  mixins: [ReactMeteorData, ReactBEM],
  getMeteorData() {
    return {
      brands: Brands.find({}).fetch()
    };
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
  bem_blocks: ['view'],
  bem_block_modifiers: ['brand'],
  bem_render() {
    return (
      <div bem_element="">
        <div role="row">
          <div role="form-wrapper">
            <Brand.Create />
          </div>
        </div>
        <Brand.List brands={this.data.brands} />
      </div>
    );
  }
});
