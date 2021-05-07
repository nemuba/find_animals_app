import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logoutAction } from '../../store/ducks/auth'
import { Redirect } from 'react-router'
import { logout } from '../../services/auth'

const Logout = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(logoutAction())
    logout()
  }, [dispatch])


  return (
    <Redirect to="/" />
  )
}

export default Logout