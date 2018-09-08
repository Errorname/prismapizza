import React from 'react'

import './PizzaCards.css'

const PizzaCard = ({ pizza, onAddToBasket }) => (
  <div className="card pizza">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={'images/pizzas/' + pizza.img} alt="Pizza" />
      </figure>
    </div>
    <div className="card-content">
      <p className="title is-4">{pizza.name}</p>
      <p className="subtitle is-6">{pizza.subtitle}</p>
    </div>
    <div className="card-footer">
      <span className="card-footer-item">
        <span className="price-label">{pizza.priceLabel}</span>
      </span>
      <a className="card-footer-item shopping-cart" onClick={onAddToBasket}>
        <i className="fas fa-cart-plus fa-lg" />
      </a>
    </div>
  </div>
)

export default PizzaCard
