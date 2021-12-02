import { useSelector } from 'react-redux'

import Preloader from '../components/Preloader'

const PreloaderContainer = () => {
  const common = useSelector(state => state.common);
  return common.loading && <Preloader />
}

export default PreloaderContainer