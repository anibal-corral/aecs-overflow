/*
Este archivo define los modulos de angular material que se van a utilizar.
*/
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';

const modules = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule
]
@NgModule({

  imports: modules

})

export class MaterialModule{

}
