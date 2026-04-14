import { Component, signal } from '@angular/core';
import { Page } from './components/shared/page/page';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Page]
})
export class App {}
