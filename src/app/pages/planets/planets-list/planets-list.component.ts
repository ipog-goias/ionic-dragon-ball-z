import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PaginationPlanet } from './../planets';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss'],
})
export class PlanetsListComponent  implements OnInit {

  private activatedRoute = inject(ActivatedRoute);

  paginationPlanet: PaginationPlanet | undefined;

  constructor() { }

  ngOnInit() {
    console.log('inicio');
    this.activatedRoute.data.subscribe(({data}) =>{
      this.paginationPlanet = data;
    });
  }

}
