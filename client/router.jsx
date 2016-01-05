FlowRouter.route('/', {
  action: function() {
    ReactLayout.render(DefaultLayout, {
      content: (<Brand.View />)
    });
  }
});

FlowRouter.route('/:brandName', {
  action: function (params) {
    ReactLayout.render(DefaultLayout, {
      content: (<Brand.Details brandName={params.brandName} />)
    });
  }
});
