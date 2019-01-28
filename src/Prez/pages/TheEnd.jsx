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
          <p className="title is-1 has-text-white" style={{ marginBottom: '1em' }}>
            Thank you for listening
          </p>
          <p className="subtitle is-3 has-text-white">Questions?</p>
        </div>
        <div style={{ width: '30%' }}>
          <img src="images/prez/delivery2.png" alt="" style={{ width: '60%' }} />
        </div>
      </div>
    </div>
    <div className="footer">
      <span>
        <i className="fab fa-twitter fa-2x" /> @Errorname_
      </span>
      <span>
        <i className="fab fa-github fa-2x" /> Errorname
      </span>
      <span>
        <i className="fas fa-globe fa-2x" /> https://errorna.me
      </span>
    </div>
  </div>
)

TheEnd.steps = 1

export default TheEnd
