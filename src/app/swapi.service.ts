import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concat, EMPTY, expand, repeat } from 'rxjs';

export interface SwapiPlanetResponse {
  next: string;
  results: { name: string; }[]
}

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpSvc: HttpClient) { }

  loadPlanets = () => {
    const p1 = this.httpSvc.get<SwapiPlanetResponse>("https://swapi.dev/api/planets");
    return p1.pipe(
      expand(x => x.next ? this.httpSvc.get<SwapiPlanetResponse>(x.next) : EMPTY)
    );
  }
}
