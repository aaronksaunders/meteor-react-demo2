Project = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var data = {
      loading: true,
      project: null
    };
    var projectId = this.props.projectId;
    var handle = Meteor.subscribe('singleProject', projectId);
    if (handle.ready()) {
      data.project = Projects.findOne({_id: projectId});
      data.loading = false;
    }
    return data;
  },
  getContent() {
    if (!this.data.project) {
      return <h3>
        No Item Found
      </h3>
    }

    return <div>
      <h3>{this.data.project.title}</h3>
      <p>{this.data.project.content}</p>
    </div>;
  },
  render() {
    return <div>
      <a href="/">Back</a>
      {this.data.loading ? <p>Loading...</p> : this.getContent()}
    </div>
  }
});
