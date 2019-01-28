import React from 'react'

import { formatToEur } from '../PizzaCard'

import './Basket.scss'

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
                <tr key={pizza.name}>
                  <td>{pizza.name}</td>
                  <td>{formatToEur(pizza.price)}</td>
                  <td>
                    <span
                      className="button is-small has-background-danger has-text-white"
                      onClick={() => removePizza(pizza)}
                    >
                      x
                    </span>
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
          <span
            className="button is-success"
            disabled={basket.length === 0}
            onClick={() => basket.length > 0 && sendOrder()}
          >
            Order !
          </span>
        </div>
      </div>
    </div>
  )
}

export default Basket
