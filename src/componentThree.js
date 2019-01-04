import React from "react";

class ComponentThree extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="componentThree">
        <p>This is componentThree, the most inner Matryoshka doll！</p>
      </div>
    );
  }
}

export default ComponentThree;
