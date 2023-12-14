import { frontend } from "../objects/frontend";

export function FrontEndTools() {
  return (
    <ul className="flex flex-wrap gap-12 justify-center lg:justify-start">
      {frontend.map((tool) => (
        <FrontEnd tools={tool} key={tool.title} />
      ))}
    </ul>
  );
}

function FrontEnd({ tools }) {
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
