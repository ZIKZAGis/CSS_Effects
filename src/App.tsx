import './App.css';
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
      </Grid>
    </div>
  );
}

export default App;
