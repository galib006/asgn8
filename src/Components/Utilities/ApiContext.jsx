import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
const AppContext = createContext();

export function AppProvider({ children }) {
  const [AppsContext, setAppsContext] = useState([]);
  useEffect(() => {
    axios
      .get("apps.json")
      .then((res) => {
        setAppsContext(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <AppContext.Provider value={{ AppsContext, setAppsContext }}>
      {children}
    </AppContext.Provider>
  );
}
function ApiContext() {
  return <div></div>;
}

export default ApiContext;
