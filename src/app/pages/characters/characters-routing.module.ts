import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersDetailComponent } from './characters-detail/characters-detail.component';
import { characterResolveById, characterResolveDefaultList } from './characters.service';

const routes: Routes = [
  {
    path: '',
    component: CharactersListComponent,
    resolve: {data: characterResolveDefaultList }
  },
  {
    path: 'edit/:id',
    component: CharactersDetailComponent,
    resolve: {data: characterResolveById }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersPageRoutingModule {}
