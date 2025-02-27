export default function Options({ onUpdate }) {
  return (
    <section>
      <button onClick={onUpdate}>Good </button>
      <button>Neutral</button>
      <button>Bad</button>
      <button>Reset</button>
    </section>
  );
}
