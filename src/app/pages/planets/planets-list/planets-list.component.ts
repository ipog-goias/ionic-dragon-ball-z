import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { InfiniteScrollCustomEvent } from '@ionic/angular';

import { PaginationPlanet } from './../planets';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss'],
})
export class PlanetsListComponent  implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  private planetService = inject(PlanetsService);

  paginationPlanet: PaginationPlanet | undefined;

  private page = 1; //página corrente
  private limit = 10; //número de itens por página

  hasMoreData = true;
  isLoading = false; //Flag para validar o carregamento de dados do infiniteScroll

  constructor() { }

  ngOnInit() {
    console.log('inicio');
    this.activatedRoute.data.subscribe(({data}) =>{
      this.paginationPlanet = data;
    });
  }

  onIonInfinite(evento: any) {

    /*
    Verificiar se tem registro para fazer o scroll
    */
   if(this.isLoading || !this.hasMoreData){
    (evento as InfiniteScrollCustomEvent).target.complete(); //finaliza o infinite Scroll
    return;
   }

   this.isLoading = true;
    this.planetService.getPlanets(this.page,this.limit).subscribe(
      //caminho feliz
      planets =>
      {
        //regra de validação dos dados recebidos
        //verifica se a consulta retornou registro para a propriedade paginationPlanet.
        //verifica também se o objeto retornado tem a propriedade items preenchida.
        //Se está preenchida quer dizer que temos registros para listar.
        if(!this.paginationPlanet){
          this.paginationPlanet = planets;
        }
        else{
          if(planets.items.length > 0){
                      /*
          Neste ponto estamos concatenando o array.
          Exemplo: se items contém o vetor [1,2,3] e planets [4,5,6], logo a combinação
          será [1,2,3,4,5,6]
          this.paginationPlanet.items = [...this.paginationPlanet.items, ...planets.items];
          */
          this.paginationPlanet.items = [...this.paginationPlanet.items, ...planets.items];
          this.page++;
          }
          else{
            this.hasMoreData = false;
          }
        }

        this.isLoading = false;

        (evento as InfiniteScrollCustomEvent).target.complete(); //finaliza o infinite Scroll

      },
      //caminho que não deu certo
      error => {
        console.log(`Erro ao carregar dados de planetas`, error);
        (evento as InfiniteScrollCustomEvent).target.complete(); //finaliza o infinite Scroll
      }
  );

  }

}
