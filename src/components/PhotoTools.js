import { photo } from "../objects/photo";

export function PhotoTools() {
  return (
    <ul className="flex flex-wrap gap-12">
      {photo.map((tool) => (
        <Photo tools={tool} key={tool.title} />
      ))}
    </ul>
  );
}

function Photo({ tools }) {
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
