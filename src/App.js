import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './dpsstyles.css';
import './App.css'
import Navigation from './components/Navigation'
import LearnMoreModal from './components/LearnMoreModal'
import HowToModal from '../src/components/HowToModal'
import AreaOfFocus from './components/AreaOfFocus';
import IndividualizedPathway from './components/IndividualizedPathaway';
import RoleTypes from './components/RoleTypes';

function App() {
  return (
    <>
      <Navigation />
      <HowToModal />
      <LearnMoreModal />
      <AreaOfFocus/>
    </>
  );
}

export default App;
