import { documentation } from "../objects/documentation";

export function DocumentationTools() {
  return (
    <ul className="flex flex-wrap gap-12">
      {documentation.map((tool) => (
        <Documentation tools={tool} key={tool.title} />
      ))}
    </ul>
  );
}

function Documentation({ tools }) {
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
