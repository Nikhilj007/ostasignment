import Feed from './components/feeds/Feed'
import { Route,Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Jobs from './components/jobs/Jobs'
import Events from './components/events/Events'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useLayoutEffect,useContext } from 'react'
import { AppContext } from './context/AppContext'

const App = () => {
  const {darkMode, setDarkMode} = useContext(AppContext);
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className={`${darkMode?"backgroundb ":"background"}`+" transition-all duration-100"}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/feed' element={<Feed/>}/>
        <Route path='/jobs' element = {<Jobs/>}/>
        <Route path='/events' element = {<Events/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

