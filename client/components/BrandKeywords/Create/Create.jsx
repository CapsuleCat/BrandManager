/**
 * BrandKeywords Create
 */
BrandKeywords = typeof BrandKeywords === 'undefined' ? {} : BrandKeywords;

BrandKeywords.Create = React.createClass({
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
  bem_blocks: ['create'],
  bem_block_modifiers: ['brand-keywords'],
  bem_render() {
    return (
      <div bem_element="">
        <p>Hello</p>
      </div>
    );
  }
});
