import React from "react";
import classNames from "classnames";

const Key = props => {
  const btnWrapperClass = classNames({
    "w-1/2": !props.wide,
    "w-2/2": props.wide
  });
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
      "bg-gray-700": !props.color,
      "bg-gray-900": props.color === "light-grey",
      "bg-red-700": props.color === "red",
      "bg-blue-700": props.color === "blue"
    }
  );
  return (
    <div className={btnWrapperClass}>
      <button
        id={props.id}
        value={props.value}
        className={btnClass}
        style={props.style}
        onClick={props.handleClick}
      >
        {props.value}
      </button>
    </div>
  );
};

export default Key;
