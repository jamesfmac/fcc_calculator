import React from "react";
import Keyboard from "./Keyboard";
import Display from "./Display";
import Footer from "./Footer";

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
    const result = this.evaluateAndFormatExpression();

    if (input === this.state.lastChar || isNaN(this.state.display)) {
      return;
    }
    if (this.checkDisplayLimit(this.state.display)) {
      return;
    }

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
      this.showDisplayLimitReached(this.state.display);
      return;
    }

    if (this.checkDisplayLimit(this.state.display)) {
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

    if (this.checkDisplayLimit(this.state.display)) {
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

  checkDisplayLimit = display => {
    return display === "Display Limit Met";
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
    return (
      <div className="flex flex-col  items-center justify-center h-screen min-h-screen bg-gray-200 ">
        <div className="flex flex-col flex-grow text-white align-middle justify-center text-center w-64">
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default Calculator;
