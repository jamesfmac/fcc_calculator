import React from "react";
import classNames from 'classnames';

class Key extends React.Component {


  render() {
 const btnWrapperClass = classNames({
   "px-1":true,
   "w-1/2":!this.props.wide,
   "w-2/2":this.props.wide
 })
 const btnClass = classNames(
  "flex w-full",
  "justify-center",
  "items-center",
  "h-12",
  "cursor-default",
  "hover:text-black",
  "focus:outline-none",
  "hover:shadow-outline",
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
          className={btnClass}
          style = {this.props.style}
        >
          {this.props.value}
        </button>
      </div>
    );
  }
}

export default Key;
