/**
 * Navigation
 */
Navigation = React.createClass({
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
  bem_blocks: ['navigation'],
  bem_render() {
    return (
      <nav bem_element="">
        <div className="nav-wrapper">
          <div className="row">
            <a href="/" className="brand-logo">Brand Manager</a>
          </div>
        </div>
      </nav>
    );
  }
});
