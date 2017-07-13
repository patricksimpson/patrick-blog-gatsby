import React from 'react'
import Link from "gatsby-link"

export default () =>
  <div className="nav">

    <Link to="/" className="active">Home</Link>

    <Link to="/about/">About</Link>
  </div>
