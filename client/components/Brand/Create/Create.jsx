/**
 * Brand Create
 */
Brand = typeof Brand === 'undefined' ? {} : Brand;

Brand.Create = React.createClass({
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
  handleSubmit(e) {
    e.preventDefault();

    let brandName = this.refs.brandName.value;

    if (brandName.trim() !== '') {
      Meteor.call('Brand.Create', brandName, function (err, response) {
        this.refs.brandName.value = '';
        $(this.refs.brandName).blur();
      }.bind(this));
    }
  },
  bem_blocks: ['create'],
  bem_block_modifiers: ['brand'],
  bem_render() {
    return (
      <div bem_element="">
        <form onSubmit={this.handleSubmit}>
          <input
              type="text"
              name="brandName"
              ref='brandName'
              placeholder="Your brand name" />
        </form>
      </div>
    );
  }
});
