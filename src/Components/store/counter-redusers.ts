export type ActionsType =
  | ReturnType<typeof setLimitsAC>
  | ReturnType<typeof incrementAC>
  | ReturnType<typeof resetAC>

export type StateType = {
  minValue: number,
  maxValue: number,
  counterValue: number,
}

const initialState: StateType = {
  minValue: 0,
  maxValue: 5,
  counterValue: 1,
}

export function counterReducer (state: StateType = initialState, action: ActionsType): StateType {
  switch(action.type) {
    case 'SET-LIMIT':
      return {...state, minValue: action.minValue, maxValue: action.maxValue}
    case 'INCREMENT':
      return {...state, counterValue: state.counterValue + 1}
    case 'RESET':
    return {...state, counterValue: state.minValue}
    default: return state;
  }
}

export const setLimitsAC = (minValue: number, maxValue: number) => ({type: 'SET-LIMIT', minValue, maxValue} as const)

export const incrementAC = () => ({type: 'INCREMENT'} as const)

export const resetAC = () => ({type: 'RESET'} as const)