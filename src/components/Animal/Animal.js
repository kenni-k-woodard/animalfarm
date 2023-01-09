export default function Animal(props) {
  return (
    <div className="animal" style={{ top: props.top, left: props.left }}>
      <img src={`/animals/${props.type}.svg`} />
      <p>{props.name}</p>
    </div>
  );
}
