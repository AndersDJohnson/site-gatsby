import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { Icon } from 'react-fa'
import { linksById } from '../meta/nav'

import './css/index.css'

export default class Index extends React.Component {
  render () {
    return (
      <div className="adj-page-index">

        <div className="adj-center adj-hero">

          <img src={prefixLink('/images/logo.svg')} className="adj-hero-logo" />

          <h1 className="adj-hero-name">
            Anders D. Johnson
          </h1>

          <h2>
            Software developer & web enthusiast
          </h2>

          <nav>
            <Link to={prefixLink(linksById.resume.url)} className="adj-btn adj-btn-lg adj-btn-home">
              <Icon name={linksById.resume.icon} /> {linksById.resume.name}
            </Link>

            <Link to={prefixLink(linksById.work.url)} className="adj-btn adj-btn-lg adj-btn-home">
              <Icon name={linksById.work.icon} /> {linksById.work.name}
            </Link>

            {/*<Link to={prefixLink('/blog/')} className="adj-btn adj-btn-lg adj-btn-home">
              Blog
            </Link>*/}
          </nav>

        </div>

      </div>
    )
  }
}
