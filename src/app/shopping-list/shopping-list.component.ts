import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingItems: Observable<any[]>;

  constructor(private _shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingItems = this._shoppingService.shoppingItemsFB;
  }

  addItem(form) {
    const newItem = {
      name: form.value.name,
      disabled: false
    };
    this._shoppingService.add(newItem);
    form.reset();
  }


}
