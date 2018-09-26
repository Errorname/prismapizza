import React from 'react'

import PizzaCard from '../PizzaCard'

const PizzaList = ({ pizzas, addPizza }) => (
  <section className="column is-three-quarters">
    <div className="columns is-multiline">
      {pizzas.map(pizza => (
        <div className="column is-one-quarter" key={pizza.name}>
          <PizzaCard pizza={pizza} onAddToBasket={() => addPizza(pizza)} />
        </div>
      ))}
    </div>
  </section>
)

export default PizzaList
