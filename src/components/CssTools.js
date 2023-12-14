import { csstool } from "../objects/csstool";
export function CssTools() {
  return (
    <ul className="flex flex-wrap gap-12">
      {csstool.map((tool) => (
        <Css tools={tool} key={tool.title} />
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
