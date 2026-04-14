import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.scss',
})
export class Title {
  readonly mainTitle = input.required<string>();
  readonly subTitle = input<string>();
}
