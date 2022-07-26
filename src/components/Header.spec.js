import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import Header from './Header.js';

describe('InputDataDialog', () => {
  it('is an accessible form', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    screen.getByRole('banner');
  });
});
