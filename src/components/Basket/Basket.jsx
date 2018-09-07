import React from 'react'

import './Basket.css'

const formatToEur = x =>
  x.toLocaleString('en-US', { style: 'currency', currency: 'EUR' })

const Basket = ({ items, addItem, removeItem }) => {
  let total = items.reduce(
    (acc, { item, count }) => acc + item.price * count,
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
              {items.map(({ item, count }) => (
                <tr key={item.name} className="item-row">
                  <td>
                    <div className="count">
                      <a
                        className="button is-small"
                        onClick={() => addItem(item)}
                      >
                        +
                      </a>
                      <span>{count}</span>
                      <a
                        className="button is-small"
                        onClick={() => removeItem(item)}
                      >
                        -
                      </a>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{formatToEur(item.price)}</td>
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
          <a className="button is-success" disabled={items.length === 0}>
            Order !
          </a>
        </div>
      </div>
    </div>
  )
}

export default Basket
