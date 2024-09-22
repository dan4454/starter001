import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu1Component } from './menu1/menu1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Menu1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'starter001';
}
