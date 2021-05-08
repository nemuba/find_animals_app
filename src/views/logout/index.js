import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router'
import { logoutFetch } from '../../store/fetch_actions/auth'

const Logout = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(logoutFetch())
  }, [dispatch])


  return (
    <Redirect to="/" />
  )
}

export default Logout