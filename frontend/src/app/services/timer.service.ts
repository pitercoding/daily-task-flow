import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private intervalId: any = null;

  private _seconds = signal(0);
  seconds = this._seconds.asReadonly();

  isRunning = signal(false);

  formattedTime = computed(() => {
    const total = this._seconds();

    const minutes = Math.floor(total / 60);
    const seconds = total % 60;

    return `${this.pad(minutes)}:${this.pad(seconds)}`;
  });

  startTime = signal<number | null>(null);

  constructor() {
    this.initializeTimer();
  }

  private initializeTimer() {
    const savedStartTime = localStorage.getItem('timeStart');
    const savedIsRunning = localStorage.getItem('timerIsRunning') === 'true';

    if (savedStartTime && savedIsRunning) {
      const start = Number(savedStartTime);
      const diff = Math.floor((Date.now() - start) / 1000);
      this._seconds.set(diff);
      this.startTime.set(start);
      this.isRunning.set(true);

      // Continue the timer
      this.intervalId = setInterval(() => {
        const start = Number(localStorage.getItem('timeStart'));
        const diff = Math.floor((Date.now() - start) / 1000);
        this._seconds.set(diff);
      }, 1000);
    }
  }

  start() {
    if (this.intervalId) return;

    const now = Date.now();
    this.startTime.set(now);
    this.isRunning.set(true);

    localStorage.setItem('timeStart', now.toString());
    localStorage.setItem('timerIsRunning', 'true');

    this.intervalId = setInterval(() => {
      const start = Number(localStorage.getItem('timeStart'));
      const diff = Math.floor((Date.now() - start) / 1000);
      this._seconds.set(diff);
    }, 1000);
  }

  pause() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isRunning.set(false);
    localStorage.setItem('timerIsRunning', 'false');
  }

  reset() {
    this.pause();
    this._seconds.set(0);
    this.startTime.set(null);
    localStorage.removeItem('timeStart');
    localStorage.removeItem('timerIsRunning');
  }

  private pad(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
