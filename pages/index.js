import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import './css/index.css'

export default class Index extends React.Component {
  render () {
    return (
      <div>

        <div className="adj-center adj-hero">

          <img src={prefixLink('/images/logo.svg')} className="adj-hero-logo" />

          <h1 className="adj-hero-name">
            Anders D. Johnson
          </h1>

          <nav>
            <Link to={prefixLink('/resume/')} className="adj-btn adj-btn-lg adj-btn-home">
              Resume
            </Link>

            <Link to={prefixLink('/work/')} className="adj-btn adj-btn-lg adj-btn-home">
              Work
            </Link>

            <Link to={prefixLink('/blog/')} className="adj-btn adj-btn-lg adj-btn-home">
              Blog
            </Link>
          </nav>

          <p>
            Software developer passionate about the web.
          </p>

        </div>

      </div>
    )
  }
}
