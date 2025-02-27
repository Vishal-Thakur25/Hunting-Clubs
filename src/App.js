import React, { useState, useEffect } from 'react';
import MainPanel from './MainPanel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainComponent from './MainComponent';
import StakePanel from './StakePanel';
import Deposit from './Deposit';
import UserCard from './account/UserCard';
import Withdraw from './account/Withdraw';
import DepositHistory from './account/DepositHistory';
import Gift from './activity/Gift';
import WalletAccount from './wallet/Wallet';
import Activity from './activity/Activity';
import LoginPage from './authentication/LoginPage';
import RegisterPage from './authentication/RegisterPage';
import SelfServiceCenter from './authentication/SelfServiceCenter';
import WithdrawHistory from './wallet/WithdrawHistory';
import FeedbackComponent from './account/FeedbackComponent';
import Attendance from './activity/Attendence';
import ActivityReward from './activity/ActivityReward';
import SuperJackpot from './activity/SuperJackpot';
import Stake from './Stake'


const App = () => {
   
  const [history, setHistory] = useState([]);

  const handleDeposit = (newEntry) => {
    setHistory([...history, newEntry]);
  };

  return (
 
    // <><Stake/></>

    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/games" element={<MainPanel />} />
        <Route path="/mines" element={<StakePanel />} />
        <Route path="/Wallet" element={<WalletAccount/>} />
        <Route path="/account" element={<UserCard />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/account/withdraw" element={<Withdraw />} /> 
        <Route path="/CustomerSupport" element={<SelfServiceCenter />} />
        <Route path="/feedback" element={<FeedbackComponent />} />
        <Route path="/ about us" element={<SelfServiceCenter />} />
        <Route path="/account/deposit" element={<Deposit onDeposit={handleDeposit} />} />
        <Route path="/account/withdrawhistory" element={<WithdrawHistory/>} />
        <Route path="/activity / attendence" element={<Attendance/>} />
        <Route path="/activity/ reward" element={<ActivityReward/>} />
        <Route path="/activity/ jackpot" element={<SuperJackpot/>} />
        <Route path="/activity/gifts" element={<Gift/>} />
        <Route path="/account/deposit/history" element={<DepositHistory history={history} />} />
      </Routes>
    </Router>
  

    
    
   
  );
};

export default App;
