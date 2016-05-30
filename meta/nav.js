import _ from 'lodash'

export var links = [
  {
    id: 'home',
    url: '/',
    name: 'Home',
    icon: 'home',
  },
  {
    id: 'resume',
    url: '/resume/',
    name: 'Resume',
    icon: 'briefcase',
  },
  {
    id: 'work',
    url: '/work/',
    name: 'Work',
    icon: 'desktop',
  },
]

export var linksById = _.mapKeys(links, link => link.id)

export var externalLinks = [
  {
    id: 'email',
    url: 'http://www.google.com/recaptcha/mailhide/d?k=016Hxt_X0bNon_-7v9lYYJ6A==&c=eIwgvd7-19GfJXTqKuG5gADRgTxRMhc8jm_JGgdqvA8=',
    name: 'Email',
    icon: 'envelope',
  },
  {
    id: 'phone',
    url: 'tel:612-581-2003',
    name: 'Phone',
    icon: 'phone',
  },,
  {
    id: 'linkedIn',
    url: 'https://www.linkedin.com/pub/anders-johnson/18/822/446',
    name: 'LinkedIn',
    icon: 'linkedin',
  },
  {
    id: 'github',
    url: 'https://github.com/AndersDJohnson',
    name: 'GitHub',
    icon: 'github',
  },
  {
    id: 'twitter',
    url: 'https://twitter.com/AndersDJohnson',
    name: 'Twitter',
    icon: 'twitter',
  },
  {
    id: 'skype',
    url: 'skype:AndersDJohnson?call',
    name: 'Skype',
    icon: 'skype',
  },
  {
    id: 'stackOverflow',
    url: 'http://stackoverflow.com/users/851135/AndersDJohnson',
    name: 'Stack Overflow',
    icon: 'stack-overflow',
  },
  {
    id: 'keybase',
    url: 'https://keybase.io/AndersDJohnson',
    name: 'Keybase',
    icon: 'key',
  },
  {
    id: 'bitcoin',
    url: 'bitcoin:15cecHVJdswtx7vboBYYFBzEqQJhwYkdAW',
    name: 'Bitcoin',
    icon: 'btc',
  },
  {
    id: 'chat',
    url: 'https://gitter.im/AndersDJohnson/chat',
    name: 'Chat',
    icon: 'comments',
  },
]

export var externalLinksById = _.mapKeys(externalLinks, link => link.id)
