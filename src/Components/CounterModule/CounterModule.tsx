import React from "react";

type CounterModulePropsType = {
  children: React.ReactNode
}

export const CounterModule: React.FC<CounterModulePropsType> = ({children}) => {
  return (
    <>
      {children}
    </>
  );
}
