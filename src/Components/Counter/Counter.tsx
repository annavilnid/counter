import React from "react";

type CounterPropsType = {
  value?: number
  message?: string
  className: () => string
}

export const Counter: React.FC<CounterPropsType> = ({className, value, message}) => {
  return (
    <span className={className()}>{message ? message : value}</span>
  );
}
