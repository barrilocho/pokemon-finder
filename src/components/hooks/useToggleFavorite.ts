import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useToggleFavorite = (id: number) => {
  const [favorites, setFavorite] = useLocalStorage('favorites', []);
  const [isFavorite, setIsFavorite] = useState(() => {
    return favorites && favorites.includes(id);
  });
  useEffect(() => {
    if (favorites && id) {
      setIsFavorite(favorites && favorites.includes(id));
    }
  }, [favorites, id]);

  const toggleFavorite = (): void => {
    if (isFavorite) {
      setFavorite(favorites.filter((item: number) => item !== id));
      setIsFavorite(false);
    } else {
      setFavorite([...favorites, id]);
      setIsFavorite(true);
    }
  };
  return [isFavorite, toggleFavorite];
};
