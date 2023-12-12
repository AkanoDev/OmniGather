import { webtool } from "../objects/webdesign";

export function WebDesignTools() {
  return (
    <ul className="web-design-tools">
      {webtool.map((tool) => (
        <WebDesign tools={tool} />
      ))}
    </ul>
  );
}

function WebDesign({ tools }) {
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
