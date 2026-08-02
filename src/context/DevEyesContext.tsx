import React, { createContext, useContext, useState } from 'react';

interface DevEyesContextType {
  devEyes: boolean;
  toggleDevEyes: () => void;
}

const DevEyesContext = createContext<DevEyesContextType>({
  devEyes: false,
  toggleDevEyes: () => {},
});

export const useDevEyes = () => useContext(DevEyesContext);

export function DevEyesProvider({ children }: { children: React.ReactNode }) {
  const [devEyes, setDevEyes] = useState(false);
  const toggleDevEyes = () => setDevEyes(prev => !prev);

  return (
    <DevEyesContext.Provider value={{ devEyes, toggleDevEyes }}>
      {children}
    </DevEyesContext.Provider>
  );
}
