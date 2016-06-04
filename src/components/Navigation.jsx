import React from 'react'
import ReactDOM from 'react-dom'
import NavigationItem from './NavigationItem'

export default React.createClass({
  setSelectedItem: function(item) {
    this.props.itemSelected(item)
  },
  render: function() {
    var items = this.props.items
      .sort(function(a, b) {
        // Sort by # of subscribers in descending order
        return b.data.subscribers - a.data.subscribers;
      })
      .map(function(item) {
        return (
          <NavigationItem
            item={item}
            itemSelected={this.setSelectedItem}
            key={item.data.id}
            selected={item.data.url === this.props.activeUrl} />
        )
      }, this)

    return (
      <div className="navigation">
        <div className="header">Navigation</div>
        <ul>
            {items}
        </ul>
      </div>
    )
  }
})