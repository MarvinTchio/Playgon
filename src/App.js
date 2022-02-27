import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Scheduler from "./pages/playgonflowscheduler/PlaygonFlowScheduler";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
import MetaMask from './pages/wallet/AppWallet'

    function App() {

      return (
            <div className="App">
                <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/playgonFlowScheduler' element={<Scheduler/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/wallet' element={<MetaMask/>} />
                </Routes>
            </div>
      )
    }

export default App;