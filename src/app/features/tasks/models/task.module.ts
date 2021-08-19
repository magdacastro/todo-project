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
