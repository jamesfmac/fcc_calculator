import React from "react";

class Calculator extends React.Component {
  render() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-200 h-24">
        <div className="flex text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 ">
          <span className="">Calc</span>
        </div>
      </div>
    );
  }
}

export default Calculator;
