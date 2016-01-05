/**
 * BrandKeywords Item
 */
BrandKeywords = typeof BrandKeywords === 'undefined' ? {} : BrandKeywords;

BrandKeywords.Item = React.createClass({
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
  bem_blocks: ['item'],
  bem_block_modifiers: ['brand-keywords'],
  bem_render() {
    return (
      <div bem_element="">
        <p>Hello</p>
      </div>
    );
  }
});
