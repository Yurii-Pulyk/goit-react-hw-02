import { useState, useEffect } from 'react';

import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Feedback/Notification';
import '../App.css';

const App = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('feedbackData');
    return savedData ? JSON.parse(savedData) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedbackData', JSON.stringify(data));
  }, [data]);

  const update = key => {
    setData(prevData => ({
      ...prevData,
      [key]: prevData[key] + 1,
    }));
  };

  const reset = () => {
    setData({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = data.good + data.neutral + data.bad;

  const positivePercentage = totalFeedback
    ? ((data.good / totalFeedback) * 100).toFixed(1) + '%'
    : '0%';

  return (
    <>
      <Description />
      {totalFeedback > 0 ? (
        <Feedback
          data={data}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification />
      )}
      <Options
        onUpdate={update}
        onReset={reset}
        totalFeedback={totalFeedback}
      />
    </>
  );
};

export default App;
