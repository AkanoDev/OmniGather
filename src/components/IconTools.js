import { icon } from "../objects/icons";

export function IconTools() {
  return (
    <ul className="css-tools">
      {icon.map((tool) => (
        <Icon tools={tool} />
      ))}
    </ul>
  );
}

function Icon({ tools }) {
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
