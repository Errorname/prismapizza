import React from 'react'

const LiveCode = ({ step }) => (
  <div className="page-container">
    <div
      className="container page centered"
      style={{ paddingBottom: step > 1 ? '3.25em' : '0' }}
    >
      <p className="title is-1 has-text-white">Let's build this!</p>
      <img
        src="images/prez/arrow.svg"
        alt=""
        style={{
          display: step >= 3 ? 'initial' : 'none',
          position: 'absolute',
          right: '20px',
          top: '-5px',
          width: '60px',
          transform: 'scaleY(-1) rotate(50deg)',
          zIndex: '100'
        }}
      />
    </div>
  </div>
)

LiveCode.steps = 3

export default LiveCode
