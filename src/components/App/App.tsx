import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainPage from '../../pages/MainPage/MainPage'
import Login from '../../pages/Login/Login'
import Mall from '../../pages/Mall/Mall'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/mall' element={<Mall />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
