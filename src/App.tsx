import './App.css';
import AcrobaticLoading from './components/effects/acrobatic_loading/AcrobaticLoading';
import HamburgerButton from './components/effects/hamburger_btn/HamburgerButton';
import PulseLoading from './components/effects/pulse_loading/PulseLoading';
import Grid from './components/grid/Grid';

function App() {
  return (
    <div className="App">
      <h1>CSS Effects</h1>
      <Grid>
        <PulseLoading/>
        <HamburgerButton/>
        <AcrobaticLoading/>
      </Grid>
    </div>
  );
}

export default App;
