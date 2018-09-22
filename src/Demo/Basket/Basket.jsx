import React from 'react'

import { formatToEur } from '../PizzaCard'

import './Basket.css'

const Basket = ({ items, addItem, removeItem, sendOrder }) => {
  let total = items.reduce(
    (acc, { pizza, count }) => acc + pizza.price * count,
    0
  )

  return (
    <div className="column is-one-quarter">
      <div className="card basket">
        <div className="card-content has-text-centered">
          <p className="title is-4">Basket</p>
          {items.length === 0 && <p>No items yet !</p>}
        </div>
        {items.length > 0 && (
          <table className="table is-fullwidth">
            <tbody>
              {items.map(({ pizza, count }) => (
                <tr key={pizza.name} className="item-row">
                  <td>
                    <div className="count">
                      <a
                        className="button is-small"
                        onClick={() => addItem(pizza)}
                      >
                        +
                      </a>
                      <span>{count}</span>
                      <a
                        className="button is-small"
                        onClick={() => removeItem(pizza)}
                      >
                        -
                      </a>
                    </div>
                  </td>
                  <td>{pizza.name}</td>
                  <td>{formatToEur(pizza.price)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th />
                <th>Total:</th>
                <th>{formatToEur(total)}</th>
              </tr>
            </tfoot>
          </table>
        )}
        <div className="card-content has-text-centered">
          <a
            className="button is-success"
            disabled={items.length === 0}
            onClick={() => items.length > 0 && sendOrder()}
          >
            Order !
          </a>
        </div>
      </div>
    </div>
  )
}

export default Basket
