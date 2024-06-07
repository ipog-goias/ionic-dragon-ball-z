import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginationCharacter } from '../characters';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent  implements OnInit {

  private activatedRoute = inject(ActivatedRoute);

  paginationCharacter: PaginationCharacter | undefined;

  constructor() { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({data}) => {
      this.paginationCharacter = data;
    });
  }

}
