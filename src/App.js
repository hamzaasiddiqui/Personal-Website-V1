import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";

import "bootstrap/dist/css/bootstrap.css";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

const anchors = ["Greetings", "About", "Experience", "Projects", "Contact"];

const App = () => (
  <div>
    <Navigation />
    <ReactFullpage
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      navigat
      sectionsColor={["#1E2022", "#1E2022", "#6D9886", "#A3C7D6", "#1E2022"]}
      onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction });
      }}
      render={({ state, fullpageApi }) => {
        console.log("render prop change", state, fullpageApi);

        return (
          <div>
            <div className="section">
              <Home />
            </div>
            <div className="section">
              <About id="About" />
            </div>
            <div className="section">
              <Experience id="Experience" />
            </div>
            <div className="section">
              <Projects id="Projects" />
            </div>
            <div className="section">
              <Contact id="Contact" />
            </div>
          </div>
        );
      }}
    />
  </div>
);
export default App;
