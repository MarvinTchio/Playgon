import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Scheduler from "./pages/playgonflowscheduler/PlaygonFlowScheduler";
import PlayerScheduler from "./pages/playgonflowscheduler/PlayerFlowChart";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
import MetaMask from './pages/wallet/AppWallet'

    function App() {
    const playGo = [{participants:'PlayerId1',
                     risk: 0.01,
                     date: new Date(2023, 2, 28),
                     game: "Call of Duty",
                     tier: 3
                      },
                      {participants:'PlayerId2',
                       risk: 0.02,
                       date: new Date(2023, 2, 28),
                       game: "Call of Duty",
                       tier: 3
                       },
                       {participants:'PlayerId3',
                       risk: 0.03,
                       date: new Date(2023, 2, 28),
                      game: "Call of Duty",
                      tier: 3
                       },
                       {participants:'PlayerId4',
                        risk: 0.04,
                        date: new Date(2023, 2, 28),
                        game: "Call of Duty",
                        tier: 3
                         }
                    ]

      return (
            <div className="App">
                <Routes>

                <Route path='/' element={<Home/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/playgonFlowScheduler' element={<Scheduler/>} />
                <Route path='/PlayerFlowChart' element={<PlayerScheduler/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/wallet' element={<MetaMask/>} />
                </Routes>
            </div>
      )
    }

export default App;