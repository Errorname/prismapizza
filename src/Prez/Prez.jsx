import React, { Component } from 'react'
import cn from 'classnames'

import { Title, GraphQL, Prisma, LiveCode, More, TheEnd } from './pages'

import './Prez.css'

const pages = [Title, GraphQL, Prisma, LiveCode, More, TheEnd]

class Prez extends Component {
  onKeyDown = e => {
    let { page, step, changePage } = this.props

    switch (e.code) {
      case 'ArrowLeft':
        page--
        step = 1
        break
      case 'ArrowRight':
        page++
        step = 1
        break
      case 'ArrowUp':
        step--
        if (step === 0 && page > 1) {
          page--
          step = pages[page - 1].steps
        }
        break
      case 'ArrowDown':
        step++
        if (step > pages[page - 1].steps) {
          page++
          step = 1
        }
        break
      default:
        return
    }

    page = Math.max(page, 1)
    page = Math.min(page, pages.length)
    step = Math.max(step, 1)

    changePage(page, step)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  render() {
    const { page, step, from, className } = this.props
    return (
      <div className={cn('prez', className)}>
        <section className="pages" style={{ left: (page - 1) * -100 + 'vw' }}>
          {pages.map((Page, i) => {
            const localStep =
              i + 1 === page
                ? step
                : i + 1 < page && from === 'left'
                  ? Page.steps
                  : 1
            return <Page step={localStep} key={i} />
          })}
        </section>
      </div>
    )
  }
}

export default Prez
