import React, { Component } from 'react'
import cn from 'classnames'

import PizzaList from './PizzaList'
import Basket from './Basket'

class Demo extends Component {
  state = {
    items: []
  }

  addItem = item =>
    this.setState(state => {
      if (state.items.filter(x => x.item.name === item.name).length === 0)
        return { items: [...state.items, { item, count: 1 }] }
      return {
        items: state.items.map(
          x => (x.item.name === item.name ? { ...x, count: x.count + 1 } : x)
        )
      }
    })

  removeItem = item =>
    this.setState(state => ({
      items: state.items
        .map(
          x => (x.item.name === item.name ? { item, count: x.count - 1 } : x)
        )
        .filter(x => x.count > 0)
    }))

  render() {
    const { className } = this.props
    const { items } = this.state
    return (
      <div className={cn('container', className)}>
        <div className="section columns">
          <PizzaList addItem={this.addItem} />
          <Basket
            items={items}
            addItem={this.addItem}
            removeItem={this.removeItem}
          />
        </div>
      </div>
    )
  }
}

export default Demo
