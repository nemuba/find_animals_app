import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>Welcome</h1>
      <Link to="/categories">Categories</Link>
    </>
  )
}

export default Home