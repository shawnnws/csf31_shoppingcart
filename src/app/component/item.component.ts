import { Component, EventEmitter, Output } from '@angular/core';

import { Inventory } from '../inventory';
import { CartItem } from '../cartitem';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  items: any[] = [
    { name: 'Apple', description: 'Red' },
    { name: 'Lemon', description: 'Yellow' },
    { name: 'Orange', description: 'Orange' },
    { name: 'Watermelon', description: 'Green' }
  ]

  @Output() onSelectedItem: EventEmitter<string> = new EventEmitter()

  selectedItem(item: any) {
    this.onSelectedItem.next(item);
  }
}
