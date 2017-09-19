var Body = React.createClass({
  getInitialState() {
    return { items: [] }
  },

  componentDidMount: function() {
    $.ajax({
      url: '/api/v1/items.json',
      dataType: 'json',
      success: function(data) {
        this.setState({ items: data });
      }.bind(this)
    });
  },

  handleSubmit(item) {
    var newState = this.state.items.concat(item);
    this.setState({ items: newState });
  },

  render() {
    return (
      <div>
        <NewItem handleSubmit={this.handleSubmit} />
        <AllItems items={this.state.items} />
      </div>
    )
  }
});
