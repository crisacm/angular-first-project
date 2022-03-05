import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/servicios/api.service';
import { Capitulo } from 'src/app/modelos/capitulo';
import { FormsModule } from '@angular/forms';
import { ModalContentComponent } from 'src/app/componentes/modal-content/modal-content.component';

import { HostListener, ViewChild } from '@angular/core';
import { MdbTableDirective, MdbValidateDirective } from 'angular-bootstrap-md';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-caps',
  templateUrl: './list-caps.component.html',
  styleUrls: ['./list-caps.component.scss']
})
export class ListCapsComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable?: MdbTableDirective;
  headElements = ['Sel', 'ID', 'Nombre', 'Episodio', 'Tiempo al aire', 'Opciones'];
  searchText: string = '';
  previous?: string;

  public capitulos: Capitulo[] = [];
  public selectedCap: Capitulo[] = [];

  constructor(private apiService: ApiService, private modalService: NgbModal) { }

  @HostListener('input') oninput() {
    this.searchItems();
  }

  ngOnInit(): void {
    this.apiService.getCapitulos().subscribe(
      capitulos => {
        this.capitulos = capitulos;
        console.log('capitulos: ', this.capitulos);
      });

    console.log('nOnInit.FIN')

    this.mdbTable?.setDataSource(this.capitulos);
    this.previous = this.mdbTable?.getDataSource();
  }

  searchItems() {
    const prev = this.mdbTable?.getDataSource();

    if (!this.searchText) {
      this.mdbTable?.setDataSource(this.previous);
      this.capitulos = this.mdbTable?.getDataSource();
    }

    if (this.searchText) {
      this.capitulos = this.mdbTable?.searchLocalDataBy(this.searchText);
      this.mdbTable?.setDataSource(prev);
    }
  }

  display = false;
  onPress(capitulo: Capitulo) {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.capitulo = capitulo;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }

  isChecked() {
    return false;
  }

  fieldsChange(capitulo: Capitulo) :void {
    this.selectedCap.push(capitulo)
  }

  downloadTxt() {

  }
}
