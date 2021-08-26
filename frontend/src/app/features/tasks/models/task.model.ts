export interface Category {
  name: string;
  value: number;
}

export interface Priority {
  name: string;
  value: number;
}

export interface Task {
  id: number;
  checked: boolean;
  description: string;
  date: string;
  category: number;
  priority: number;
}

export type UnsavedTask = Omit<Task, 'id'>;

export interface Filter {
  description: string;
  /*date: string;
  category: number;
  priority: number;*/
}
