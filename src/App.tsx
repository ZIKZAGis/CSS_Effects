import './App.css';
import Loading from './components/effects/loading/Loading';
import Grid from './components/grid/Grid';

function App() {
  return (
    <div className="App">
      <h1>CSS Effects</h1>
      <Grid>
        <Loading/>
        <Loading/>
        <Loading/>
        <Loading/>
        <Loading/>
        <Loading/>
        <Loading/>
        <Loading/>
        <Loading/>
      </Grid>
    </div>
  );
}

export default App;
