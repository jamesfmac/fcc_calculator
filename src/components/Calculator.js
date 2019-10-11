import React from "react";
import Key from "./Key";
import Display from "./Display";

import * as math from "mathjs";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      history: "",
      isReset: true
    };
  }

  handleClear = () => {
    this.setState({
      display: "0",
      history: "",
      isReset: true
    });
  };

  handleNumber = e => {
    
    const inputNumber = e.currentTarget.getAttribute("value");
    const display = this.state.display;

    console.log(inputNumber + " " + display.includes(inputNumber));
    if (this.checkZerosandPeriods(inputNumber, display)) {
    } else {
      this.setState({
        display: this.state.isReset
          ? inputNumber
          : this.state.display.concat(inputNumber),
        isReset: false
      });
    }
  };

  checkZerosandPeriods = (inputNumber, display) => {
    if (
      (inputNumber === "0" && display === "0") ||
      (inputNumber === "." && display.includes(inputNumber))
    ) {
      return true;
    }
  };

  render() {
    console.log(math.evaluate("123+48/9*99"));
    return (
      <div className="flex items-center justify-center h-screen bg-gray-200 h-vh">
        <div className="px-2">
          <div className="flex-column text-white align-middle text-center bg-gray-400 w-64 h-auto ">
            <div className="px-1">
              <div className="flex -mx-1  mt-4">
                <div className="w-4/4 px-1 flex-grow ">
                  <Display value={this.state.display} />
                </div>
              </div>
            </div>

            <div className="flex -mx-1 my-2">
              <div className="flex-column w-2/4 pl-1">
                <Key
                  wide
                  color="red"
                  id="clear"
                  handleClick={this.handleClear}
                  value={"A/C"}
                />

                <div className="px-1">
                  <div className="flex -mx-1 my-2">
                    <Key id="seven" handleClick={this.handleNumber} value={7} />
                    <Key id="eight" handleClick={this.handleNumber} value={8} />
                  </div>
                </div>
                <div className="px-1">
                  <div className="flex -mx-1 my-2">
                    <Key id="four" handleClick={this.handleNumber} value={4} />
                    <Key id="five" handleClick={this.handleNumber} value={5} />
                  </div>
                </div>
                <div className="px-1">
                  <div className="flex -mx-1 my-2">
                    <Key id="one" handleClick={this.handleNumber} value={1} />
                    <Key id="two" handleClick={this.handleNumber} value={2} />
                  </div>
                </div>
                <div className="px-1">
                  <div className=" -mx-1 my-2">
                    <Key
                      wide
                      id="zero"
                      handleClick={this.handleNumber}
                      value={0}
                    />
                  </div>
                </div>
              </div>

              <div className="flex-column w-1/4">
                <Key wide color="light-grey" id="divide" value={"/"} />

                <div className="px-1">
                  <div className=" -mx-1 my-2">
                    <Key
                      wide
                      id="nine"
                      handleClick={this.handleNumber}
                      value={9}
                    />
                  </div>
                </div>
                <div className="px-1">
                  <div className=" -mx-1 my-2">
                    <Key
                      wide
                      id="six"
                      handleClick={this.handleNumber}
                      value={6}
                    />
                  </div>
                </div>
                <div className="px-1">
                  <div className=" -mx-1 my-2">
                    <Key
                      wide
                      id="three"
                      handleClick={this.handleNumber}
                      value={3}
                    />
                  </div>
                </div>
                <div className="px-1">
                  <div className=" -mx-1 my-2">
                    <Key
                      wide
                      id="decimal"
                      handleClick={this.handleNumber}
                      value={"."}
                    />
                  </div>
                </div>
              </div>

              <div className="flex-column w-1/4 pr-1">
                <Key wide color="light-grey" id="multiply" value={"X"} />

                <div className="px-1">
                  <div className=" -mx-1 my-2">
                    <Key wide color="light-grey" id="subtract" value={"-"} />
                  </div>
                </div>
                <div className="px-1">
                  <div className=" -mx-1 my-2">
                    <Key wide color="light-grey" id="add" value={"+"} />
                  </div>
                </div>
                <div className="px-1">
                  <div className=" -mx-1 my-2">
                    <Key
                      wide
                      color="blue"
                      id="equals"
                      style={{ height: "6.5rem" }}
                      value={"="}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
