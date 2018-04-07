import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {

  private _shoppingItems = [
    {
      name: 'Pera',
      disabled: false
    },
    {
      name: 'Maçã',
      disabled: false
    },
    {
      name: 'Batata',
      disabled: false
    },
    {
      name: 'Abacaxi',
      disabled: true
    },
  ];

  constructor() { }

  getAll(): Array<any> {
    return this._shoppingItems;
  }

  add(item): void {
    this._shoppingItems.unshift(item);
  }

  remove(item): void {
    const index = this._shoppingItems.indexOf(item);
    this._shoppingItems.splice(index, 1);
  }

  cross(item): void {
    const index = this._shoppingItems.indexOf(item);
    this._shoppingItems[index].disabled = true;
  }

}
