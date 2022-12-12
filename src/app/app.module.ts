import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Added by Me
import { MyMaterialModule } from './my-material/my-material.module';
import { HomeComponent } from './home/home.component';
import { NameformComponent } from './nameform/nameform.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomComponent } from './custom/custom.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ // All componets here
    AppComponent,
    HomeComponent,
    NameformComponent,
    CustomComponent
  ],
  imports: [ // All Modules here
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [], // All Service Here
  bootstrap: [AppComponent]
})
export class AppModule { }
