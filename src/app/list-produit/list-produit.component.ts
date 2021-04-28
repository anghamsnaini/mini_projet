import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

  produits: any;
  currentProduit: any | null;
  currentIndex = -1;
  nom = '';

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.retrieveProduits();
  }

  retrieveProduits(): void {
    this.produitService.getAll()
      .subscribe(
        data => {
          this.produits = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveProduits();
    this.currentProduit = null;
    this.currentIndex = -1;
  }

  setActiveProduit(produit: null, index: number): void {
    this.currentProduit = produit;
    this.currentIndex = index;
  }

  removeAllProduits(): void {
    this.produitService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchNom(): void {
    this.produitService.findByNom(this.nom)
      .subscribe(
        (        data: any) => {
          this.produits = data;
          console.log(data);
        },
        (        error: any) => {
          console.log(error);
        });
  }
}
