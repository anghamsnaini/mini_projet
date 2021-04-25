import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { DetailsProduitComponent } from './details-produit/details-produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';

const routes: Routes = [
  { path: '', redirectTo: 'produits', pathMatch: 'full' },
  { path: 'produits', component: ListProduitComponent },
  { path: 'produits/:id', component: DetailsProduitComponent },
  { path: 'add', component: AjoutProduitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
