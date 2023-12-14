import { color } from "../objects/color";

export function ColorTools() {
  return (
    <ul className="flex flex-wrap gap-12">
      {color.map((tool) => (
        <Color tools={tool} key={tool.title} />
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
