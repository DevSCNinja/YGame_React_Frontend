import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import HomeComponent from '../components/Home'

import { logout } from '../actions/auth'

const Home = () => {
  const navigate = useNavigate()
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const logOut = () => {
    localStorage.removeItem('token')
    dispatch(logout())
    navigate('/login')
  }
  return <HomeComponent user={auth.currentUser} logout={logOut} />
}

export default Home