import { useState } from "react";
import "./index.css";
import "./responsive.css";
import { FrontEndTools } from "./components/FrontEndTools";
import { WebDesignTools } from "./components/WebDesignTools";
import { DocumentationTools } from "./components/DocumentationTools";
import { CssTools } from "./components/CssTools";
import { ColorTools } from "./components/ColorTools";
import { IconTools } from "./components/IconTools";
import { PhotoTools } from "./components/PhotoTools";
import { RoadmapTools } from "./components/RoadmapTools";

export default function App() {
  const [openFront, setOpenFront] = useState(false);
  const [openWeb, setOpenWeb] = useState(null);
  const [openDocumentation, setOpenDocumentation] = useState(null);
  const [openCss, setOpenCss] = useState(null);
  const [openColor, setOpenColor] = useState(null);
  const [openIcon, setOpenIcon] = useState(null);
  const [openPhoto, setOpenPhoto] = useState(null);
  const [openRoadmap, setOpenRoadmap] = useState(null);

  function handleFront() {
    if (setOpenFront === openFront) {
      return;
    } else if (openWeb) {
      handleWeb();
    } else if (openDocumentation) {
      handleDocumention();
    } else if (openCss) {
      handleCss();
    } else if (openColor) {
      handleColor();
    } else if (openIcon) {
      handleIcon();
    } else if (openPhoto) {
      handlePhoto();
    } else if (openRoadmap) {
      handleRoadmap();
    }
  }

  function handleDocumention() {
    setOpenDocumentation((doc) => !doc);
    setOpenFront(false);
    setOpenWeb(null);
    setOpenCss(null);
    setOpenColor(null);
    setOpenIcon(null);
    setOpenPhoto(null);
    setOpenRoadmap(null);
  }

  function handleWeb() {
    setOpenWeb((web) => !web);
    setOpenFront(false);
    setOpenDocumentation(null);
    setOpenCss(null);
    setOpenColor(null);
    setOpenIcon(null);
    setOpenPhoto(null);
    setOpenRoadmap(null);
  }

  function handleCss() {
    setOpenCss((css) => !css);
    setOpenFront(false);
    setOpenWeb(null);
    setOpenDocumentation(null);
    setOpenColor(null);
    setOpenIcon(null);
    setOpenPhoto(null);
    setOpenRoadmap(null);
  }

  function handleColor() {
    setOpenColor((color) => !color);
    setOpenFront(false);
    setOpenWeb(null);
    setOpenDocumentation(null);
    setOpenCss(null);
    setOpenIcon(null);
    setOpenPhoto(null);
    setOpenRoadmap(null);
  }

  function handleIcon() {
    setOpenIcon((icon) => !icon);
    setOpenFront(false);
    setOpenWeb(null);
    setOpenDocumentation(null);
    setOpenCss(null);
    setOpenColor(null);
    setOpenPhoto(null);
    setOpenRoadmap(null);
  }

  function handlePhoto() {
    setOpenPhoto((photo) => !photo);
    setOpenFront(false);
    setOpenWeb(null);
    setOpenDocumentation(null);
    setOpenCss(null);
    setOpenColor(null);
    setOpenIcon(null);
    setOpenRoadmap(null);
  }

  function handleRoadmap() {
    setOpenRoadmap((road) => !road);
    setOpenFront(false);
    setOpenWeb(null);
    setOpenDocumentation(null);
    setOpenCss(null);
    setOpenColor(null);
    setOpenIcon(null);
    setOpenPhoto(null);
  }

  return (
    <div className="app">
      <NavigationBar />
      <div className="content">
        <Intro />

        <div className="menus">
          <div className="side-bar">
            <Menu
              onHandleWeb={handleWeb}
              onHandleDoc={handleDocumention}
              onHandleCss={handleCss}
              onHandleColor={handleColor}
              onHandleIcon={handleIcon}
              onHandlePhoto={handlePhoto}
              onHandleFront={handleFront}
              onHandleRoad={handleRoadmap}
              ///
              openFront={openFront}
              openWeb={openWeb}
              openDocumentation={openDocumentation}
              openCss={openCss}
              openColor={openColor}
              openIcon={openIcon}
              openPhoto={openPhoto}
              openRoadmap={openRoadmap}
            />
          </div>

          <div className="resources">
            <Resources
              openWeb={openWeb}
              openFront={openFront}
              openDocumentation={openDocumentation}
              openCss={openCss}
              openColor={openColor}
              openIcon={openIcon}
              openPhoto={openPhoto}
              openRoadmap={openRoadmap}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
function Resources({
  openFront,
  openWeb,
  openDocumentation,
  openCss,
  openColor,
  openIcon,
  openPhoto,
  openRoadmap,
}) {
  return (
    <>
      {openFront && <FrontEndTools />}

      {openWeb ? (
        <WebDesignTools />
      ) : openDocumentation ? (
        <DocumentationTools />
      ) : openCss ? (
        <CssTools />
      ) : openColor ? (
        <ColorTools />
      ) : openIcon ? (
        <IconTools />
      ) : openPhoto ? (
        <PhotoTools />
      ) : openRoadmap ? (
        <RoadmapTools />
      ) : (
        <FrontEndTools />
      )}

      {/* {openWeb && <WebDesignTools />}
      {openDocumentation && <DocumentationTools />}
      {openCss && <CssTools />}
      {openColor && <ColorTools />}
      {openIcon && <IconTools />}
      {openPhoto && <PhotoTools />} */}
    </>
  );
}

function Menu({
  onHandleWeb,
  openWeb,
  onHandleDoc,
  openDocumentation,
  openCss,
  onHandleCss,
  openColor,
  onHandleColor,
  openIcon,
  onHandleIcon,
  openPhoto,
  onHandlePhoto,
  openFront,
  onHandleFront,
  openRoadmap,
  onHandleRoad,
}) {
  return (
    <ul className="menu">
      <li onClick={onHandleFront} className={!openFront ? "active" : ""}>
        All Tools
      </li>
      <li onClick={onHandleRoad} className={openRoadmap ? "change" : ""}>
        Roadmap
      </li>
      <li onClick={onHandleDoc} className={openDocumentation ? "change" : ""}>
        Documentation
      </li>
      <li onClick={onHandleWeb} className={openWeb ? "change" : ""}>
        Web Design Tools
      </li>
      <li onClick={onHandleCss} className={openCss ? "change" : ""}>
        CSS Tools
      </li>
      <li onClick={onHandleColor} className={openColor ? "change" : ""}>
        Color Tools
      </li>
      <li onClick={onHandleIcon} className={openIcon ? "change" : ""}>
        Icons & SVG's
      </li>
      <li onClick={onHandlePhoto} className={openPhoto ? "change" : ""}>
        Photos PNG
      </li>
    </ul>
  );
}

function Intro() {
  return (
    <div className="intro">
      <em>
        <h1>Welcome to my Free Learning Hub!</h1>
        <p>
          Unleash a world of knowledge with curated resources. Whether you're a
          student or lifelong learner, explore insightful articles and more.
          Navigate the user-friendly interface to access valuable materials and
          embark on an exciting journey of continuous learning. Dive in and
          start exploring!
        </p>
      </em>
      <img src="./logos/maleonpc.png" alt="male on pc" />
    </div>
  );
}

function NavigationBar() {
  return (
    <nav>
      <h1> ResourceHub</h1>
    </nav>
  );
}
