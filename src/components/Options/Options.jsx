//
export default function Options({ onUpdateFeedback }) {
  return (
    <div>
      <button onClick={() => onUpdateFeedback('Good')}>Good</button>
      <button onClick={() => onUpdateFeedback('Neutral')}>Neutral</button>
      <button onClick={() => onUpdateFeedback('Bad')}>Bad</button>
    </div>
  );
}
