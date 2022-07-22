import {nanoid} from 'nanoid';

export const initialInputData = {
  electric: [
    {
      id: nanoid(),
      date: new Date('2022-07-20'),
      value: 119000,
      increase: 1000,
    },
    {
      id: nanoid(),
      date: new Date('2022-07-19'),
      value: 118000,
      increase: 6000,
    },
    {
      id: nanoid(),
      date: new Date('2022-07-18'),
      value: 112000,
      increase: 0,
    },
    {
      id: nanoid(),
      date: new Date('2022-07-17'),
      value: 110000,
      increase: 0,
    },
    {
      id: nanoid(),
      date: new Date('2022-07-16'),
      value: 109500,
      increase: 0,
    },
  ],
  heating: [
    {
      id: nanoid(),
      date: new Date('2022-07-21'),
      value: 80000,
      increase: 5000,
    },
    {
      id: nanoid(),
      date: new Date('2022-07-20'),
      value: 80000,
      increase: 5000,
    },
    {
      id: nanoid(),
      date: new Date('2022-07-19'),
      value: 80000,
      increase: 0,
    },
    {
      id: nanoid(),
      date: new Date('2022-07-18'),
      value: 79000,
      increase: 0,
    },
  ],
  mobility: [
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
  dataNeeded: 'I am hungry! Please give me input.',
  inputAwait: 'New input please',
  inputToHight: 'Increase to high!',
  dailyBudgetExceeded: 'Your consumption is to high',
  totalBudgetOk: 'Total consumption OK',
  totalBudgetExceeded: 'Your total consumption is to high',
};
