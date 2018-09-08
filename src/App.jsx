import React, { Fragment, Component } from 'react'
import cn from 'classnames'

import Navbar from './Navbar'
import Demo from './Demo'
import Prez from './Prez'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = (localStorage.PrismaPizza &&
      JSON.parse(localStorage.PrismaPizza)) || {
      mode: 'presentation',
      page: 1,
      step: 1,
      from: 'left'
    }
  }

  isDemoMode = () => this.state.mode === 'demo'

  shouldShowNavbar = () => {
    const { page, step } = this.state
    return page > 4 || (page === 4 && step >= 2)
  }

  toggleMode = () =>
    this.setPersistantState(state => ({
      mode: state.mode === 'demo' ? 'presentation' : 'demo'
    }))

  changePage = (page, step) => {
    if (!this.isDemoMode()) {
      const from = page > this.state.page ? 'left' : 'right'
      this.setPersistantState({ page, step, from })
    }
  }

  setPersistantState = arg => {
    this.setState(arg, () => {
      localStorage.PrismaPizza = JSON.stringify(this.state)
    })
  }

  render() {
    const { mode, page, step, from } = this.state
    return (
      <Fragment>
        <Navbar
          currentMode={mode}
          toggleMode={this.toggleMode}
          className={cn({
            'is-hidden': !this.shouldShowNavbar()
          })}
        />
        <Demo className={cn({ 'is-hidden': !this.isDemoMode() })} />
        <Prez
          className={cn({
            'is-hidden': this.isDemoMode(),
            'with-navbar': this.shouldShowNavbar()
          })}
          page={page}
          step={step}
          from={from}
          changePage={this.changePage}
        />
      </Fragment>
    )
  }
}

export default App
