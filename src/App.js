import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './dpsstyles.css';
import Navigation from './components/Navigation'
import Modal from '../src/components/Modal'
import AreaOfFocus from './components/AreaOfFocus';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Modal />
      <AreaOfFocus />
    </div>
  );
}

export default App;
