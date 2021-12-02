import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import SignupComponent from '../components/Signup'

import agent from '../api/'

import {
  startAction,
  endAction,
  showToast
} from '../actions/common'

const Signup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passconf, setPassconf] = useState('')
  const onSignup = async () => {
    dispatch(startAction())
    try {
      await agent.auth.register(email, password)
      dispatch(endAction())
      dispatch(showToast('Signup Success', 'Welcome'))
      navigate('/login')
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(endAction())
        dispatch(showToast('Signup Failed', error.response.data.error))
      }
    }
  }
  return <SignupComponent
    email={email}
    password={password}
    passconf={passconf}
    setEmail={setEmail}
    setPassword={setPassword}
    setPassconf={setPassconf}
    onSignup={onSignup}
  />
}

export default Signup