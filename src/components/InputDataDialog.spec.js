import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {BrowserRouter} from 'react-router-dom';

import InputDataDialog from './InputDataDialog.js';

describe('InputDataDialog', () => {
  it('is an accessible form', () => {
    render(
      <BrowserRouter>
        <InputDataDialog />
      </BrowserRouter>
    );
    screen.getByLabelText('Enter your energy consumption - watt/h:');
    screen.getByRole('button', {name: 'Submit'});
    screen.getByRole('textbox');
    screen.queryByText('total');
  });

  it('testing submit', async () => {
    const user = userEvent.setup();
    const callback = jest.fn();
    render(<InputDataDialog updateInput={callback} />);

    const input = screen.getByLabelText('Enter your energy consumption - watt/h:');
    await user.type(input, '7{Enter}');
    expect(callback).toHaveBeenCalledWith('7');
  });
});
