import React from "react";

class Display extends React.Component {
  render() {
    return (
      <div>
         <div
          id="memory"
          className="flex justify-end pr-1 text-xs text-green-600 font-mono items-center bg-black h-6"
        >
          {this.props.memory}
        </div>
        <div
          id="display"
          className="flex justify-end pr-1 text-white-600 font-mono items-center bg-black h-6"
        >
          {this.props.display}
        </div>
      </div>
    );
  }
}

export default Display;
