import React from "react";
import Key from "./Key"
import Display  from "./Display"

class Calculator extends React.Component {
  render() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-200 h-vh">
        <div className="px-2">
          <div className="flex-column text-white align-middle text-center bg-gray-400 w-64 h-auto ">
            <div className="px-1">
              <div className="flex -mx-1  mt-4">
                <div className="w-4/4 px-1 flex-grow ">
                <Display  />
                </div>
              </div>
            </div>

            <div className="flex -mx-1 my-2">
              <div className="flex-column w-2/4 pl-1">
              <Key wide color="red" id="clear" value={'A/C'} />

                <div className="px-1">
                  <div className="flex -mx-1 my-2">
                    <Key id = "seven" value={7} />
                    <Key id = "eight" value={8} />
                  </div>
                </div>
                <div className="px-1">
                  <div className="flex -mx-1 my-2">
                  <Key id="four" value={4} />
                  <Key id="five" value={5} />
                  </div>
                </div>
                <div className="px-1">
                  <div className="flex -mx-1 my-2">
                  <Key id = "one" value={1} />
                  <Key id= "two" value={2} />
                  </div>
                </div>
                <div className="px-1">
                  <div className=" -mx-1 my-2">
                  <Key wide id="zero" value={0} />
                  </div>
                </div>
              </div>

              <div className="flex-column w-1/4">
                <Key wide color="light-grey" id="divide" value={'/'} />

                <div className="px-1">
                  <div className=" -mx-1 my-2">
                  <Key wide id="nine" value={9} />
                  </div>
                </div>
                <div className="px-1">
                  <div className=" -mx-1 my-2">
                  <Key wide id="six" value={6} />
                  </div>
                </div>
                <div className="px-1">
                  <div className=" -mx-1 my-2">
                  <Key wide id="three" value={3} />
                  </div>
                </div>
                <div className="px-1">
                  <div className=" -mx-1 my-2">
                  <Key wide id="decimal" value={'.'} />
                  </div>
                </div>
              </div>

              <div className="flex-column w-1/4 pr-1">
              <Key wide color="light-grey" id="multiply" value={'X'} />

                <div className="px-1">
                  <div className=" -mx-1 my-2">
                  <Key wide color="light-grey" id="subtract" value={'-'} />
                  </div>
                </div>
                <div className="px-1">
                  <div className=" -mx-1 my-2">
                  <Key wide color="light-grey" id="add" value={'+'} />
                  </div>
                </div>
                <div className="px-1">
                  <div className=" -mx-1 my-2">
                  <Key wide  color="blue" id="equals" style={{height: "6.5rem"}} value={'='} />
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
