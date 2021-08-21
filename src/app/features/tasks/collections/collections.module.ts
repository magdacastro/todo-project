import { Task, Category, Priority } from '../models/task.module'

export const categories: Array<Category> = [
    { name: 'Work', value: 1 },
    { name: 'Home', value: 2 },
    { name: 'Shopping', value: 3 },
  ];

export const priorities: Array<Priority> = [
    { name: 'High', value: 1 },
    { name: 'Medium', value: 2 },
    { name: 'Low', value: 3 },
  ];

export const tasks: Array<Task> = [
    {
      id: 1,
      checked: true,
      description: 'Preparar reunião de planejamento.',
      date: '2021/08/20',
      category: 1,
      priority: 1,
    },
    {
      id: 2,
      checked: false,
      description: 'Levar o cachorro para passear.',
      date: '2021/08/18',
      category: 2,
      priority: 2,
    },
  ];

  export const months: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
