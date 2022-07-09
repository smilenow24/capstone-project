import {render, screen} from '@testing-library/react';

import BarChart from './BarChart';
import LineChart from './LineChart';

describe('LineChart', () => {
  it('is an accessible form', () => {
    render(<LineChart />);
    screen.getBy('banner');
  });
});

describe('BarChart', () => {
  it('is an accessible form', () => {
    render(<BarChart />);
    screen.getByRole('banner');
  });
});
