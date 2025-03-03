export default function Feedback({ clicks }) {
  return (
    <div>
      <ul>
        <li>Good: {clicks.good}</li>
        <li>Neutral: {clicks.neutral}</li>
        <li>Bad: {clicks.bad}</li>
        {/* <li>Total:</li>
        <li>Positive:</li> */}
      </ul>
    </div>
  );
}
