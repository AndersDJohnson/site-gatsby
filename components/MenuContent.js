import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { Icon } from 'react-fa'

export default class MenuContent extends React.Component {
  render () {

    var links = [
      {
        url: '/',
        name: 'Home',
        icon: 'home',
      },
      {
        url: '/resume/',
        name: 'Resume',
        icon: 'briefcase',
      },
      {
        url: '/work/',
        name: 'Work',
        icon: 'book',
      },
    ]

    var externalLinks = [
      {
        url: 'http://www.google.com/recaptcha/mailhide/d?k=016Hxt_X0bNon_-7v9lYYJ6A==&c=eIwgvd7-19GfJXTqKuG5gADRgTxRMhc8jm_JGgdqvA8=',
        name: 'Email',
        icon: 'envelope',
      },
      {
        url: 'tel:612-581-2003',
        name: 'Phone',
        icon: 'phone',
      },,
      {
        url: 'https://www.linkedin.com/pub/anders-johnson/18/822/446',
        name: 'LinkedIn',
        icon: 'linkedin',
      },
      {
        url: 'https://github.com/AndersDJohnson',
        name: 'GitHub',
        icon: 'github',
      },
      {
        url: 'https://twitter.com/AndersDJohnson',
        name: 'Twitter',
        icon: 'twitter',
      },
      {
        url: 'skype:AndersDJohnson?call',
        name: 'Skype',
        icon: 'skype',
      },
      {
        url: 'http://stackoverflow.com/users/851135/AndersDJohnson',
        name: 'Stack Overflow',
        icon: 'stack-overflow',
      },
      {
        url: 'https://keybase.io/AndersDJohnson',
        name: 'Keybase',
        icon: 'key',
      },
      {
        url: 'bitcoin:15cecHVJdswtx7vboBYYFBzEqQJhwYkdAW',
        name: 'Bitcoin',
        icon: 'btc',
      },
      {
        url: 'https://gitter.im/AndersDJohnson/chat',
        name: 'Chat',
        icon: 'comments',
      },
    ]

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
                <Link to={prefixLink(link.url)} className="adj-menu-item-link adj-link-unstyled" target="_blank">
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
