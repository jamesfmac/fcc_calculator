import React from "react";
import Key from "./Key";

class Keyboard extends React.Component {
  render() {
    return (
      <div className="flex   my-3">
        <div className="flex-column w-2/4 ">
          <div className="">
            <div className="">
              <Key
                wide
                color="red"
                id="clear"
                handleClick={this.props.handleClear}
                value={"A/C"}
              />
            </div>
          </div>

          <div className="flex">
            <Key id="seven" handleClick={this.props.handleNumber} value={7} />
            <Key id="eight" handleClick={this.props.handleNumber} value={8} />
          </div>

          <div className="flex">
            <Key id="four" handleClick={this.props.handleNumber} value={4} />
            <Key id="five" handleClick={this.props.handleNumber} value={5} />
          </div>

          <div className="flex">
            <Key id="one" handleClick={this.props.handleNumber} value={1} />
            <Key id="two" handleClick={this.props.handleNumber} value={2} />
          </div>

          <Key wide id="zero" handleClick={this.props.handleNumber} value={0} />
        </div>

        <div className="flex-column w-1/4">
          <Key
            wide
            color="light-grey"
            id="divide"
            handleClick={this.props.handleOperation}
            value={"/"}
          />
          <Key wide id="nine" handleClick={this.props.handleNumber} value={9} />
          <Key wide id="six" handleClick={this.props.handleNumber} value={6} />
          <Key
            wide
            id="three"
            handleClick={this.props.handleNumber}
            value={3}
          />
          <Key
            wide
            id="decimal"
            handleClick={this.props.handleNumber}
            value={"."}
          />
        </div>

        <div className="flex-column w-1/4 ">
          <Key
            wide
            color="light-grey"
            id="multiply"
            handleClick={this.props.handleOperation}
            value={"*"}
          />

          <Key
            wide
            color="light-grey"
            id="subtract"
            handleClick={this.props.handleOperation}
            value={"-"}
          />

          <Key
            wide
            color="light-grey"
            id="add"
            handleClick={this.props.handleOperation}
            value={"+"}
          />

          <Key
            wide
            color="blue"
            id="equals"
            handleClick={this.props.handleEquals}
            style={{ height: "6.0rem" }}
            value={"="}
          />
        </div>
      </div>
    );
  }
}

export default Keyboard;
