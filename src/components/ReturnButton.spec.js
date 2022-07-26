import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import ReturnButton from './ReturnButton';

describe('ReturnButton', () => {
  it('renders a button', () => {
    render(
      <BrowserRouter>
        <ReturnButton />
      </BrowserRouter>
    );
    screen.getByRole('button', {name: 'return to main site button'});
    screen.queryAllByText('img', {src: 'iconReturnButton'});
  });
});
