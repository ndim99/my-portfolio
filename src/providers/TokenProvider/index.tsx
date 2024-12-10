import React, { createContext, useContext, useState, useEffect } from "react";

type Token = {
  id: string;
  name: string;
};

type TokenContextType = {
  favorites: Token[];
  addFavorite: (token: Token) => void;
  removeFavorite: (tokenId: string) => void;
};

const TokenContext = createContext<TokenContextType | undefined>(undefined);

export const TokenProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Token[]>([]);

  useEffect(() => {
    const storedFavorites =
      typeof window !== "undefined" ? localStorage.getItem("favorites") : null;
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const addFavorite = (token: Token) => {
    const updatedFavorites = [...favorites, token];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const removeFavorite = (tokenId: string) => {
    const updatedFavorites = favorites.filter((token) => token.id !== tokenId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <TokenContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useTokenContext = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useTokenContext must be used within a TokenProvider");
  }
  return context;
};

export const tokenProviderSourceCode = `import React, { createContext, useContext, useState, useEffect } from "react";

type Token = {
  id: string;
  name: string;
};

type TokenContextType = {
  favorites: Token[];
  addFavorite: (token: Token) => void;
  removeFavorite: (tokenId: string) => void;
};

const TokenContext = createContext<TokenContextType | undefined>(undefined);

export const TokenProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Token[]>([]);

  useEffect(() => {
    const storedFavorites =
      typeof window !== "undefined" ? localStorage.getItem("favorites") : null;
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const addFavorite = (token: Token) => {
    const updatedFavorites = [...favorites, token];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const removeFavorite = (tokenId: string) => {
    const updatedFavorites = favorites.filter((token) => token.id !== tokenId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <TokenContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useTokenContext = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useTokenContext must be used within a TokenProvider");
  }
  return context;
};
`;
