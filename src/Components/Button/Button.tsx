import React from "react";
import s from './Button.module.css'

type ButtonPropsType = {
  onClick: () => void
  isDisabled: boolean
  title: string
}

export const Button: React.FC<ButtonPropsType> = ({onClick, isDisabled, title}) => {
  return (
    <button className={s.button} onClick={() => onClick()} disabled={isDisabled}>{title}</button>
  );
}