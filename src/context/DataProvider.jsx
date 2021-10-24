import { useReducer } from "react";
import { dataReducer } from "../reducer/dataReducer";

const { createContext, useContext } = require("react");

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    cartItems: [],
    savedItems: [],
  };

  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{ data: state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
