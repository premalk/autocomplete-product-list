import { render } from '@testing-library/react';
import AutoComplete from '../AutoComplete';

test('Snapshot Test of auto-complete container', () => {
  const autoComplete = render(<AutoComplete />);
  expect(autoComplete).toMatchSnapshot();
});
