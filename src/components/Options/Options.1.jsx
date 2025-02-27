export default function Options({ onUpdate }) {
  return (
    <section>
      <button onClick={onUpdate}>Good {clicks} </button>
      <button>Neutral</button>
      <button>Bad</button>
      <button>Reset</button>
    </section>
  );
}
