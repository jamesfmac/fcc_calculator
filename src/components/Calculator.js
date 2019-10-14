import React from "react";
import Key from "./Key";
import Display from "./Display";

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
      lastEvaluation: ""
    });
  };

  handleNumber = e => {
    const inputNumber = e.currentTarget.getAttribute("value");
    const startingDisplay = this.state.display;
    const updatedDisplay = this.state.isReset
      ? inputNumber
      : startingDisplay.concat(inputNumber);

    if (this.checkZerosandPeriods(inputNumber, startingDisplay)) {
    } else if (this.state.display === "0") {
      this.setState({
        display: inputNumber,
        isReset: false,
        isOperation: false,
        lastChar: inputNumber
      });
    } else {
      if (this.state.lastChar === "=") {
        this.handleClear();
      }

      this.setState({
        display: this.state.lastChar === "=" ? inputNumber : updatedDisplay,
        isReset: false,
        isOperation: false,
        lastChar: inputNumber
      });
    }
  };

  handleOperation = e => {
    const inputOperation = e.currentTarget.getAttribute("value");
    const startingDisplay = this.state.display;
    const updatedDisplay = startingDisplay.concat(inputOperation);
    console.log(inputOperation, this.state.display.slice(0, -1));

    if (this.state.lastChar === "=") {
      this.setState({
        memory: this.state.lastEvaluation.concat(inputOperation),
        lastChar: inputOperation,
        display: inputOperation,
        isOperation: true,
        isReset: true
      });
    } else if (
      inputOperation === this.state.display ||
      inputOperation === this.state.display.slice(0, -1)
    ) {
      return;
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
        lastChar: inputOperation
      });
    }
  };

  handleEquals = e => {
    console.log(this.state.lastChar);
    const input = e.currentTarget.getAttribute("value");

    console.log(`input: ${input} lastchar: ${this.state.lastChar}`);
    if (input === this.state.lastChar) {
      return;
    } else {
      const result = math.evaluate(
        this.state.memory.concat(this.state.display)
      );
      const resultString = result.toString();
      this.setState({
        display: resultString,
        memory: `${this.state.memory}${this.state.display} = ${resultString}`,
        lastEvaluation: resultString,
        lastChar: input
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
    console.log(math.evaluate("5 * - + 5"));
    return (
      <div className="flex items-center justify-center h-screen bg-gray-200 h-vh">
      
          <div className="flex-column text-white align-middle text-center bg-black w-64 h-auto border rounded shadow-md ">
           
              <div className="flex mx-1 mt-2">
                <div className="w-4/4 px-1 flex-grow ">
                  <Display
                    display={this.state.display}
                    memory={this.state.memory}
                  />
                </div>
           
            </div>

            <div className="flex  mx-1 my-2">
              <div className="flex-column w-2/4 pl-1">
                <div className="">
                  <div className="">
                    <Key
                      wide
                      color="red"
                      id="clear"
                      handleClick={this.handleClear}
                      value={"A/C"}
                    />
                  </div>
                </div>

                <div className="">
                  <div className="flex">
                    <Key id="seven" handleClick={this.handleNumber} value={7} />
                    <Key id="eight" handleClick={this.handleNumber} value={8} />
                  </div>
                </div>
                <div className="">
                  <div className="flex">
                    <Key id="four" handleClick={this.handleNumber} value={4} />
                    <Key id="five" handleClick={this.handleNumber} value={5} />
                  </div>
                </div>
                <div className="">
                  <div className="flex">
                    <Key id="one" handleClick={this.handleNumber} value={1} />
                    <Key id="two" handleClick={this.handleNumber} value={2} />
                  </div>
                </div>
                <div className="">
                  <div className="">
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
              <div className="">
                <Key
                  wide
                  color="light-grey"
                  id="divide"
                  handleClick={this.handleOperation}
                  value={"/"}
                />
                </div>

                <div className="">
                  <div className="">
                    <Key
                      wide
                      id="nine"
                      handleClick={this.handleNumber}
                      value={9}
                    />
                  </div>
                </div>
                
                 
                    <Key
                      wide
                      id="six"
                      handleClick={this.handleNumber}
                      value={6}
                    />
                  
                
              
                    <Key
                      wide
                      id="three"
                      handleClick={this.handleNumber}
                      value={3}
                    />
               
            
                    <Key
                      wide
                      id="decimal"
                      handleClick={this.handleNumber}
                      value={"."}
                    />
                
              </div>

              <div className="flex-column w-1/4 pr-1">
                <Key
                  wide
                  color="light-grey"
                  id="multiply"
                  handleClick={this.handleOperation}
                  value={"*"}
                />

            
                    <Key
                      wide
                      color="light-grey"
                      id="subtract"
                      handleClick={this.handleOperation}
                      value={"-"}
                    />
                
                
                    <Key
                      wide
                      color="light-grey"
                      id="add"
                      handleClick={this.handleOperation}
                      value={"+"}
                    />
               
                
                    <Key
                      wide
                      color="blue"
                      id="equals"
                      handleClick={this.handleEquals}
                      style={{ height: "6.0rem" }}
                      value={"="}
                    />
                
              </div>
            </div>
          </div>
        
      </div>
    );
  }
}

export default Calculator;
