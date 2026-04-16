import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-menu-item',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-item.html',
  styleUrls: ['./menu-item.scss'],
})
export class MenuItem {
  readonly label = input.required<string>();
  readonly route = input.required<string>();
}
