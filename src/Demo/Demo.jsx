import React, { useReducer } from 'react'
import cn from 'classnames'

import PizzaList from './PizzaList'
import Basket from './Basket'

import pizzasJson from 'pizzas.json'

const Demo = ({ className, pizzas, withApollo, createOrder }) => {
  const [basket, rawDispatch] = useReducer((state, { type, pizza }) => {
    switch (type) {
      case 'add':
        return state.find(p => p.name === pizza.name) ? state : [...state, pizza]
      case 'remove':
        return state.filter(p => p.name !== pizza.name)
      case 'clear':
      default:
        return []
    }
  }, [])

  const dispatch = type => pizza => rawDispatch({ type, pizza })

  const sendOrder = async () => {
    if (!withApollo) {
      alert("There is no backend yet, let's write it!")
      return
    }

    const pizzasIds = basket.map(pizza => pizza.id)

    await createOrder({
      variables: { pizzasIds }
    })

    dispatch('clear')()
  }

  return (
    <div className={cn('container', className)}>
      <div className="section columns">
        <PizzaList addPizza={dispatch('add')} pizzas={pizzas || pizzasJson} />
        <Basket basket={basket} removePizza={dispatch('remove')} sendOrder={sendOrder} />
      </div>
    </div>
  )
}

export default Demo
