import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router'
import { useNavigate } from 'react-router-dom'

import Preloader from '../components/Preloader'

import agent from '../api/'

import { login } from '../actions/auth'

const ProtectedRoute = props => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
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
            navigate('/login')
          }
        }
      }
    }
    getAuthInfo()
  }, [])
  if (auth.currentUser.email) {
    return <React.Fragment>{props.children}</React.Fragment>
  }
  if (!token) {
    return <Navigate to='/login' />
  }
  return <Preloader />
}

export default ProtectedRoute