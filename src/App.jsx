import { useState } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import './App.css';

const App = () => {
  const [data, setData] = useState({ good: 0, neutral: 0, bad: 0 });

  const update = key => {
    setData({
      ...data,
      [key]: data[key] + 1,
    });
  };

  return (
    <>
      <Description />
      <Feedback data={data} />
      <Options onUpdate={update} />
    </>
  );
};

export default App;
