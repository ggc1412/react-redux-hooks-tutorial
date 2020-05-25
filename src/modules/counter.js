import { createAction, handleActions } from "redux-actions";

const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

const initialState = 0;

const counter = handleActions(
  {
    [INCREMENT]: (state, action) => state + 1,
    [DECREMENT]: (state, action) => state - 1,
  },
  initialState
);

export default counter;
