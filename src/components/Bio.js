import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpeg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Matthew Brown`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Matthew Brown</strong> is a full stack developer specializing in all things JavaScript and based out of Kansas City.
          Connect with him on <a href="https://www.linkedin.com/in/matthew-brown-13b72b91/">LinkedIn</a> or <a href="https://twitter.com/mattbrown331">Twitter</a>.
        </p>
      </div>
    )
  }
}

export default Bio
