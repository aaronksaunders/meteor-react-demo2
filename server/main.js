Meteor.startup(function() {
  // code to run on server at startup

  if (true) {
    Projects.insert({
      title: "Hello World Post - " + new Date(),
      content: "This is the content",
      startDate: new Date()
    });
  }
});


Meteor.publish('singleProject', function(_projectId) {
  check(_projectId, String);
  return Projects.find({
    _id: _projectId
  });
});
Meteor.publish('allProjects', function() {
  return Projects.find({});
});
