import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationCharacter } from './characters';
import { environment } from 'src/environments/environment';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  url: string = `${environment.url}/characters`;

  getCharactersDefault(): Observable<PaginationCharacter>{
    console.log(this.url);
    return this.http.get<PaginationCharacter>(this.url);//limite padrão da API é 10 registros por consulta.
  }

  getCharacters(page: number, limit: number): Observable<PaginationCharacter>{

    let url = `${this.url}?page=${page}&limit=${limit}`;
    return this.http.get<PaginationCharacter>(url);
  }

  getCharacterById(id: number): Observable<PaginationCharacter>{

    let url = `${this.url}/${id}`;
    return this.http.get<PaginationCharacter>(url);
  }
}
//////////////////////////////////////////////////////////////////////////////////////
//falta inserir o a configuração do resolveFn
//http://localhost:xxx/characters
export const characterResolveDefaultList: ResolveFn<PaginationCharacter> = (
   route: ActivatedRouteSnapshot, 
   state: RouterStateSnapshot,) => {
  return inject(CharactersService).getCharactersDefault();
};

//http://localhost:xxx/characters?page=1&limit=10
export const characterResolvePagination: ResolveFn<PaginationCharacter> = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot,) => {
    
    let parametros = route.queryParams;

  return inject(CharactersService).getCharacters(Number(parametros['page']),Number(parametros['limit']));
};

//http://localhost:xxx/characters/detail/1
export const characterResolveById: ResolveFn<PaginationCharacter> = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot,) => {
  return inject(CharactersService).getCharacterById(Number(route.paramMap.get('id')!));
};


