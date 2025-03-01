export default function Feedback({ data, totalFeedback, positivePercentage }) {
  //   const totalFeedback = data.good + data.neutral + data.bad;
  // const positivePercentage = totalFeedback
  // ? ((data.good / totalFeedback) * 100).toFixed(1) + '%'
  // : '0%';

  return (
    <section>
      <p>Good: {data.good}</p>
      <p>Neutral: {data.neutral}</p>
      <p>Bad: {data.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}</p>
    </section>
  );
}
