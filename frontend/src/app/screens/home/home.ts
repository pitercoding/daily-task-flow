import { Component, computed, inject, signal } from '@angular/core';
import { Title } from '../../components/shared/title/title';
import { TasksService } from '../../services/tasks.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Title, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly tasksService = inject(TasksService);

  addTask(event: Event) {
    event.preventDefault();

    const inputElement = event.target as HTMLInputElement;

    const title = inputElement.value.trim();
    if (!title) return;

    this.tasksService.add(title);
    inputElement.value =  '';
  }

  recentTasks = computed(() => this.tasksService.items().slice(0, 5));

  progress = computed(() => {
    const total = this.tasksService.totalTasks();
    const completed = this.tasksService.completedTasks();

    const value = total ? (completed/ total) * 100 : 0;

    return Number(value.toFixed(2)) + '%';
  })

}
