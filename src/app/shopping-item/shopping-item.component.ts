import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {

  @Input() shoppingItem;

  constructor(private _shoppingService: ShoppingListService) { }

  ngOnInit() {
  }

  remove(item) {
    this._shoppingService.remove(item);
  }

  cross(item) {
    this._shoppingService.cross(item);
  }

}
