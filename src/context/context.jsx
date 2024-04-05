import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);
const GlobalState = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        navOpen,
        setNavOpen,
        searchInput,
        setSearchInput,
        loading,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
