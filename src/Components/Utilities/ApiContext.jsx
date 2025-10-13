import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AppContext = createContext();

export function ApiContext({children}) {
  const [appsContext,setAppsContext] = useState([]);
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
    <AppContext.Provider value={{appsContext}}>
      {children}
    </AppContext.Provider>
  );
}

export default ApiContext;
