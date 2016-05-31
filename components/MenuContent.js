import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { Icon } from 'react-fa'
import { links, externalLinks } from '../meta/nav'

export default class MenuContent extends React.Component {
  render () {
    return (
      <div id="outer-container">
        <nav>
          <ul className="adj-list-unstyled">
            {links.map(link =>
              <li key={link.url} className="adj-menu-item">
                <Link to={link.url} className="adj-menu-item-link adj-link-unstyled" onClick={this.props.onLinkClick}>
                  <Icon name={link.icon}  className="adj-menu-item-icon" />
                  {link.name}
                </Link>
              </li>
            )}
          </ul>

          <ul className="adj-list-unstyled">
            {externalLinks.map(link =>
              <li key={link.url} className="adj-menu-item">
                <Link to={link.url} className="adj-menu-item-link adj-link-unstyled" target="_blank">
                  <Icon name={link.icon} className="adj-menu-item-icon" />
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
