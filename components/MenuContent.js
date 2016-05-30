import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class MenuContent extends React.Component {
  render () {

    var links = [
      {
        path: '/',
        name: 'Home',
      },
      {
        path: '/resume/',
        name: 'Resume',
      },
      {
        path: '/work/',
        name: 'Work',
      },
    ]

    return (
      <div id="outer-container">
        <nav>
          <ul>
            {links.map(link =>
              <li>
                <Link to={prefixLink(link.path)} className="adj-link-unstyled" onClick={this.props.onLinkClick}>
                  {link.name}
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    )
  }
}
