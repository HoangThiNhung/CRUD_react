var AllItems = React.createClass({
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

  render() {
    var items= this.state.items.map((item) => {
      console.log(item);
      return (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      )
    });

    return(
      <div>
        {items}
      </div>
    )
  }
});
