import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationPlanet } from './planets';
import { environment } from 'src/environments/environment';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { literal } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  url: string = `${environment.url}/planets`;

  //passo 2 - Fazer a injeção de dependência
  constructor(private http: HttpClient) {}

  //Passo3 - Criar método 'padrão/default' para buscar informações do serviço
  getPlanetsDefault(): Observable<PaginationPlanet> {
    console.log('buscando informações relacionadas a planetas');
    return this.http.get<PaginationPlanet>(this.url);
  }
  //Passo 4 - Criar método para buscar os dados de forma paginada.
  getPlanets(page: number, limit: number): Observable<PaginationPlanet> {
    let url = `${this.url}?page=${page}&limit=${limit}`;
    return this.http.get<PaginationPlanet>(url);
  }

  //Passo 5 - Criar método para buscar a informação com base em um identificador.

  getPlanetsById(id: number): Observable<PaginationPlanet> {
    let url = `${this.url}/${id}`;
    return this.http.get<PaginationPlanet>(url);
  }
}
///////FIM SERVICE

////////////////////////////////////////////////////////////////////////////////////////////////////

//nome da const é igual à um objeto.
export const PlanetResolveDefaultList: ResolveFn<PaginationPlanet> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  //Passo 6 - Criar método resolve para invocar os métodos criados em service.
  return inject(PlanetsService).getPlanetsDefault();
};

export const PlanetResolvePagination: ResolveFn<PaginationPlanet> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  //Passo 7 - Criar método resolve para invocar os métodos criados em service.

  //http://url?valor=1&valor=2&valor3=3
  let parametros = route.queryParams; //pega dos dados da query string para preeencher a consulta
  //
  return inject(PlanetsService).getPlanets(
    Number(parametros['page']),
    Number(parametros['limit'])
  );
};

//http://localhost:xxx/characters/detail/1
export const PlanetResolveById: ResolveFn<PaginationPlanet> = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot,) => {
  return inject(PlanetsService).getPlanetsById(Number(route.paramMap.get('id')!));
};

////FIM RESOLVE
