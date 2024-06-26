import {BroserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <BroserRouter>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About />} />
       <Route path="/sign-in" element={<SignIn />} />
       <Route path="/sign-up" element={<SignUp />} />
       <Route path="/project" element={<Project />} />
       <Route path="/dashboard" element={<Dashboard />} />
    
     </Routes>
    </BroserRouter>
  )
}
