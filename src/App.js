import './App.css';
import Counter from './components/Counter'
import Button from './components/Button'
import freeCodeCampLogo from './images/fcc-logo.svg'
import { useState } from 'react'

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const manageClick = () => {
    setNumClicks(numClicks + 1);
  };

  const resetCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className='App'>
      <div className='logo-container'>
        <img className='fcc-logo' src={freeCodeCampLogo} alt="FreeCodeCamp Logo" />
        <div className='main-container'>
          <Counter numClicks={numClicks} />
          <Button text='Click' isClick={true} manageClick={manageClick} />
          <Button text='Reset' isClick={false} manageClick={resetCounter} />
        </div>
      </div>
    </div>
  );
}

export default App;
