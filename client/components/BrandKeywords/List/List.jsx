/**
 * BrandKeywords List
 */
BrandKeywords = typeof BrandKeywords === 'undefined' ? {} : BrandKeywords;

BrandKeywords.List = React.createClass({
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
  bem_block_modifiers: ['brand-keywords'],
  bem_render() {
    return (
      <div bem_element="">
        <p>Hello</p>
      </div>
    );
  }
});
