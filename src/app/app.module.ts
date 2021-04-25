import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { DetailsProduitComponent } from './details-produit/details-produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutProduitComponent,
    DetailsProduitComponent,
    ListProduitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
