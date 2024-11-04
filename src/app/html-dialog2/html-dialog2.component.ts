import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-dialog2',
  standalone: true,
  imports: [],
  templateUrl: './html-dialog2.component.html',
  styleUrl: './html-dialog2.component.scss'
})
export class HtmlDialog2Component implements OnInit {
  
  

  ngOnInit() {
    document.getElementById('showButton')?.click()
  }

}
