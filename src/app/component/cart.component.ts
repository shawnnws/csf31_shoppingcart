import { Component, Input } from '@angular/core';
import { Inventory } from '../inventory';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input() cartItems: any[] = [];

  deleteItem(event:string) {
    console.log('deleteItem: ' + event);
    
    let objFound = this.cartItems.find(o => o.name === event);

    let foundIndex = this.cartItems.indexOf(objFound, 0);

    this.cartItems.splice(foundIndex, 1);
  }
}
