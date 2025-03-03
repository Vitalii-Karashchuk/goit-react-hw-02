import { useState } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';

import css from '../App/App.module.css';

export default function App() {
  const [clicks, useClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (feedbackType) => {
    useClicks(() => {
      return { ...clicks, [feedbackType]: clicks[feedbackType] + 1 };
    });
  };

  return (
    <>
      <Description />

      <Options onUpdateFeedback={updateFeedback} />
      <Feedback clicks={clicks} />
    </>
  );
}
