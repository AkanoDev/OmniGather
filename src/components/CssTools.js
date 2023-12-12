import { csstool } from "../objects/csstool";
export function CssTools() {
  return (
    <ul className="css-tools">
      {csstool.map((tool) => (
        <Css tools={tool} />
      ))}
    </ul>
  );
}

function Css({ tools }) {
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
