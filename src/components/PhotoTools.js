import { photo } from "../objects/photo";

export function PhotoTools() {
  return (
    <ul className="css-tools">
      {photo.map((tool) => (
        <Photo tools={tool} />
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
