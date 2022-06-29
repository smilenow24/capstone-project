import {render, screen} from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import InputDataDialog from './InputDataDialog.js';

describe('InputDataDialog', () => {

    it('is an accessible form', () => {
        render(<InputDataDialog />);
        screen.getByLabelText('Please insert data - only numbers allowed:');
        screen.getByRole('button', {name: 'Submit'});
      });

    /* Dieser Test ist für eine spätere Verwendung reserviert:

    it('testing submit', async () => {
        const user = userEvent.setup();
        const callback = jest.fn();
        render(<InputDataDialog setInputs={callback} />);
    
        const input = screen.getByLabelText('Please insert data - only numbers allowed:');
        await user.type(input, '7{Enter}');
        expect(callback).toHaveBeenCalledWith('7');
      });
    
    it('inputfield allow 20 digits', async () => {
        const user = userEvent.setup();
        const callbackLenght = jest.fn();
        render(<InputDataDialog setInputs={callbackLenght} />);
    
        const input = screen.getByLabelText('Please insert data - only numbers allowed:');
        const longText = Array(20).fill('1').join('');
        await user.type(input, longText + '{Enter}');
        expect(callbackLenght).toHaveBeenCalledWith(longText);
    });

    it('inputfield not allow more than 20 digits', async () => {
        const user = userEvent.setup();
        const callbackLenght = jest.fn();
        render(<InputDataDialog setInputs={callbackLenght} />);
    
        const input = screen.getByLabelText('Please insert data - only numbers allowed:');
        const longText = Array(20).fill('1').join('');
        const tooLongText = longText + '000';
        await user.type(input, tooLongText + '{Enter}');
        expect(callbackLenght).toHaveBeenCalledWith(longText);
    }); */
    
    
});
