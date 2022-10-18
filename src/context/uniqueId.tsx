import { createContext, useContext, useState } from "react";

interface IId {
  uniqueId: number[];
  setUniqueId: (id: number[]) => void;
}

const INITIAL_VALUE: IId = {
  uniqueId: [],
  setUniqueId: () => {},
};

const ContextId = createContext<IId>(INITIAL_VALUE);

export function ProviderId({ children }: { children: React.ReactNode }) {
  const [uniqueId, setUniqueId] = useState<number[]>([]);

  return (
    <ContextId.Provider value={{ uniqueId, setUniqueId }}>
      {children}
    </ContextId.Provider>
  );
}

export function useId() {
  const { uniqueId, setUniqueId } = useContext(ContextId);

  return { uniqueId, setUniqueId };
}
