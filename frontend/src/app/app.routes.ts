import { Routes } from '@angular/router';
import { Home } from './screens/home/home';
import { Counter } from './screens/counter/counter';
import { Tasks } from './screens/tasks/tasks';
import { Timer } from './screens/timer/timer';

export const routes: Routes = [
  { path: '', component: Home, },
  { path: 'counter', component: Counter },
  { path: 'timer', component: Timer },
  { path: 'tasks', component: Tasks },
];
