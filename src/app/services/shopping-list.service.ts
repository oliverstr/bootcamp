import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShoppingListService {

  shoppingItemsFB: Observable<any[]>;
  shoppingItemsRef: AngularFireList<any[]>;

  constructor(private _http: HttpClient, private db: AngularFireDatabase) {
    this.shoppingItemsRef = this.db.list('items');
    this.shoppingItemsFB = this.shoppingItemsRef.snapshotChanges().map(
      changes => {
        return changes.map(c => {
          return {
            key: c.payload.key,
            name: c.payload.val().name,
            disabled: c.payload.val().disabled
          };
        });
      }
    );
  }

  add(item): void {
    this.shoppingItemsRef.push(item);
  }

  remove(item): void {
    this.shoppingItemsRef.remove(item.key);
  }

  edit(item, key): void {
    this.shoppingItemsRef.update(key, item);
  }

}
