import React from 'react'

import { formatToEur } from '../PizzaCard'

import './Basket.css'

const Basket = ({ basket, removePizza, sendOrder }) => {
  let total = basket.reduce((acc, pizza) => acc + pizza.price, 0)

  return (
    <div className="column is-one-quarter">
      <div className="card basket">
        <div className="card-content has-text-centered">
          <p className="title is-4">Basket</p>
          {basket.length === 0 && <p>No items yet !</p>}
        </div>
        {basket.length > 0 && (
          <table className="table is-fullwidth">
            <tbody>
              {basket.map(pizza => (
                <tr key={pizza.name} className="item-row">
                  <td>{pizza.name}</td>
                  <td>{formatToEur(pizza.price)}</td>
                  <td>
                    {/* <div className="count">
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
                    </div> */}
                    <a
                      className="button is-small has-background-danger has-text-white"
                      onClick={() => removePizza(pizza)}
                    >
                      x
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>Total:</th>
                <th>{formatToEur(total)}</th>
                <th />
              </tr>
            </tfoot>
          </table>
        )}
        <div className="card-content has-text-centered">
          <a
            className="button is-success"
            disabled={basket.length === 0}
            onClick={() => basket.length > 0 && sendOrder()}
          >
            Order !
          </a>
        </div>
      </div>
    </div>
  )
}

export default Basket
