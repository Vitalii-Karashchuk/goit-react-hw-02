//
export default function Options({ onUpdateFeedback }) {
  return (
    <div>
      <button onClick={() => onUpdateFeedback('good')}>Good</button>
      <button onClick={() => onUpdateFeedback('neutral')}>Neutral</button>
      <button onClick={() => onUpdateFeedback('bad')}>Bad</button>
    </div>
  );
}
