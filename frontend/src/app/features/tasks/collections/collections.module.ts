import { Task, Category, Priority, Filter} from '../models/task.model'

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

export const filters: Filter = {
  description: ""
}

export const tasks: Array<Task> = [];

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
