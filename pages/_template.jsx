import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import _ from 'lodash'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  getInitialState() {
    return {
      clientX: 0,
      clientY: 0
    }
  },
  render () {

    var ratio = {
      x: this.state.clientX / window.innerWidth,
      y: this.state.clientY / window.innerHeight,
    }
    var percent = {
      x: ratio.x * 100,
      y: ratio.y * 100,
    }

    const size = '2000px'
    // const size = '1000px'
    // const size = '1200px'

    // var mouseStyles = {}
    var mouseStyles = {
      position: 'fixed',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      // background: 'gradient(radial, rgba(0,0,0,1), rgba(0,0,0,0))',
      // background: 'transparent',
      background: 'radial-gradient(' + size + ' at ' + percent.x + '% ' + percent.y + '%,' +
        // 'rgba(255,255,200,0.5), rgba(255,255,200,0)), ' +
        // 'rgba(0,0,0,0), rgba(0,0,0,0.5)), ' +
        // 'rgba(0,0,0,0), rgba(50,0,50,1)), ' +
        'rgba(0,0,0,0), rgba(20,0,20,0.8)), ' +
        // 'linear-gradient(to left, #220022 , #53346D)',
        // 'linear-gradient(to left, #F0C27B , #4B1248)',
        // 'linear-gradient(to left, rgb(30,80,90), rgb(60,190,150))',
        'linear-gradient(to left, rgb(50,110,150), rgb(60,190,150))',
        // 'linear-gradient(to left, #24C6DC , #514A9D)',
    }

    var header
    var route = _.last(this.props.routes)
    var path = route.path
    console.log('path', path)
    if (!path || path == '/') {
      header = null
    }
    else {
      header = (
        <div className="adj-header adj-clearfix">

          <Link to="/" className="adj-link-unstyled">
            <div className="adj-header-logo-link">
              <img src={prefixLink('/images/logo.svg')} className="adj-header-logo" />
            </div>

            <div className="adj-header-name">
              Anders D. Johnson
            </div>
          </Link>

          {/*<nav>
            <Link to={prefixLink('/resume/')} className="adj-btn adj-btn-lg adj-btn-home">
              Resume
            </Link>

            <Link to={prefixLink('/work/')} className="adj-btn adj-btn-lg adj-btn-home">
              Work
            </Link>

            <Link to={prefixLink('/blog/')} className="adj-btn adj-btn-lg adj-btn-home">
              Blog
            </Link>
          </nav>*/}

          <br></br>

          <div className="adj-cursor" style={{position: 'absolute', left: this.state.clientX, top: this.state.clientY}}>
            {/*OK*/}
          </div>
        </div>
      )
    }

    return (
      // <div>
      <div>

        <div className="adj-mouse-bg" style={mouseStyles}></div>

        <div style={{position: 'relative'}}>

          {/*<Container
            style={{
              maxWidth: 960,
              // padding: `${rhythm(1)} ${rhythm(1/2)}`,
              // padding: '1em 0.5em',
              paddingTop: 0,
            }}
          >*/}

            {header}

            {this.props.children}

          {/*</Container>*/}

        </div>
      </div>
    )
  },
  onMouseMove(e) {
    console.log(e)
    this.setState({
      clientX: e.clientX,
      clientY: e.clientY,
    })
  },
  componentDidMount() {
    console.log('template mount')
    document.addEventListener('mousemove', this.onMouseMove)
  },
  componentDidUpdate(props, state) {
    console.log('template update')
  },
})
