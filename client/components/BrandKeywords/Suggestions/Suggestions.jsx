/**
 * BrandKeywords Suggestions
 */
BrandKeywords = typeof BrandKeywords === 'undefined' ? {} : BrandKeywords;

BrandKeywords.Suggestions = React.createClass({
  mixins: [ReactMeteorData, ReactBEM],
  getMeteorData() {
    return {};
  },
  getInitialState() {
    return {};
  },
  getDefaultProps() {
    return {
      keywords: []
    };
  },
  componentDidMount() {
    //
  },
  bem_blocks: ['suggestions'],
  bem_block_modifiers: ['brand-keywords'],
  bem_render() {
    return (
      <div bem_element="">
        <p>Hello</p>
      </div>
    );
  }
});
