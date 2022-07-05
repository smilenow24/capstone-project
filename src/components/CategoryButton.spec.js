import {render, screen} from '@testing-library/react';

import CategoryButton from "./CategoryButton";

describe('CategoryButton', () => {

    it('is an accessible form', () => {
        render(<CategoryButton />);
        screen.getByRole('button', {name: 'category electricity button'});
        screen.queryAllByText('img', {src: 'cat-elect-icon.png'});
      });
});