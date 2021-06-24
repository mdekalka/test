import React from 'react';
import PropTypes from 'prop-types';

import css from 'styled-jsx/css';

import {
  Link
} from 'react-router-dom';

import logo from './logo.svg';

const styled =  undefined;


// const sty = css.resolve`
//   .text {
//     display: block;
//     color: blue;
//     font-size: 26px;
//     position: relative;

//   }

//   .text::before {
//     content: '\00feff';
//     color: red;
//   }

//   .box {
//     content: '\00feff';
//   }

//   .header {
//     text-transform: uppercase;
//     color: gray;
//     font-size: ${show}
//   }

//   .error  {
//     color: red;
//     font-size: 30px;
//     width: ${styled};
//   }
// `

const a= 100;


const Test = ({ show }) => {
  return (
    <div>
      <div className="text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, harum veniam, laboriosam cupiditate, corporis iste hic blanditiis officia vel in iusto rerum amet qui sunt quos ducimus ullam sint nobis aliquam dicta officiis assumenda. Sit adipisci, dolore eos ullam tempora cumque eligendi. Iste quasi recusandae aut dolorem ipsam quos voluptatibus modi accusamus vero nisi, quaerat reiciendis necessitatibus, odio natus deleniti assumenda odit omnis non ullam, eaque tempore dignissimos placeat. Illum illo debitis, sunt consequatur accusamus provident ipsam, aperiam doloribus soluta deleniti placeat. Maxime.

        {show && <div className="error">show me please</div>}
        <div className="box">make div</div>
      </div>
      <style jsx>{`
      .text {
        display: block;
        color: blue;
        font-size: 26px;
        position: relative;
      }
      
        .text::before {
          content: '${'\\00feff'}';
          color: red;
        }
      
        .box {
          position: relative;
          width: 200px;
          height: 200px;
          background: yellow;
        }

        .box::before {
          content: '${'\\274c'}';
        }

      
      .header {
        text-transform: uppercase;
        color: gray;
        font-size: ${show}
      }
      
      .error  {
        color: red;
        font-size: 30px;
        width: ${styled};
      }
      `}</style>
    </div>
  )
}

// content: '\2192';

const Header = () => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to Universal React</h2>
    <Test />
    <style jsx>{`
      .App-header {
        color: green;
        width: 100%;
      }
    `}</style>
  </div>
)

export const PageNotFound = (props, context = {}) => {
  if (context.setStatus) {
    context.setStatus(404)
  }
  
  return (
    <div>
      <h1 className="header">
        Page not found
      </h1>
      <Link to="/">
        Go home
      </Link>
      <style jsx>{`
      .header {
        font-size: 40px;
        color: red;
      }
    `}</style>
    </div>
  )
}
PageNotFound.contextTypes = {
  setStatus: PropTypes.func.isRequired
}

const TestRouterPage = ({ match }) => (
  <div className="App-intro">
    <p>
      Test page {match.params.id}
    </p>
    <p>
    <Link to={`/`}>
      Home
    </Link>
    </p>
    <p>
      <Link to={`/aljlskaklksdkfaj falsflasd`}>
        Go to non-existent page
      </Link>
    </p>
  </div>
)

const Home = () => (
  <div className="App-intro">
    <p>To get started, edit <code>src/shared/App.js</code> and save to reload.</p>
    <Link to={`/test/123`}>
      Test the router
    </Link>
  </div>
)

const App = () => (
  <div className="App">
    <button className="btn">cliek me</button>
    <Test />
    {/* <Route path="/" component={ ({ match }) => (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/test/:id" component={TestRouterPage}/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    )}/> */}
    <style jsx global>{`
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      background-color: #222;
    }
    
    .App {
      text-align: center;
    }
    
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
      height: 80px;
    }
    
    
    .App-intro {
      font-size: large;
    }
    
    @keyframes App-logo-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    
    `}</style>
  </div>
)




export default App
