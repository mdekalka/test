import React from 'react'
import { StaticRouter as Router } from 'react-router'
import Context from 'react-context-component'

// import { flushToHTML } from 'styled-jsx/server'

// import piu from 'styled-jsx/css'

import render from './render'
import App from '../shared/App'

const ErrorPage = () => <h1>Oops there was an error</h1>

const reactApp = (req, res) => {
  const context = {}
  let HTML
  let status = 200

  const setStatus = (newStatus) => {
    status = newStatus
  }

  // "<rootDir>/src/**/__tests__/**/*.js?(x)",

  // const width = '100px';
  // const superStyles = piu.global`
  //   body {
  //     background: red;
  //   }

  //   .btn {
  //     padding: 20px;
  //     border: 1px solid black;
  //     width: ${width};
  //     background: gray;
  //   }
  // `

  // const styles = flushToHTML()

  // console.log(styles, 'FIRST STYLES')

  // const newStyles = styles.replace('</style>', `${superStyles}</style>`)


  // console.log(newStyles, 'FIRST newStyles')
  // const final = styles + superStyles;

  try {
    HTML = render(
      <Context setStatus={setStatus}>
        <Router context={{}} location={req.url}>
          <App />
        </Router>
      </Context>
    )
  } catch (error) {
    // console.log(error, 'AA RRR')
    HTML = render(ErrorPage)
    status = 500
  }

  if (context.url) {
    res.redirect(301, context.url)
  } else {
    res.status(status).send(HTML)
  }
}

export default reactApp
