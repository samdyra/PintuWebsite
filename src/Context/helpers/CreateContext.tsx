import React, { useReducer } from "react";


type Actions = {
  [key: string]: (dispatch: React.Dispatch<any>) => (payload: Array<object>) => void;
};

type Reducer<StateType, ActionType> = (state: StateType, action: ActionType) => object

export default (reducer: Reducer<any, any>, actions: Actions, initialState: []) => {
  const Context = React.createContext<any>({});
  const Provider = ({ children }:any ) => {
    const [ state, dispatch ] = useReducer(reducer, initialState);
  
    const boundActions: { [key: string]: (param: Array<object>) => void } = {};
    for (const key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};