import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Capitulo } from 'src/app/modelos/capitulo';
import { Placement as PopperPlacement, Options } from '@popperjs/core';
import { ApiService } from 'src/app/servicios/api.service';
import { Personaje } from 'src/app/modelos/personaje';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {
  @Input() public capitulo: Capitulo = {};
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  public personajes: Personaje[] = [];

  constructor(public activeModal: NgbActiveModal, private apiService: ApiService) { }

  ngOnInit(): void {
    console.log(this.capitulo);

    this.capitulo.characters?.forEach (child => {
      var url = child
      console.log('url ', url);
      this.apiService.getPersonaje(url).subscribe(
        personaje => {
          this.personajes.push(personaje);
          this.capitulo.personajes = this.personajes;
          console.log('personaje: ', personaje);
        });
    })
  }

  passBack() {
    this.passEntry.emit(this.capitulo);
    this.activeModal.close(this.capitulo);
  }
}
