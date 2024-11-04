import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-html-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './html-dialog.component.html',
  styleUrl: './html-dialog.component.scss'
})
export class HtmlDialogComponent {

  openDialog = false;
  name = 'Bob';
  name2 = ''

  changeName() {
    this.name = this.name2;
  }

}
