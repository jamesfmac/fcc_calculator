import React from "react";
import Key from "./Key"

class Calculator extends React.Component {
  render() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-200 h-vh">
        <div className="px-2">
          <div className="flex-column text-white align-middle text-center bg-gray-400 w-64 h-auto ">
            <div className="px-1">
              <div className="flex -mx-1  mt-4">
                <div className="w-4/4 px-1 flex-grow ">
                  <div className="flex justify-center items-center bg-black h-12">
                    {" "}
                    Display
                  </div>
                </div>
              </div>
            </div>

            <div className="flex -mx-1 my-2">
              <div className="flex-column w-2/4 pl-1">
                <div className="w-2/2 px-1">
                  <div className="bg-gray-600 h-12"> A/C</div>
                </div>

                <div className="px-1">
                  <div className="flex -mx-1 my-2">
                    <Key value={7} />
                    <Key value={8} />
                  </div>
                </div>
                <div className="px-1">
                  <div className="flex -mx-1 my-2">
                  <Key value={4} />
                  <Key value={5} />
                  </div>
                </div>
                <div className="px-1">
                  <div className="flex -mx-1 my-2">
                  <Key value={3} />
                  <Key value={2} />
                  </div>
                </div>
                <div className="px-1">
                  <div className=" -mx-1 my-2">
                    <div className=" w-2/2 px-1">
                      <div className="flex flex-grow items-center justify-center bg-gray-600 h-12">
                        0
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-column w-1/4">
                <Key value={8} />

                <div className="px-1">
                  <div className=" -mx-1 my-2">
                    <div className="w-2/2 px-1">
                      <div className="bg-gray-600 h-12 ">9</div>
                    </div>
                  </div>
                </div>
                <div className="px-1">
                  <div className=" -mx-1 my-2">
                    <div className="w-2/2 px-1">
                      <div className="bg-gray-600 h-12 ">6</div>
                    </div>
                  </div>
                </div>
                <div className="px-1">
                  <div className=" -mx-1 my-2">
                    <div className="w-2/2 px-1">
                      <div className="bg-gray-600 h-12 ">3</div>
                    </div>
                  </div>
                </div>
                <div className="px-1">
                  <div className=" -mx-1 my-2">
                    <div className="w-2/2 px-1">
                      <div className="bg-gray-600 h-12 ">.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-column w-1/4 pr-1">
                <div className="w-2/2 px-1">
                  <div className="bg-gray-600 h-12 ">X</div>
                </div>

                <div className="px-1">
                  <div className=" -mx-1 my-2">
                    <div className="w-2/2 px-1">
                      <div className="bg-gray-600 h-12 ">-</div>
                    </div>
                  </div>
                </div>
                <div className="px-1">
                  <div className=" -mx-1 my-2">
                    <div className="w-2/2 px-1">
                      <div className="bg-gray-600 h-12 ">+</div>
                    </div>
                  </div>
                </div>
                <div className="px-1">
                  <div className=" -mx-1 my-2">
                    <div className="w-2/2 px-1">
                      <div className="bg-gray-600" style={{ height: "6.5rem" }}>
                        =
                      </div>
                    </div>
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
