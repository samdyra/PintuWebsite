
import createDataContext from "./helpers/CreateContext";


interface Action {
  type: string;
  payload: Array<object>
}

type Dispatch = {
  type: string;
  payload: Array<object>;
};

const coinListReducer = (state:Array<object>, action: Action) => {
  switch (action.type) {
  case "get":
    return action.payload 

  default:
    return state;
  }
};

const getAllCoin = (dispatch: (param: Dispatch) => void) => async (payload: Array<object>) => {
  dispatch({ type: "get", payload });
};

export const { Context, Provider } = createDataContext(
  coinListReducer,
  { getAllCoin },
  []
);
