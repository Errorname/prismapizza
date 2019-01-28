import React from 'react'

import './PizzaCards.scss'

const formatToEur = x => x.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })

const PizzaCard = ({ pizza, onAddToBasket }) => (
  <div className="card pizza">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={'images/pizzas/' + pizza.img} alt="Pizza" />
      </figure>
    </div>
    <div className="card-content">
      <p className="title is-4">{pizza.name}</p>
      <p className="subtitle is-6">{pizza.description}</p>
    </div>
    <div className="card-footer">
      <span className="card-footer-item">
        <span className="price-label">{formatToEur(pizza.price)}</span>
      </span>
      <span className="card-footer-item shopping-cart" onClick={onAddToBasket}>
        <i className="fas fa-cart-plus fa-lg" />
      </span>
    </div>
  </div>
)

export default PizzaCard

export { formatToEur }
