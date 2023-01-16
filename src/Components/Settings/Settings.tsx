import React from "react";
import {Input} from "../Input/Input";

type SettingsPropsType = {
  minValue: number
  maxValue: number
  minHandler: (valueInput: number)=>void
  maxHandler: (valueInput: number)=>void
  addClassInput: boolean
}

export const Settings: React.FC<SettingsPropsType> = ({minValue, maxValue, minHandler, maxHandler, addClassInput}) => {

  return (
    <div>
      <Input
        title="max value:  "
        value={maxValue}
        onChange={maxHandler}
        addClassName={addClassInput}
      />
      <Input
        title="start value:"
        value={minValue}
        onChange={minHandler}
        addClassName={addClassInput}
      />
    </div>
  );
}
