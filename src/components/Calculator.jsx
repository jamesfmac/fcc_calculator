import React from "react";
import Keyboard from "./Keyboard";
import Display from "./Display";

import { ReactComponent as TailwindLogo } from "../images/tailwindcss-logo.svg";
import { ReactComponent as ReactLogo } from "../images/react-logo.svg";
import { ReactComponent as MathjsLogo } from "../images/mathjs-logo.svg";

import * as math from "mathjs";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      memory: "",
      isReset: true,
      isOperation: false,
      lastEvaluation: "",
      lastChar: ""
    };
  }

  handleClear = () => {
    this.setState({
      display: "0",
      memory: "",
      isReset: true,
      isOperation: false,
      lastEvaluation: "",
      lastChar: ""
    });
  };

  handleEquals = e => {
    const input = e.currentTarget.getAttribute("value");
    if (input === this.state.lastChar || isNaN(this.state.display)) {
      return;
    }
    const result = this.evaluateAndFormatExpression();

    this.setState({
      display: result,
      memory: `${this.state.memory}${this.state.display} = ${result}`,
      lastEvaluation: result,
      lastChar: input
    });
  };

  handleNumber = e => {
    const inputNumber = e.currentTarget.getAttribute("value");
    const startingDisplay = this.state.display;
    let newDisplay = "";

    if (this.checkDisplayLength(this.state.display)) {
      this.showDisplayLimitReached();
      return;
    }

    if (this.checkZerosandPeriods(inputNumber, startingDisplay)) {
      return;
    }

    if (startingDisplay === "0" || this.state.isReset) {
      newDisplay = inputNumber;
    } else if (this.state.lastChar === "=") {
      this.handleClear();
      newDisplay = inputNumber;
    } else {
      newDisplay = startingDisplay.concat(inputNumber);
    }

    this.setState({
      display: newDisplay,
      isReset: false,
      isOperation: false,
      lastChar: inputNumber
    });
  };

  handleOperation = e => {
    const inputOperation = e.currentTarget.getAttribute("value");
    const startingDisplay = this.state.display;
    const updatedDisplay = startingDisplay.concat(inputOperation);

    if (inputOperation === this.state.lastChar) {
      return;
    }

    if (this.state.lastChar === "=") {
      this.setState({
        memory: this.state.lastEvaluation.concat(inputOperation),
        display: inputOperation,
        isOperation: true,
        isReset: true,
        lastChar: inputOperation
      });
    } else if (!this.state.isOperation) {
      this.setState({
        memory: this.state.memory.concat(updatedDisplay),
        display: inputOperation,
        isReset: true,
        isOperation: true,
        lastChar: inputOperation
      });
    } else if (inputOperation === "-" && !startingDisplay.includes("-")) {
      this.setState({
        memory: this.state.memory.concat(inputOperation),
        display: updatedDisplay,
        isReset: true,
        isOperation: true,
        lastChar: inputOperation
      });
    } else {
      this.setState({
        display: inputOperation,
        memory: this.state.memory.slice(0, -2).concat(inputOperation),
        isReset: true,
        isOperation: true,
        lastChar: inputOperation
      });
    }
  };

  evaluateAndFormatExpression = () => {
    const result = math.format(
      math.evaluate(this.state.memory.concat(this.state.display), {
        precision: 6
      })
    );
    return result.toString();
  };

  checkZerosandPeriods = (inputNumber, display) => {
    if (
      (inputNumber === "0" && display === "0") ||
      (inputNumber === "." && display.includes(inputNumber))
    ) {
      return true;
    }
  };

  checkDisplayLength = display => {
    return display.length > 22;
  };

  showDisplayLimitReached = display => {
    const originalDisplay = display;

    this.setState({
      display: "Display Limit Met"
    });
    setTimeout(
      () =>
        this.setState({
          display: originalDisplay
        }),
      1000
    );
  };

  render() {
    console.log(math.evaluate("5 * - + 5"));
    return (
      <div className="flex items-center justify-center h-screen bg-gray-200 ">
        <div className="flex-column text-white align-middle text-center w-64">
          <div className="flex-column text-white align-middle text-center bg-black h-auto border rounded shadow-md ">
            <div className="flex mx-1 mt-2">
              <div className="w-4/4 px-1 flex-grow ">
                <Display
                  display={this.state.display}
                  memory={this.state.memory}
                />
                <Keyboard
                  handleClear={this.handleClear}
                  handleEquals={this.handleEquals}
                  handleOperation={this.handleOperation}
                  handleNumber={this.handleNumber}
                />
              </div>
            </div>
          </div>
          <div className ="mt-16">
            <div className="font-mono text-center text-gray-800 font-medium text-xs ">
              Created with
            </div>
            <div
              className="flex items-center content-center"
              style={{ filter: "grayscale(80%)" }}
            >
              <div className="flex h-12 w-1/3">
                <TailwindLogo />
              </div>

              <div
                className="flex content-center items-center justify-center h-12 w-1/3"
                style={{ filter: "grayscale(80%)" }}
              >
                <ReactLogo />
              </div>

              <div
                className="flex content-center items-center justify-center h-12 w-1/3"
                style={{ filter: "grayscale(80%)" }}
              >
                <MathjsLogo />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;