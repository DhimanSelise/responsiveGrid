import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field' ;
import {MatButtonModule} from '@angular/material/button' ;
import {MatIconModule} from '@angular/material/icon' ;
import {MatDialogModule} from '@angular/material/dialog' ;
import {MatInputModule} from '@angular/material/input' ;
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const allMaterialModules = [
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatProgressSpinnerModule
]

@NgModule({
  imports: [
    allMaterialModules
  ],
  exports:[
    allMaterialModules
  ]
})
export class MyMaterialModule { }
