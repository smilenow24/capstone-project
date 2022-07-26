import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import CategoryButton from './CategoryButton';

describe('CategoryButton', () => {
  it('is an accessible form', () => {
    render(
      <BrowserRouter>
        <CategoryButton />
      </BrowserRouter>
    );
    screen.getByRole('button', {name: 'category electricity button'});
    screen.queryAllByText('img', {src: 'cat-elect-icon.png'});
  });
});
