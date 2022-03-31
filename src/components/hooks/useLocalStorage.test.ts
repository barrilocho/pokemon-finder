import '@testing-library/jest-dom/extend-expect';
import { useLocalStorage } from './useLocalStorage';
import { renderHook, act } from '@testing-library/react-hooks';

describe('Test useLocalStorage hook', () => {
  test('Test initialize useLocalStorage hook', () => {
    const { result } = renderHook(() => useLocalStorage('test', 'test'));
    expect(result.current[0]).toBe('test');
    expect(result.current[1]).toBeInstanceOf(Function);
  });
  test('Test set value to useLocalStorage hook', () => {
    const newValue = 'newValue';
    const { result } = renderHook(() => useLocalStorage('test', 'test'));
    act(() => {
      result.current[1](newValue);
    });
    expect(result.current[0]).toBe(newValue);
  });
  test('Test set array value to useLocalStorage hook', () => {
    const newValue = [1, 2, 3];
    const testArray = ['test', 'test2'];
    const { result } = renderHook(() => useLocalStorage('array', testArray));
    expect(result.current[0]).toBe(testArray);
    act(() => {
      result.current[1](newValue);
    });
    expect(result.current[0]).toBe(newValue);
  });
  test('Test set object value to useLocalStorage hook', () => {
    const newValue = { a: 1, b: 2 };
    const testObject = { a: 1, b: 2 };
    const { result } = renderHook(() => useLocalStorage('object', testObject));
    expect(result.current[0]).toBe(testObject);
    act(() => {
      result.current[1](newValue);
    });
    expect(result.current[0]).toBe(newValue);
  });
});
