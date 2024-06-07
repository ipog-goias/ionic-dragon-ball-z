import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss'],
})
export class CharactersDetailComponent  implements OnInit {

  private activatedRoute = inject(ActivatedRoute);

  constructor() { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({data}) => {
      console.log(data);
    });
  }

}
