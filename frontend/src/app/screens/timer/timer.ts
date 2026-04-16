import { Component, computed, inject } from '@angular/core';
import { Title } from '../../components/shared/title/title';
import { TimerService } from '../../services/timer.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-timer',
  imports: [Title, NgIf],
  templateUrl: './timer.html',
  styleUrl: './timer.scss',
})
export class Timer {
  timerService = inject(TimerService);

  isRunning = computed(() => this.timerService.isRunning());
  isPaused = computed(() => !this.timerService.isRunning());
}
