import { effect, Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private readonly _items = signal<Array<Task>>([]);

  readonly items = this._items.asReadonly();

  constructor() {
    this._load();

    effect(() => {
      const items = this._items();
      localStorage.setItem('tasks', JSON.stringify(items));
    })
  }

  add(title: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    this._items.update((items) => [...items, newTask]);
  }

  toggle(id: string) {
    this._items.update((items) =>
      items.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)),
    );
  }

  remove(id: string) {
    this._items.update((items) => items.filter((item) => item.id !== id));
  }

  private _load() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this._items.set(JSON.parse(storedTasks));
    } else {
      this._items.set([
        { id: crypto.randomUUID(), title: 'Implement Timer Section', completed: false },
        { id: crypto.randomUUID(), title: 'Learn Angular', completed: true },
        { id: crypto.randomUUID(), title: 'Create SQL database', completed: false },
      ]);
    }
  }
}
