import { roadmap } from "../objects/roadmap";

export function RoadmapTools() {
  return (
    <ul className="flex flex-wrap gap-12">
      {roadmap.map((tool) => (
        <Roadmap tools={tool} key={tool.title} />
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
