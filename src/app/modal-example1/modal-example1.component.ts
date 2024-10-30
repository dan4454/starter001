import { Component, ElementRef, inject, OnDestroy, OnInit, TemplateRef, ViewChild, viewChild } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  

  ngOnDestroy(): void {
    this.modalService.dismissAll();
  }


  ngOnInit(): void {
    document.getElementById('openButton')?.click()
  }


  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', 
        backdrop: 'static', animation: false, scrollable: true, keyboard: false }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
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
