import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/Layout';
import Login from './pages/Auth/Login';
import RiskAssessment from './pages/Auth/RiskAssessment';
import Dashboard from './pages/Dashboard/Dashboard';
import FundDetails from './pages/Fund/FundDetails';
import GoalPlanner from './pages/Goals/GoalPlanner';
import Portfolio from './pages/Portfolio/Portfolio';
import OverlapAnalysis from './pages/Portfolio/OverlapAnalysis';
import TaxHarvesting from './pages/Tax/TaxHarvesting';
import Notifications from './pages/Alerts/Notifications';
import ManagerChange from './pages/Fund/ManagerChange';
import Explore from './pages/Explore/Explore';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/risk-assessment" element={<RiskAssessment />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/fund-details" element={<FundDetails />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/manager-change" element={<ManagerChange />} />
          <Route path="/goals" element={<GoalPlanner />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/overlap-analysis" element={<OverlapAnalysis />} />
          <Route path="/tax-harvesting" element={<TaxHarvesting />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
