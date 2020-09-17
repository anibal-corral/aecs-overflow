/*
Este archivo define los modulos de angular material que se van a utilizar.
*/
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

const modules = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule
]
@NgModule({

  imports: modules,
  exports: modules

})

export class MaterialModule{

}
