import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharactersPageRoutingModule } from './characters-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersDetailComponent } from './characters-detail/characters-detail.component';

@NgModule({
  declarations:[
    CharactersListComponent,
    CharactersDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharactersPageRoutingModule,
    HttpClientModule
  ]
})
export class CharactersPageModule {}
