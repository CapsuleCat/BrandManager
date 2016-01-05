/**
 * BrandKeywords View
 */
BrandKeywords = typeof BrandKeywords === 'undefined' ? {} : BrandKeywords;

BrandKeywords.View = React.createClass({
  mixins: [ReactBEM],
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
  bem_block_modifiers: ['brand-keywords'],
  bem_render() {
    return (
      <div bem_element="">
        <h2>Your Brand Keywords</h2>

        <BrandKeywords.List keywords={this.props.brand.keywords} />
      </div>
    );
  }
});
