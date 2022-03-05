import { Component, OnInit } from '@angular/core';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Capitulo } from 'src/app/modelos/capitulo';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit {
  public capitulo: Capitulo = {};

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModal() {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.capitulo = this.capitulo;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
    // modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
    //   console.log(receivedEntry);
    // })
  }
}
