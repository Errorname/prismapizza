import React, { Component } from 'react'
import cn from 'classnames'

import PizzaList from './PizzaList'
import Basket from './Basket'

// import pizzas from 'pizzas.json'

class Demo extends Component {
  state = {
    items: []
  }

  addItem = pizza =>
    this.setState(state => {
      if (state.items.filter(x => x.pizza.name === pizza.name).length === 0)
        return { items: [...state.items, { pizza, count: 1 }] }
      return {
        items: state.items.map(
          x => (x.pizza.name === pizza.name ? { ...x, count: x.count + 1 } : x)
        )
      }
    })

  removeItem = pizza =>
    this.setState(state => ({
      items: state.items
        .map(
          x => (x.pizza.name === pizza.name ? { pizza, count: x.count - 1 } : x)
        )
        .filter(x => x.count > 0)
    }))

  //sendOrder = () => alert("There is no backend yet, let's write it!")

  sendOrder = async () => {
    const items = this.state.items.map(item => ({
      pizzaId: item.pizza.id,
      count: item.count
    }))
    const userId = 'cjmdron86000n0a12daucnblb'
    await this.props.createOrder({ variables: { items, userId } })
    this.setState({ items: [] })
  }

  render() {
    const { className, pizzas } = this.props
    const { items } = this.state
    return (
      <div className={cn('container', className)}>
        <div className="section columns">
          <PizzaList addItem={this.addItem} pizzas={pizzas} />
          <Basket
            items={items}
            addItem={this.addItem}
            removeItem={this.removeItem}
            sendOrder={this.sendOrder}
          />
        </div>
      </div>
    )
  }
}

export default Demo
