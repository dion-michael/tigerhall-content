import { renderHook, waitFor } from '@testing-library/react';
import useDebounce from '../hooks/useDebounce';

jest.useFakeTimers();

describe('helper functions test', () => {
  it('should render the hook', async () => {
    const mockFn = jest.fn();
    const { result } = renderHook(() => useDebounce(mockFn, 100));
    await waitFor(() => {
      expect(result.current).toBeDefined();
    });
    result.current();
    jest.runAllTimers();
    await waitFor(() => {
      expect(mockFn).toBeCalled();
    });
  });
});
