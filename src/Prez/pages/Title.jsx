import React from 'react'

const TIME = 30

const titles = {
  fr: `VOTRE SERVEUR GRAPHQL LIVRÉ CHEZ VOUS EN MOINS DE ${TIME}MIN`,
  en: `YOUR GRAPHQL BACKEND DELIVERED HOME IN ${TIME}MIN`
}

const Title = () => (
  <div className="page-container">
    <div className="container page centered">
      <p className="title is-1 has-text-white">PRISMAPIZZA</p>
      <p className="subtitle is-3 has-text-white" style={{ textAlign: 'center' }}>
        {titles.en}
      </p>
      <img
        src="images/prez/delivery.png"
        style={{
          maxWidth: '25%',
          maxHeight: '40%',
          marginTop: '5%'
        }}
        alt=""
      />
    </div>
  </div>
)

Title.steps = 1

export default Title
