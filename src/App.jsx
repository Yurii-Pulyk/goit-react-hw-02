import { useState } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import './App.css';

const App = () => {
  const [clicks, setClicks] = useState(0);

  const goodClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
      <Description />
      <Feedback count={clicks} />
      <Options onUpdate={goodClick} />
    </>
  );
};

export default App;
