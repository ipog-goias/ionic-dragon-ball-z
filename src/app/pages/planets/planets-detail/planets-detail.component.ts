import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planets-detail',
  templateUrl: './planets-detail.component.html',
  styleUrls: ['./planets-detail.component.scss'],
})
export class PlanetsDetailComponent  implements OnInit {

  private activatedRoute = inject(ActivatedRoute);

  constructor() { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({data}) => {
      console.log(data);
    });
  }

}
