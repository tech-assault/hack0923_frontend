import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainPage from '../../pages/MainPage/MainPage'
import Login from '../../pages/Login/Login'
import Error from '../../pages/Error/Error'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
