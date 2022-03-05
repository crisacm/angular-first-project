import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Capitulo } from '../modelos/capitulo';
import { RequestJson } from '../modelos/request-json';
import { map, Observable, tap } from 'rxjs';
import { Personaje } from '../modelos/personaje';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) { }

  public getCapitulos(): Observable<Capitulo[]> {
    return this.http.get<RequestJson>(this.url)
      .pipe(
        tap(data => console.log('Capitulos get!', data)),
        map(
          value => value.results
        )
      );
  }

  public getPersonaje(url: string): Observable<Personaje> {
    return this.http.get<Personaje>(url)
      .pipe(
        tap(data => console.log('Personaje get!', data))
      );
  }
}
