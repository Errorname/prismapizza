import React, { useState } from 'react'
import cn from 'classnames'

const Notification = ({ type, title, children }) => {
  const [opened, setOpened] = useState(true)

  return (
    <div className={cn('modal', { 'is-active': opened })}>
      <div className="modal-background" />
      <div className="modal-content">
        <article
          className={cn('message', {
            'is-success': type === 'success',
            'is-danger': type === 'error'
          })}
        >
          <div className="message-header">
            <p>{title}</p>
            <button className="delete" aria-label="delete" onClick={() => setOpened(false)} />
          </div>
          <div className="message-body">{children}</div>
        </article>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => setOpened(false)}
      />
    </div>
  )
}

export default Notification
