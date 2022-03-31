import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useToggleFavorite = () => {
  const [favorites, setFavorite] = useLocalStorage('favorites', []);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const toggleFavorite = (id: number): void => {
    if (isFavorite) {
      setFavorite(favorites.filter((item: number) => item !== id));
      setIsFavorite(false);
    } else {
      if (!existInFavorites(id)) setFavorite([...favorites, id]);
      setIsFavorite(true);
    }
  };
  const existInFavorites = (id: number): boolean => {
    if (typeof window === 'undefined') return false;
    return favorites && favorites.includes(id);
  };

  return { isFavorite, existInFavorites, toggleFavorite };
};
