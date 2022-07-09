import {render, screen} from '@testing-library/react';

import Header from './Header.js';

describe('InputDataDialog', () => {
  it('is an accessible form', () => {
    render(<Header />);
    screen.getByRole('banner');
  });
});
