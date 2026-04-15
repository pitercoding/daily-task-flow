import { TasksService } from './../../services/tasks.service';
import { Component, inject } from '@angular/core';
import { Title } from '../../components/shared/title/title';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tasks',
  imports: [Title, MatIconModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  readonly tasksService = inject(TasksService);

  addTask(event: Event) {
    event.preventDefault();

    const inputElement = event.target as HTMLInputElement;

    const title = inputElement.value.trim();
    if (!title) return;

    this.tasksService.add(title);
    inputElement.value =  '';
  }
}
