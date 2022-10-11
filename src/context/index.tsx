import { createContext, useEffect, useState, useContext } from "react";
import { callData } from "../services";
import { IData, IPropsData, DEFAULT_VALUE } from "./types";

const DataContext = createContext<IPropsData>(DEFAULT_VALUE);

export function DataProvider({ children }: { children: JSX.Element }) {
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    const setState = async () => {
      let datas = await callData();
      return setData(datas);
    };

    setState();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const { data, setData } = useContext(DataContext);

  return { data, setData };
}
