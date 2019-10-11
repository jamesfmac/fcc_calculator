import React from "react";

class Display extends React.Component {
  render() {
    return (
      <div
        id="display"
        className="flex justify-end pr-1 text-green-600 font-mono items-center bg-black h-12"
      >
        {this.props.value}
      </div>
    );
  }
}

export default Display;
