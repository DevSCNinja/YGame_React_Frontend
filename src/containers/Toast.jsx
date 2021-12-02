import { useSelector, useDispatch } from 'react-redux'

import { hideToast } from '../actions/common'

import Toast from '../components/Toast'

const ToastContainer = () => {
  const common = useSelector((state) => state.common)
  const dispatch = useDispatch()
  const {
    showToast,
    msgTitle,
    msgContent
  } = common
  const hide = () => {
    dispatch(hideToast())
  }
  return showToast ? <Toast title={msgTitle} content={msgContent} hideToast={hide} /> : ''
}

export default ToastContainer