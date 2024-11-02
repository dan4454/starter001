import { Component, ElementRef, inject, model, OnDestroy, OnInit, TemplateRef, ViewChild, viewChild } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import axios from "axios";

@Component({
  selector: 'app-modal-example1',
  standalone: true,
  imports: [],
  templateUrl: './modal-example1.component.html',
  styleUrl: './modal-example1.component.scss'
})
export class ModalExample1Component implements OnDestroy, OnInit {
  private modalService = inject(NgbModal);
  closeResult = '';

  returnFromModel :any = model('');

  showModal = model()

  data :any = [];

  ngOnDestroy(): void {
    this.modalService.dismissAll();
    // this.returnFromModal.set('returned!!!')
  }


  ngOnInit(): void {
    document.getElementById('openButton')?.click()
    console.log(this.showModal());
    this.getData();


  }

  async getData() {
    let d = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.data = d.data;
    console.log(this.data);
  }


  open(content: TemplateRef<any>) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      backdrop: 'static', animation: true, size: 'xl', fullscreen: true, scrollable: true, keyboard: false
    }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  setResult() {
    this.returnFromModel.set({code: 100, result: "worked"})
  }

  private getDismissReason(reason: any): string {
    this.showModal.set(false);
    console.log(this.showModal());
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }


}
