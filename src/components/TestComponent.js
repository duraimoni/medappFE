import React from "react";
 

class TestComponent extends React.Component {
  state = {
    options: [
      {
        text: "Option 1",
        value: "1"
      },
      {
        text: "Option 2",
        value: "2"
      },
      {
        text: "Option 3",
        value: "3"
      }
    ]
  };

  render() {
    return (
      <div>
      <select className="browser-default custom-select">
          <option>Choose your option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
    );
  }
}

export default TestComponent;