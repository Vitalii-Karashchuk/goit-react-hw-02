import { useState } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';

import css from '../App/App.module.css';

export default function App() {
  const [click, useClick] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = () => {
    useClick(click + 1);
  };

  return (
    <>
      <Description />

      <Options feedbackType="Good" />
      <Options feedbackType="Neutral" />
      <Options feedbackType="Bad" />
      <Options feedbackType="Reset" />
      <Feedback />
    </>
  );
}
