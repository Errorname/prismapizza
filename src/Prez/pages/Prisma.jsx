import React from 'react'

const calcWidth = step => {
  switch (step) {
    case 2:
      return 100
    case 3:
      return 71
    case 4:
      return 42
    case 5:
      return 24
    default:
      return 0
  }
}

const Prisma = ({ step }) => (
  <div className="page-container">
    <div className="container page centered">
      <p className="title is-1 has-text-white">Prisma</p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '6em 0 8em 0',
          position: 'relative',
          width: '60%',
          visibility: step > 1 ? 'visible' : 'hidden'
        }}
      >
        <img src="images/prez/prisma.png" alt="" />
        <div
          style={{
            position: 'absolute',
            right: '0',
            height: '100%',
            width: calcWidth(step) + '%',
            backgroundColor: 'white'
          }}
        />
      </div>
    </div>
  </div>
)

Prisma.steps = 6

export default Prisma
