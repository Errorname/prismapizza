import React from 'react'

import { PizzaCard } from '../'

import pizzas from 'pizzas.json'

const PizzaList = ({ addItem }) => (
  <section className="column is-three-quarters">
    <div className="columns is-multiline">
      {pizzas.map(pizza => (
        <div className="column is-one-quarter" key={pizza.name}>
          <PizzaCard pizza={pizza} onAddToBasket={() => addItem(pizza)} />
        </div>
      ))}
    </div>
  </section>
)

export default PizzaList
