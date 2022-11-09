import React, { useState, useEffect } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import Header from './components/header/header'
import routes from './route/routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  const location = useLocation()
  const [isAuth, setIsAuth] = useState(false)
  const header = ['/auth/login','/','/auth/register','/apps/RPS/','/apps/dice/']
  useEffect(() => {
    const token = localStorage.getItem('_q')
    if (token) {
      setIsAuth(true)
    } else {
      setIsAuth(false)
    }
  }, [])
  
  const routing = useRoutes(routes(isAuth))
  return (
    <div>
      {!header.includes(location.pathname) && <Header />}
      <ToastContainer         
        className="toast-position"
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />
      {routing}
    </div>
  )
}

export default App
