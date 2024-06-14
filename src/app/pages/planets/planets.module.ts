import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanetsPageRoutingModule } from './planets-routing.module';
import { PlanetsDetailComponent } from './planets-detail/planets-detail.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';

@NgModule({
  declarations:[
    PlanetsDetailComponent,
    PlanetsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule, //Passo 1 - colocar a referência do módulo para conectar na internet. Isto para a versão do angular <17
    PlanetsPageRoutingModule
  ]
})
export class PlanetsPageModule {}
