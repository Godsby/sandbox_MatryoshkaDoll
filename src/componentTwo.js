import React from "react";
import ComponentThree from "./componentThree";

class ComponentTwo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="componentTwo">
        <ComponentThree />
      </div>
    );
  }
}

export default ComponentTwo;
