import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetResolveById, PlanetResolveDefaultList, PlanetResolvePagination } from './planets.service';
import { PlanetsDetailComponent } from './planets-detail/planets-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetsListComponent,
    resolve: {data: PlanetResolveDefaultList}
  },
  {
    path: 'edit/:id',
    component: PlanetsDetailComponent,
    resolve: {data: PlanetResolveById}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetsPageRoutingModule {}
