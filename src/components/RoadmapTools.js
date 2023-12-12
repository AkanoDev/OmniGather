import { roadmap } from "../objects/roadmap";

export function RoadmapTools() {
  return (
    <ul className="css-tools">
      {roadmap.map((tool) => (
        <Roadmap tools={tool} />
      ))}
    </ul>
  );
}

function Roadmap({ tools }) {
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
