import { Component } from '@angular/core';
import { Inventory } from './inventory';
import { CartItem } from './cartitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  receivedItems: any[] = [];
  
  receiveSelectedItem(event: string) {
    // console.log('receiveSelectedItem: ' + event);

    if (this.receivedItems.length == 0) {
      this.receivedItems.push({ name: event, quantity: 1 });
    } else {
      let obj = this.receivedItems.find(o => o.name === event);

      let foundIndex = this.receivedItems.indexOf(obj, 0);

      if (foundIndex >= 0) {
        this.receivedItems[foundIndex].quantity++;
      } else {
        this.receivedItems.push({ name: event, quantity: 1 });
      }
    }
  }
}
