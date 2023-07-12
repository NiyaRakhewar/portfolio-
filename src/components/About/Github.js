import React from "react";
import { Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";

function Github() {
  const colourTheme = {
    light: {
      background: "transparent",
      text: "#ffffff",
      grade4: "#ecd9fs",
      grade3: "#ecd9fw",
      grade2: "#ecd9fd",
    },
    dark: {
      grade4: "#ecd9fs",
      grade3: "#ecd9fw",
      grade2: "#ecd9fd",
      grade1: "#ecd9fa",
      grade0: "#ecd9fc",
    },
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="NiyaRakhewar"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
