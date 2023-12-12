import { color } from "../objects/color";

export function ColorTools() {
  return (
    <ul className="css-tools">
      {color.map((tool) => (
        <Color tools={tool} />
      ))}
    </ul>
  );
}

function Color({ tools }) {
  return (
    <li className="front-end">
      <a href={tools.link} target="_blank" rel="noopener noreferrer">
        <div className="card">
          <img src={tools.logo} alt={tools.title} />
          <h2>{tools.title}</h2>
        </div>
      </a>
    </li>
  );
}
