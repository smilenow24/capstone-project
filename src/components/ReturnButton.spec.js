import {render, screen} from '@testing-library/react';

import ReturnButton from './ReturnButton';

describe('ReturnButton', () => {
  it('renders a button', () => {
    render(<ReturnButton />);
    screen.getByRole('button', {name: 'return to main site button'});
    screen.queryAllByText('img', {src: 'iconReturnButton'});
  });
});
