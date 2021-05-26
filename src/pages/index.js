import * as React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to the homepage of Lucien Huber</h1>
      <Link to="/about">About</Link>
      <p>_.._..</p>
    </main>
  )
}

export default IndexPage