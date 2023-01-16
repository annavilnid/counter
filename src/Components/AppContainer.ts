import {Dispatch} from "redux";
import {connect} from "react-redux";
import { incrementAC, resetAC, setLimitsAC, StateType} from "./store/counter-redusers";
import App from "./App/App";

type MapStateToPropsType = StateType
type MapDispatchToPropsType = {
  increment: () => void
  reset: () => void
  setLimits: (counterMinValue: number, counterMaxValue: number) => void
}

export type IncrementorPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    minValue: state.minValue,
    maxValue: state.maxValue,
    counterValue: state.counterValue,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    increment: () => dispatch(incrementAC()),
    reset: () => dispatch(resetAC()),
    setLimits: (start: number, limit: number) => dispatch(setLimitsAC(start, limit)),
  }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);