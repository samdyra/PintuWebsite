
import createDataContext from "./helpers/CreateContext";


interface Action {
  type: string;
  payload: Array<object>
  payload2: Array<object>
}

type Dispatch = {
  type: string;
  payload: Array<object>;
  payload2: Array<object>
};

const coinListReducer = (state:Array<object>, action: Action) => {
  switch (action.type) {
  case "get":
    return { data1: action.payload, data2: action.payload2 }

  default:
    return state;
  }
};

const getAllCoin = (dispatch: (param: Dispatch) => void) => async (payload: Array<object>, payload2: Array<object>) => {
  dispatch({
    type: "get", payload, payload2 
  });
};

export const { Context, Provider } = createDataContext(
  coinListReducer,
  { getAllCoin },
  []
);
