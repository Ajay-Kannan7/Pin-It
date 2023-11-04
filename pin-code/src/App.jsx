import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import HomePage from './components/Home-page/Home'
import PinDetailsPage from './components/Pin-component/pinDetails'

function App() {
  return (
    <div className="home-cover">
      <BrowserRouter>
        <div className="banner">
          <h1>Pin-It! <FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon></h1>
        </div>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/:pin" element={< PinDetailsPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
