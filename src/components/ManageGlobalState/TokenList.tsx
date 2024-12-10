import { useTokenContext } from "@/providers/TokenProvider";
import React from "react";

const tokens = [
  { id: "1", name: "Bitcoin" },
  { id: "2", name: "Ethereum" },
  { id: "3", name: "Solana" },
];

export function TokenList() {
  const { addFavorite, favorites } = useTokenContext();

  const isFavorite = (tokenId: string) => {
    return favorites.some((favToken) => favToken.id === tokenId);
  };

  return (
    <div className="flex flex-col justify-center gap-2 2xl:p-4 p-3 bg-gray-100 dark:bg-gray-900 rounded-lg">
      <h2 className="fontSizeFromXl font-bold text-primary-colors">
        All Tokens
      </h2>
      {tokens.map((token) => (
        <div key={token.id} className="flex justify-between items-center gap-2">
          <span className="fontSizeFromLg text-secondary-colors font-normal">
            {token.name}
          </span>
          <button
            onClick={() => addFavorite(token)}
            className={`bg-blue-500 text-white px-2.5 py-1.5 rounded-md ${
              isFavorite(token.id) ? "bg-gray-400 cursor-not-allowed" : ""
            }`}
            disabled={isFavorite(token.id)}
          >
            {isFavorite(token.id) ? "Already in Favorites" : "Add to Favorites"}
          </button>
        </div>
      ))}
    </div>
  );
}

export const tokenListSourceCode = `import { useTokenContext } from "@/providers/TokenProvider";
import React from "react";

const tokens = [
  { id: "1", name: "Bitcoin" },
  { id: "2", name: "Ethereum" },
  { id: "3", name: "Solana" },
];

export default function TokenList() {
  const { addFavorite, favorites } = useTokenContext();

  const isFavorite = (tokenId: string) => {
    return favorites.some((favToken) => favToken.id === tokenId);
  };

  return (
    <div className="flex flex-col gap-2">
      <h2 className="fontSizeFromXl font-bold text-primary-colors">
        All Tokens
      </h2>
      {tokens.map((token) => (
        <div key={token.id} className="flex justify-between items-center gap-2">
          <span className="fontSizeFromLg text-secondary-colors font-normal">
            {token.name}
          </span>
          <button
            onClick={() => addFavorite(token)}
            className='bg-blue-500 text-white px-2.5 py-1.5 rounded-md 
              isFavorite(token.id) ? "bg-gray-400 cursor-not-allowed" : ""
            '
            disabled={isFavorite(token.id)}
          >
            {isFavorite(token.id) ? "Already in Favorites" : "Add to Favorites"}
          </button>
        </div>
      ))}
    </div>
  );
}`;
