import { useReducer } from "react";

const initialState = {
  count: 0,
};

type CounterState = {
  count: number;
};

// type CounterAction = {
//   type: "increment" | "decrement" | "reset";
//   payload: number;
// };

// discriminated union

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction;

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count : {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
        Incement 2
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
        decrement 2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default Counter;
