import React from "react";

class Calculator extends React.Component {
  render() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-200 h-vh">
        <div className="px-2">
          <div className="flex-column text-white align-middle text-center bg-gray-400 w-64 h-auto ">
            
          <div className ="px-1">
              <div className= "flex -mx-1  mt-4 inline-block align-middle">
              <div className="w-4/4 px-1 flex-grow ">
                <div className= " bg-black h-12 "> Display</div>
                </div>
              </div>
            </div>

            <div className="px-1">
              <div className="flex -mx-1 my-2">
                <div className="w-2/4 px-1">
                  <div className="bg-gray-600 h-12"> A/C</div>
                </div>
                <div className="w-1/4 px-1">
                  <div className="bg-gray-600 h-12">/</div>
                </div>
                <div className="w-1/4 px-1">
                  <div className="bg-gray-600 h-12">X</div>
                </div>
              </div>
            </div>
           

            <div className="px-1">
              <div className="flex -mx-1 my-2">
                <div className="w-1/4 px-1">
                  <div className="bg-gray-600 h-12">7</div>
                </div>
                <div className="w-1/4 px-1">
                  <div className="bg-gray-600 h-12">8</div>
                </div>
                <div className="w-1/4 px-1">
                  <div className="bg-gray-600 h-12">9</div>
                </div>
                <div className="w-1/4 px-1">
                  <div className="bg-gray-600 h-12">-</div>
                </div>
              </div>
            </div>
            <div className="px-1 ">
              <div className="flex -mx-1 my-2">
                <div className="w-1/4 px-1">
                  <div className="bg-gray-600 h-12">4</div>
                </div>
                <div className="w-1/4 px-1">
                  <div className="bg-gray-600 h-12">5</div>
                </div>
                <div className="w-1/4 px-1">
                  <div className="bg-gray-600 h-12">6</div>
                </div>
                <div className="w-1/4 px-1">
                  <div className="bg-gray-600 h-12">+</div>
                </div>
              </div>
            </div>
            <div className="px-1 ">
              <div className="flex -mx-1 my-2">
                <div className="w-1/4 px-1">
                  <div className="bg-gray-600 h-12">1</div>
                </div>
                <div className="w-1/4 px-1">
                  <div className="bg-gray-600 h-12">2</div>
                </div>
                <div className="w-1/4 px-1">
                  <div className="bg-gray-600 h-12">3</div>
                </div>
                <div className="w-1/4 px-1">
                  <div className="bg-gray-600 h-12"></div>
                </div>
              </div>
            </div>
            <div className="px-1">
              <div className="flex -mx-1 my-2">
                <div className="w-2/4 px-1">
                  <div className="bg-gray-600 h-12">0</div>
                </div>
                <div className="w-1/4 px-1">
                  <div className="bg-gray-600 h-12">.</div>
                </div>
                <div className="w-1/4 px-1">
                  <div className="bg-gray-600 h-12"></div>
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
