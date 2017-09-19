var AllItems = React.createClass({
  handleDelete: function(id) {
    this.props.handleDelete(id);
  },

  onUpdate: function(item) {
    this.props.onUpdate(item);
  },

  render() {
    var items= this.props.items.map((item) => {
      return (
        <div key={item.id}>
          <Item item={item}
                handleUpdate={this.onUpdate}
                handleDelete={this.handleDelete.bind(this, item.id)} />
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
