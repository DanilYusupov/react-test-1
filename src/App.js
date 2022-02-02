import logo from './logo.svg';
import trophy from './trophy.png';
import './App.css';
import { TestPage } from './testPage';
import { useSelector } from 'react-redux';

function App() {
  const trophies = useSelector((state) => state.trophy.value);

  return (
      <div className="App">
        <header className="App-header">
          {/* {hasTrophy && <img src={trophy} />} */}
          <div display="inline">
            {
              (trophies.length > 0) && trophies.map((t, i)  => <img key={i} src={trophy} />)
            }
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <TestPage />
        </header>
      </div>
  );
}

export default App;
