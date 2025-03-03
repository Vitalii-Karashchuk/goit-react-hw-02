export default function Feedback({ onUpdateFeedback }) {
  return (
    <div>
      <ul>
        <li onClick={() => onUpdateFeedback('good')}>Good:</li>
        <li onClick={() => onUpdateFeedback('neutral')}>Neutral:</li>
        <li onClick={() => onUpdateFeedback('bad')}>Bad:</li>
        {/* <li>Total:</li>
        <li>Positive:</li> */}
      </ul>
    </div>
  );
}
