import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import LoginComponent from '../components/Login'

import agent from '../api/'

import {
  startAction,
  endAction,
  showToast
} from '../actions/common'

import { login } from '../actions/auth'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onLogin = async () => {
    dispatch(startAction())
    try {
      const res = await agent.auth.login(email, password)
      dispatch(endAction())
      localStorage.setItem('token', res.data.token)
      dispatch(showToast('Login Success', 'Welcome'))
      dispatch(login(res.data))
      navigate('/')
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(endAction())
        dispatch(showToast('Login Failed', error.response.data.error))
      }
    }
  }
  return <LoginComponent email={email} password={password} setEmail={setEmail} setPassword={setPassword} onLogin={onLogin} />
}

export default Login