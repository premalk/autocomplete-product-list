import { render } from '@testing-library/react';
import App from './App';

test('Snapshot Test of Application', () => {
  const app = render(<App />);
  expect(app).toMatchSnapshot();
});
