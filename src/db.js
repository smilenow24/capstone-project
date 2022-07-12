import {nanoid} from 'nanoid';

export const initialInputData = [
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
];

export const messages = {
  success: 'Well done!',
  dataNeeded: 'I am hungry! Please give me energy data',
  inputAwait: 'New input please',
  inputToHight: 'Increase to high!',
};
