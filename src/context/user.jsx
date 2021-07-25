import React, { createContext, useState, useMemo } from 'react';

const initialValues = {
  name: "Chijindu Amadi",
  balance: 0.00,
  image: "",
  accountNumber: '3115588991',
  email: "test@email.com"
};

const UserContext = createContext(initialValues);

const { Provider } = UserContext;

const UserProvider = ({ children }) => {
const [userData,  setUserData] = useState(initialValues);

  const contextValue = useMemo(
    () => ({
      userData,
      setUserData
    }),
    [userData]
  );

  return <Provider value={contextValue}>{children}</Provider>;
};


export { UserContext, UserProvider };
