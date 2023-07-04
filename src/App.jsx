import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './Home'
import Add from './components/Add'
import Login from './components/Login'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={ <Login/> } />
            <Route path='/add' element={ <Add />} />
            <Route path='/home' element={ <Home />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
