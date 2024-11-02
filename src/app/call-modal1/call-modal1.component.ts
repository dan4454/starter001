import { Component } from '@angular/core';
import { ModalExample1Component } from "../modal-example1/modal-example1.component";
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-call-modal1',
  standalone: true,
  imports: [ModalExample1Component, JsonPipe],
  templateUrl: './call-modal1.component.html',
  styleUrl: './call-modal1.component.scss'
})
export class CallModal1Component {

  showModal = false;
  returnFromModel : any = '';


}
