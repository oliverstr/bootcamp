import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingItems: Array<any> = [];

  constructor(private _shoppingService: ShoppingListService) {
    this.getItems();
   }

  ngOnInit() {
  }

  addItem(form) {
    const newItem = {
      name: form.value.name,
      disabled: false
    };
    this._shoppingService.add(newItem).subscribe(
      data => this.getItems(),
      err => console.log(err)
    );
    form.reset();
  }

  getItems() {
    this._shoppingService.getAll().subscribe(
      data => this.shoppingItems = data,
      err => console.log(err)
    );
  }

  onDelete() {
    this.getItems();
  }


}
