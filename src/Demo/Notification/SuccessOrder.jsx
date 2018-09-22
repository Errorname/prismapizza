import React from 'react'

import Notification from './Notification'

const SuccessOrder = ({ id }) => (
  <Notification type="success" title={`Order n°: ${id}`}>
    <p className="title is-3 has-text-centered">Thank you for your order!</p>
    <p className="title is-5 has-text-centered">
      We hope you enjoyed ordering with PrismaPizza
    </p>
    <div className="has-text-centered">
      <img src="images/prez/delivery.png" style={{ width: '200px' }} alt="" />
    </div>
  </Notification>
)

export default SuccessOrder
