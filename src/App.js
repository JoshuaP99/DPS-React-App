import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './dpsstyles.css';
import Navigation from './components/Navigation'
import LearnMoreModal from './components/LearnMoreModal'
import HowToModal from '../src/components/HowToModal'
import RoleModal from './components/RoleModal';
import AreaOfFocus from './components/AreaOfFocus';
import IndividualizedPathway from './components/IndividualizedPathaway';
import RoleTypes from './components/RoleTypes';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/AreaOfFocus" element={<AreaOfFocus />} />
        <Route path ="/RoleTypes" element={<RoleTypes />} />
        <Route path ="/IndividualizedPathway" element={<IndividualizedPathway />} />
      </Routes>
      <HowToModal />
      <LearnMoreModal />
      <RoleModal />
    </>
  );
}

export default App;
