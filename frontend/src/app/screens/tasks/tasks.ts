import { Component } from '@angular/core';
import { Title } from '../../components/shared/title/title';

@Component({
  selector: 'app-tasks',
  imports: [Title],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {}
