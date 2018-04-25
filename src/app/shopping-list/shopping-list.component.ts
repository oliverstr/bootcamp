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
  total: number;
  total_purchased: number;

  constructor(private _shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingItems = this._shoppingService.shoppingItemsFB;
    this.shoppingItems.subscribe(items => {
      this.total = 0;
      this.total_purchased = 0;
      items.forEach(item => {
        const item_total = item.qt * item.value;
        item.disabled ? this.total_purchased += item_total : this.total += item_total;
      });
    }, err => console.log(err));
  }

  addItem(form) {
    const newItem = {
      name: form.value.name,
      qt: form.value.qt,
      value: form.value.value,
      disabled: false
    };
    this._shoppingService.add(newItem);
    form.reset();
  }

}
