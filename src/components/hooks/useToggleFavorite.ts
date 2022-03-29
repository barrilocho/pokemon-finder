import { useLocalStorage } from './useLocalStorage';

export const useToggleFavorite = (id: number) => {
  const [favorites, setFavorite] = useLocalStorage('favorites', []);
  let isFavorite = (favorites && favorites.includes(id)) || false;

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorite(favorites.filter((item: number) => item !== id));
    } else {
      setFavorite([...favorites, id]);
    }
  };
  return { isFavorite, toggleFavorite };
};
