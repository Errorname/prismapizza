import React, { Component } from 'react'
import cn from 'classnames'

class Notification extends Component {
  state = {
    open: true
  }
  close = () => this.setState({ open: false })
  render() {
    const { type, title, children } = this.props
    return (
      <div className={cn('modal', { 'is-active': this.state.open })}>
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
              <button
                className="delete"
                aria-label="delete"
                onClick={this.close}
              />
            </div>
            <div className="message-body">{children}</div>
          </article>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={this.close}
        />
      </div>
    )
  }
}

export default Notification
