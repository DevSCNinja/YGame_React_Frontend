import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router'

import Preloader from '../components/Preloader'

import agent from '../api/'

import { login } from '../actions/auth'

const NonProtectedRoute = props => {
  const dispatch = useDispatch()
  const [token, setToken] = useState(localStorage.getItem('token'))
  const auth = useSelector(state => state.auth)
  useEffect(() => {
    async function getAuthInfo() {
      if (!auth.currentUser.email) {
        try {
          const res = await agent.auth.me()
          dispatch(login(res.data))
        } catch (error) {
          if (error.response.status === 401) {
            localStorage.removeItem('token')
            setToken('')
          }
        }
      }
    }
    getAuthInfo()
  }, [])
  if (auth.currentUser.email) {
    return <Navigate to='/' />
  }
  if (!token) {
    return <React.Fragment>{props.children}</React.Fragment>
  }
  return <Preloader />
}

export default NonProtectedRoute