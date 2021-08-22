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

export const tasks: Array<Task> = [
  { id: 1, checked: true, description: 'Preparar reunião de planejamento.', date: '2021/08/23', category: 1, priority: 1, },
  { id: 2, checked: false, description: 'Levar o cachorro para passear.', date: '2021/08/26', category: 3, priority: 2, },
  { id: 3, checked: false, description: 'Fazer comprar no mercado', date: '2021/08/25', category: 1, priority: 3, },
  { id: 4, checked: true, description: 'Se matricular no curso de inglês', date: '2021/08/22', category: 2, priority: 2, },
  { id: 5, checked: false, description: 'Ir ao médico', date: '2021/08/23', category: 2, priority: 2, },
  { id: 6, checked: true, description: 'Levar o gato no petshop', date: '2021/08/28', category: 2, priority: 2, },
  { id: 7, checked: false, description: 'Limpar a casa', date: '2021/08/26', category: 2, priority: 1, }
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
