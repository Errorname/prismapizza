import React, { Component } from 'react'
import cn from 'classnames'

import PizzaList from './PizzaList'
import Basket from './Basket'

import pizzasJson from 'pizzas.json'

class Demo extends Component {
  state = {
    basket: []
  }

  addPizza = pizza =>
    this.setState(state => ({
      basket:
        state.basket.filter(p => p.name === pizza.name).length === 0
          ? [...state.basket, pizza]
          : state.basket
    }))

  removePizza = pizza =>
    this.setState(state => ({
      basket: state.basket.filter(p => p.name !== pizza.name)
    }))

  sendOrder = async () => {
    if (!this.props.withApollo) {
      alert("There is no backend yet, let's write it!")
      return
    }

    const pizzasIds = this.state.basket.map(pizza => pizza.id)

    await this.props.createOrder({
      variables: { pizzasIds, userId: this.props.userId }
    })

    this.setState({ items: [] })
  }

  render() {
    const { className, pizzas } = this.props
    const { basket } = this.state
    return (
      <div className={cn('container', className)}>
        <div className="section columns">
          <PizzaList addPizza={this.addPizza} pizzas={pizzas || pizzasJson} />
          <Basket
            basket={basket}
            removePizza={this.removePizza}
            sendOrder={this.sendOrder}
          />
        </div>
      </div>
    )
  }
}

export default Demo
