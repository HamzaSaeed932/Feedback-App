import React from 'react'
import Card from '../shared/Card'

import {Link} from 'react-router-dom'

export default function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>This is a React App to leave feedback to a product or service</p>
        <p>version : 1.0.0</p>
        <p>
            <Link to="/">Back to home</Link>
        </p>
      </div>
    </Card>
  )
}
