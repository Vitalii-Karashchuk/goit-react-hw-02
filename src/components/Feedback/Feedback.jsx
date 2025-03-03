export default function Feedback({ onUpdateFeedback }) {
  return (
    <div>
      <ul>
        <li onClick={() => onUpdateFeedback('Good')}>Good:</li>
        <li onClick={() => onUpdateFeedback('Neutral')}>Neutral:</li>
        <li onClick={() => onUpdateFeedback('Bad')}>Bad:</li>
        {/* <li>Total:</li>
        <li>Positive:</li> */}
      </ul>
    </div>
  );
}
