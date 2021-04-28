import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent implements OnInit {

  currentProduit: any | null;
  message = '';

  constructor( 
  private produitService: ProduitService,
  private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getProduit(this.route.snapshot.paramMap.get('id'));
  }

  getProduit(id: string | null): void {
    this.produitService.get(id)
      .subscribe(
        data => {
          this.currentProduit = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateProduit(): void {
    this.produitService.update(this.currentProduit.id, this.currentProduit)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'Le produit a été modifier avec succès!';
        },
        error => {
          console.log(error);
        });
  }

  deleteProduit(): void {
    this.produitService.delete(this.currentProduit.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/produits']);
        },
        error => {
          console.log(error);
        });
  }

}
