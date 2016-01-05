/**
 * Brand Details
 */
Brand = typeof Brand === 'undefined' ? {} : Brand;

Brand.Details = React.createClass({
  mixins: [ReactMeteorData, ReactBEM],
  getMeteorData() {
    let brandName = this.props.brandName;

    return {
      brand: Brands.findOne({
        brandName: brandName
      })
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
  bem_blocks: ['details'],
  bem_block_modifiers: ['brand'],
  bem_render() {
    if (this.data.brand == null) {
      return <div>Loading</div>;
    }

    return (
      <div bem_element="">
        <div role="row">
          <div role="col">
            <div role="card">
              <div role="card-content">
                <span role="card-title">{this.data.brand.brandName}</span>

                <BrandKeywords.View brand={this.data.brand} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
