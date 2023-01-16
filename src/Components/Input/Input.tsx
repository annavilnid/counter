import React from "react";
import s from './Input.module.css'

type InputPropsType = {
  title: string
  value: number
  onChange: (valueInput: number)=>void
  addClassName: boolean
}

export const Input: React.FC<InputPropsType> = ({title, value, onChange, addClassName}) => {

  return (
    <div className={s.input_wrapper}>
      <label className={s.label}>{title}</label>
      <input className={`${s.input} ${addClassName && s.error} ${value < 0 && s.error}`} type="number" value={value} onChange={(e)=>onChange(+e.currentTarget.value)}/>
    </div>
  );
}