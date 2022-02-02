import logo from './logo.svg';
import trophy from './trophy.png';
import './App.css';
import { TestPage } from './testPage';
import { useSelector } from 'react-redux';

function App() {
  const hasTrophy = useSelector((state) => state.trophy.value);

  return (
      <div className="App">
        <header className="App-header">
          {hasTrophy && <img src={trophy} />}
          <img src={logo} className="App-logo" alt="logo" />
          <TestPage />
        </header>
      </div>
  );
}

export default App;
