FlowRouter.route('/', {
  action() {
    ReactLayout.render(MainLayout, {content: <ProjectsHome />});
  }
});

FlowRouter.route('/:projectId', {
  action(params) {
    ReactLayout.render(MainLayout, {content: <Project {...params} />});
  }
});
