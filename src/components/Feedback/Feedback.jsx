export default function Feedback({ count }) {
  return (
    // const totalFeedback = good + neutral + bad;

    <section>
      <p>Good:{count}</p>
      <p>Neutral:</p>
      <p>Bad:</p>
      <p>Total: {count}</p>
      <p>Positive:</p>
    </section>
  );
}
