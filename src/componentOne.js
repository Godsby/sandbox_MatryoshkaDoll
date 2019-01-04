import React from "react";
import ComponentTwo from "./componentTwo";

class ComponentOne extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="componentOne">
        <ComponentTwo />
      </div>
    );
  }
}

export default ComponentOne;
