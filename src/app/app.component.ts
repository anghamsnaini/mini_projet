import { Component, OnInit } from '@angular/core';
import { ProduitService } from './produit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  title = 'Touailia Angham';

  constructor(private produitService: ProduitService){

  }

  ngOnInit(){
    this.getDataFromApi();
  }

  getDataFromApi(){
    this.produitService.get('/').subscribe((response) =>{
      console.log('response from API is', response)
    }, (error) => {
      console.log('Error is', error);
    })
  }
}
