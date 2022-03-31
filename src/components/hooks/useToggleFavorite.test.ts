import '@testing-library/jest-dom/extend-expect';
import { useToggleFavorite } from './useToggleFavorite';
import {
  renderHook,
  act,
  RenderHookResult,
  RenderHookOptions,
  RenderResult,
  Renderer,
} from '@testing-library/react-hooks';
interface P {
  isFavorite: boolean;
  existInFavorites: (id: number) => boolean;
  toggleFavorite: (id: number) => void;
}
interface S {}
describe('Test useToggleFavorite hook', () => {
  let rendered: RenderHookResult<S, P, Renderer<S>>;
  beforeEach(() => {
    rendered = renderHook(() => useToggleFavorite());
  });
  test('Test initialize useToggleFavorite hook', () => {
    const { current } = rendered.result;
    expect(current.isFavorite).toBe(false);
    expect(current.existInFavorites).toBeInstanceOf(Function);
    expect(current.toggleFavorite).toBeInstanceOf(Function);
  });
  test('Test toggleFavorite id', () => {
    const id = 1;
    const { result } = rendered;
    act(() => {
      result.current.toggleFavorite(id);
    });
    expect(result.current.isFavorite).toBe(true);
    act(() => {
      result.current.toggleFavorite(id);
    });
    expect(result.current.isFavorite).toBe(false);
  });
  test('Test isInFavorite function id 2', () => {
    const id = 2;
    const { result } = rendered;
    act(() => {
      result.current.toggleFavorite(id);
    });
    expect(result.current.isFavorite).toBe(true);
    act(() => {
      if (result.current.existInFavorites(id)) {
        result.current.toggleFavorite(id);
      }
    });
    expect(result.current.isFavorite).toBe(false);
  });
});
