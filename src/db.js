import {nanoid} from 'nanoid';

export const initialInputData = {
  electric: [
    {
      id: nanoid(),
      date: new Date('2022-07-07'),
      value: 119000,
      increase: 1000,
    },
    {
      id: nanoid(),
      date: new Date('2022-07-06'),
      value: 118000,
      increase: 6000,
    },
    {
      id: nanoid(),
      date: new Date('2022-07-05'),
      value: 112000,
      increase: 0,
    },
  ],
  heating: [
    {
      id: nanoid(),
      date: new Date('2022-07-11'),
      value: 80000,
      increase: 5000,
    },
    {
      id: nanoid(),
      date: new Date('2022-07-09'),
      value: 75000,
      increase: 5000,
    },
    {
      id: nanoid(),
      date: new Date('2022-07-07'),
      value: 70000,
      increase: 0,
    },
  ],
};

export const messages = {
  success: 'Well done!',
  dataNeeded: 'I am hungry! Please give me energy data',
  inputAwait: 'New input please',
  inputToHight: 'Increase to high!',
  dailyBudgetExceeded: 'Your consumption is to high',
  totalBudgetExceeded: 'Your total consumption is to high',
};
