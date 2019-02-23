import React from "react";
import { Button, Normalize } from "@smooth-ui/core-sc";
import ReactFullpage from "@fullpage/react-fullpage";

const App = () => (
  <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <Normalize />
          <div className="section">
            <p>Section 1 (welcome to fullpage.js)</p>
            <Button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </Button>
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default App;
