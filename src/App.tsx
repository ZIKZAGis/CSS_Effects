import './App.css';
import PulseLoading from './components/effects/pulse_loading/PulseLoading';
import Grid from './components/grid/Grid';

function App() {
  return (
    <div className="App">
      <h1>CSS Effects</h1>
      <Grid>
        <PulseLoading/>
      </Grid>
    </div>
  );
}

export default App;
