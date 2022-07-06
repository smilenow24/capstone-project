import { nanoid } from "nanoid";

export const initialInputData = [
  {
    id: nanoid(),
    date: "20/06/2022",
    value: 119000,
    increase: 1000
  },
  {
    id: nanoid(),
    date: "15/06/2022",
    value: 118000,
    increase: 6000
  },
  {
    id: nanoid(),
    date: "10/06/2022",
    value: 112000,
    increase: 0
  }
];

export const messages = [
    {
      id: 0,
      text: "I am hungry! Please give me energy data"
    },
    {
      id: 1,
      text: "Well done!"
    },
    {
      id: 2,
      text: "New input please"
    }
  ];


