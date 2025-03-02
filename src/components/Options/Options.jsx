import { useState } from 'react';
//
export default function Options({ text, feedbackType }) {
  const [clicks, useClicks] = useState(0);
  const updateFeedback = (feedbackType) => {
    useClicks(clicks + 1);
  };
  return (
    <div>
      <button onClick={updateFeedback}>
        {feedbackType}
        {clicks}
      </button>
    </div>
  );
}
