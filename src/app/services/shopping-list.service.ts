import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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

  constructor(private _http: HttpClient) { }

  getAll(): Observable<Array<any>> {
    return this._http.get<Array<any>>(`${environment.firebase.databaseURL}/items.json`)
    .map(response => {
      const items = [];
      if (response) {
        Object.keys(response).map(id => {
          const item: any = response[id];
          item.key = id;
          items.push(item);
        });
      }
      return items;
    });
  }

  add(item): Observable<any> {
    return this._http.post(`${environment.firebase.databaseURL}/items.json`, item);
  }

  remove(item): Observable<any> {
    return this._http.delete(`${environment.firebase.databaseURL}/items/${item.key}.json`);
  }

  edit(item, key): Observable<any> {
    return this._http.patch(`${environment.firebase.databaseURL}/items/${key}.json`, item);
  }

}
