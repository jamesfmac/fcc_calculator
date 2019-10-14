import React from "react";
import classNames from 'classnames';

class Key extends React.Component {


  render() {
 const btnWrapperClass = classNames({
   
   "w-1/2":!this.props.wide,
   "w-2/2":this.props.wide
 })
 const btnClass = classNames(
  "flex w-full",
  "justify-center",
  "items-center",
"border-black",
"border",
  "h-12",
  "cursor-default",
  "hover:text-black",
  "focus:outline-none",
  "hover:border-gray-500",
  {
  "bg-gray-700": !this.props.color,
  "bg-gray-900": this.props.color === "light-grey",
  "bg-red-700": this.props.color === "red",
  "bg-blue-700": this.props.color ==="blue",
 })


    return (
      <div className={btnWrapperClass}>
        <button
          id={this.props.id}
          value={this.props.value}
          className={btnClass}
          style = {this.props.style}
          onClick = {this.props.handleClick}
        >
          {this.props.value}
        </button>
      </div>
    );
  }
}

export default Key;
