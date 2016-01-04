
ProjectsHome = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var data = {
      loading: true,
      project: null
    };
    var handle = Meteor.subscribe('allProjects');
    if (handle.ready()) {
      data.projects = Projects.find({}).fetch();
      data.loading = false;
    }
    return data;
  },

  getContent() {
    if (!this.data.projects) {
      return <h3>
        No Item(s) Found
      </h3>
    }

    var content = this.data.projects.map(_item => {
      var link = "/" +_item._id
      return <li key={_item._id}>{_item.title}&nbsp;[<a href={link}>Details</a>]</li>
    });
    return  <ul>{content}</ul>;

  },

  render() {
    return <div>
      <p>This is the home page of our blog</p>
      <div>
      {this.data.loading ? <p>Loading...</p> : this.getContent()}
      </div>
    </div>;
  }
});
