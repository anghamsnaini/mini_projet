import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {
  produit = {
    nom: '',
    prix_unitaire: '',
    quantite: ''
  };
  submitted = false;

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
  }

  saveProduit(): void{
    const data = {
      nom: this.produit.nom,
      prix_unitaire: this.produit.prix_unitaire,
      quantite: this.produit.quantite
    };

    this.produitService.create(data)
    .subscribe(
      (response: any) => {
        console.log(response);
        this.submitted = true;
      },
      (error: any) => {
        console.log(error);
      });
  }
  newProduit(): void {
    this.submitted = false;
    this.produit = {
      nom: '',
      prix_unitaire: '',
      quantite: ''
    };
}
}
