import React from 'react'

const fromTop = step => 32 - (step - 1) * 2.4 + 'vh'

const positioning = (currentStep, step) => ({
  position: 'relative',
  color: 'black !important',
  transition: '1s',
  top: currentStep >= step ? fromTop(currentStep) : '100vh'
})

const items = [
  'Subscriptions',
  'Authentication',
  'Testing',
  'Database introspection',
  'Prisma roadmap',
  'Multi-tenancy',
  'Case study: "FAQ" at Zenika',
  '...'
]

const More = ({ step }) => (
  <div className="page-container">
    <div
      className="container page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <p
        className="title is-1 has-text-white"
        style={{
          margin: '1em 0',
          position: 'relative',
          transition: '1s',
          top: fromTop(step)
        }}
      >
        But there is more!
      </p>
      {items.map((item, i) => (
        <p key={item} className="subtitle is-4 has-text-white" style={positioning(step, i + 2)}>
          {item}
        </p>
      ))}
    </div>
  </div>
)

More.steps = items.length + 1

export default More
