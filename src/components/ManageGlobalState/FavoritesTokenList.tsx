import { useTokenContext } from "@/providers/TokenProvider";

export function FavoritesList() {
  const { favorites, removeFavorite } = useTokenContext();

  return (
    <div className="flex flex-col justify-center gap-2 2xl:p-4 p-3 bg-gray-100 dark:bg-gray-900 rounded-lg">
      <h2 className="fontSizeFromXl font-bold text-primary-colors">
        Favorite Tokens
      </h2>
      {favorites.length === 0 ? (
        <p className="fontSizeFromLg text-secondary-colors font-normal">
          No favorites added yet.
        </p>
      ) : (
        favorites.map((token) => (
          <div
            key={token.id}
            className="flex justify-between items-center gap-2"
          >
            <span className="fontSizeFromLg text-secondary-colors font-normal">
              {token.name}
            </span>
            <button
              onClick={() => removeFavorite(token.id)}
              className="bg-red-500 text-white px-2.5 py-1.5 rounded-md"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export const favoritesListSourceCode = `import { useTokenContext } from "@/providers/TokenProvider";

export default function FavoritesList() {
  const { favorites, removeFavorite } = useTokenContext();

  return (
    <div className="flex flex-col justify-center gap-2 2xl:p-4 p-3 bg-gray-100 dark:bg-gray-900 rounded-lg">
      <h2 className="fontSizeFromXl font-bold text-primary-colors">
        Favorite Tokens
      </h2>
      {favorites.length === 0 ? (
        <p className="fontSizeFromLg text-secondary-colors font-normal">
          No favorites added yet.
        </p>
      ) : (
        favorites.map((token) => (
          <div
            key={token.id}
            className="flex justify-between items-center gap-2"
          >
            <span className="fontSizeFromLg text-secondary-colors font-normal">
              {token.name}
            </span>
            <button
              onClick={() => removeFavorite(token.id)}
              className="bg-red-500 text-white px-2.5 py-1.5 rounded-md"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}`;
