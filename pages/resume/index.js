import React from 'react'
import moment from 'moment'
import Markdown from 'react-remarkable'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import ReactMarkdown from 'react-markdown'
import stripIndent from 'strip-indent'
import { Icon } from 'react-fa'
import { linksById } from '../../meta/nav'
import AnchorJS from 'anchor-js'
import linkedinProfile from '../../meta/linkedinProfile.json'
import * as resume from '../../meta/resume'

export default class Resume extends React.Component {

  componentDidMount () {
    // Not great support for anchor links in Gatsby / React Router / history.
    // @see https://github.com/gatsbyjs/gatsby/issues/302
    // TODO: Scope to this element:
    //  * https://github.com/bryanbraun/anchorjs/issues/66
    //  * ReactDOM.findDOMNode(this)
    const anchors = window.anchors = window.anchors || new AnchorJS()
    const els = [
      'h1:not(.adj-page-heading)', 'h2', 'h3', 'h4', 'h5', 'h6'
    ]
    const classes = els.map(el => '.adj-page-resume ' + el).join(',')
    anchors.add(classes)
  }

  renderDate (date) {
    const m = moment(`${date.year}-${date.month}`, 'YYYY-M')
    return (
      <span>
        {m.format('MMMM YYYY')}
      </span>
    )
  }

  render () {
    console.log({linkedinProfile})
    const { summary } = linkedinProfile
    const positions = linkedinProfile.positions.values
    const educations = linkedinProfile.educations.values
    const courses = linkedinProfile.courses.values
    const honors = linkedinProfile.honorsAwards.values
    const { tests, honorsAwardsDetails } = resume

    const toc = [
      {
        name: 'Experience',
        hash: 'experience',
      },
      {
        name: 'Education',
        hash: 'education',
      },
      {
        name: 'Honors',
        hash: 'honors',
      },
      {
        name: 'Tests',
        hash: 'tests',
      },
    ]

    return (
      <div className="adj-page-resume">
        <h1 className="adj-page-heading">
          <Link to="/resume/">
            <Icon name={linksById.resume.icon} className="adj-menu-item-icon" />
            {linksById.resume.name}
          </Link>
        </h1>

        <div className="adj-page">

          <ul>
            {toc.map(t => {
              return <li>
                <Link to={prefixLink(`/resume/#${t.hash}`)}>{t.name}</Link>
              </li>
            })}
          </ul>

          <h2>Profile</h2>

          <ReactMarkdown source={summary} />

          <div class="adj-resume-section">
            <h2>Experience</h2>

            {positions.map(position => {
              return (
                <div>
                  <h3>{position.title}</h3>
                  <div className="adj-resume-company-name">{position.company.name}</div>
                  <div>
                    {this.renderDate(position.startDate)}
                    {' '}&ndash;{' '}
                    {position.isCurrent ? 'Present' : this.renderDate(position.endDate)}
                  </div>

                  <ReactMarkdown source={position.summary} />
                </div>
              )
            })}
          </div>

          <div class="adj-resume-section">
            <h2>Education</h2>

            {educations.map(education => {
              return (
                <div>
                  <h3>{education.fieldOfStudy}, {education.degree}</h3>
                  <div>{education.schoolName}</div>
                  <div>
                    {this.renderDate(education.startDate)}
                    {' '}&ndash;{' '}
                    {education.isCurrent ? 'Present' : this.renderDate(education.endDate)}
                  </div>

                  <ReactMarkdown source={education.notes} />
                  <ReactMarkdown source={education.activities} />
                </div>
              )
            })}

            <ul className="adj-resume-courses-list">
              {courses.map(course => {
                return (
                  <li>
                    <b>{course.number}</b>: {course.name}
                  </li>
                )
              })}
            </ul>
          </div>

          <div class="adj-resume-section">
            <h2>Honors</h2>

            <ul className="adj-resume-honors-list">
              {honors.map(honor => {
                const details = honorsAwardsDetails[honor.id] || {}
                return (
                  <li>
                    <b>{honor.name}</b>:
                    {' '}
                    {honor.issuer},
                    {' '}
                    {details.date ? this.renderDate(details.date) : ''}
                    {details.description ? <ReactMarkdown source={details.description} /> : ''}
                  </li>
                )
              })}
            </ul>
          </div>

          <div class="adj-resume-section">
            <h2>Tests</h2>

            <ul className="adj-resume-tests-list">
              {tests.map(test => {
                return (
                  <li>
                    <b>{test.name}</b>: {test.score} ({test.percentile} %ile)
                  </li>
                )
              })}
            </ul>
          </div>

        </div>
      </div>
    )
  }
}
