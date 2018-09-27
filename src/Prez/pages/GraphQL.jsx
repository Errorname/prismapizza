import React from 'react'

const GraphQL = ({ step }) => (
  <div className="page-container">
    <div className="container page centered">
      <p className="title is-1 has-text-white">GraphQL</p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '4em',
          marginBottom: '2em'
        }}
      >
        <div
          style={{
            width: '48%',
            backgroundColor: 'white',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            src="images/prez/documents.png"
            alt=""
            style={{
              position: 'absolute',
              width: '50%',
              visibility: step < 4 ? 'visible' : 'hidden'
            }}
          />
          <img
            src="images/prez/rest.png"
            alt=""
            style={{
              padding: '1em',
              visibility: step > 4 ? 'visible' : 'hidden'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              backgroundColor: 'var(--primary-dark)',
              //height: (step > 3 ? 0 : (100 / 3) * (4 - step)) + '%'
              height:
                step === 1
                  ? '100%'
                  : (step >= 4 && step < 8 ? (100 / 3) * (7 - step) : 0) + '%'
            }}
          />
        </div>
        <div
          style={{
            width: '48%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            position: 'relative',
            visibility: step === 3 || step > 7 ? 'visible' : 'hidden'
          }}
        >
          <img
            src="images/prez/graph.png"
            alt=""
            style={{
              position: 'absolute',
              width: '75%',
              visibility: step === 3 ? 'visible' : 'hidden'
            }}
          />
          <img
            src="images/prez/gql.png"
            alt=""
            style={{
              padding: '1em',
              visibility: step >= 8 ? 'visible' : 'hidden'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '12%',
              left: '15%',
              width: '50%',
              height: '39%',
              backgroundColor: 'white',
              visibility: step === 8 ? 'visible' : 'hidden'
            }}
          />
        </div>
      </div>
      <p
        style={{
          color: 'white',
          visibility: step > 1 ? 'visible' : 'hidden'
        }}
      >
        <i>Image credit: https://howtographql.com</i>
      </p>
    </div>
  </div>
)

GraphQL.steps = 9

export default GraphQL
