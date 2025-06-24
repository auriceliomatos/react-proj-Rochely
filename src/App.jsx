import { GlobalStyles } from './styles/globalStyles.js'
import { HomePage } from './pages/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <HomePage />
    </>
  )
}




