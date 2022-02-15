import { render, act, fireEvent } from '@testing-library/react';
import Search from '../index';

describe('Testing Search', () => {
  const search = render(<Search />);

  test('Snapshot Test of search', () => {
    expect(search).toMatchSnapshot();
  });
  it('Pagination button testing', () => {
    const mockFn = jest.fn();
    const { getByTestId, rerender } = render(<Search callback={mockFn} />);

    act(() => {
      fireEvent.change(getByTestId('filter-search'), {
        target: { value: 'search' }
      });
    });

    rerender(<Search callback={mockFn} />);

    expect(getByTestId('filter-search').value).toBe('search');
    expect(mockFn).toBeCalledTimes(1);
  });
});
