import React from "react";

class Display extends React.Component {
  render() {
    return (
      <div className="flex-col p-1 mt-3  bg-black justify-end h-auto border border-green-800 rounded-sm" style={{minHeight: "3rem"}}>
        <div
          id="memory"
          className="flex justify-end pr-1 text-xs text-green-600 font-mono items-center bg-black h-auto text-right"
          style={{minHeight: "1.5rem"}}
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
