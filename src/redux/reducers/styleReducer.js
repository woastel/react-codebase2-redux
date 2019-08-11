import { SET_STYLE_DARK, SET_STYLE_LIGHT } from '../actions/types';

const initialState = {
  color: "#eaafea",
  backgroundColor: "#511951"
}

export default function(state = initialState, action ) {
  switch(action.type) {
    case SET_STYLE_DARK:
      return {
        ...state,
        color: action.color,
        backgroundColor: action.backgroundColor
      }
    case SET_STYLE_LIGHT:
      return {
        ...state,
        color: action.color,
        backgroundColor: action.backgroundColor
      }
    default: 
      return state;
  }
}