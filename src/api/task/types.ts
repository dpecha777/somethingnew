import { User } from '../user/types';

export type TaskStatus = 'backlog' | 'doing' | 'done';

export type Task = {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  description: string;
  estimation: string;
  status: TaskStatus;
  user: User;
};
