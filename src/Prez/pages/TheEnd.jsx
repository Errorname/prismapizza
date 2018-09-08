import React from 'react'

const TheEnd = () => (
  <div className="page-container">
    <div className="container page centered">
      <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            width: '70%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '3em'
          }}
        >
          <p
            className="title is-1 has-text-white"
            style={{ marginBottom: '1em' }}
          >
            Thank you for listening
          </p>
          <p className="subtitle is-3 has-text-white">Questions?</p>
        </div>
        <div
          style={{
            width: '30%'
          }}
        >
          <img
            src="images/prez/delivery2.png"
            alt=""
            style={{ width: '60%' }}
          />
        </div>
      </div>
    </div>
  </div>
)

TheEnd.steps = 1

export default TheEnd
