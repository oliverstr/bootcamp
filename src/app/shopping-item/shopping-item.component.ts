import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {

  @Input() shoppingItem;
  @Output() deleting = new EventEmitter<any>();

  constructor(private _shoppingService: ShoppingListService) { }

  ngOnInit() {
  }

  remove(item) {
    this._shoppingService.remove(item).subscribe(
      data => {
        this.deleting.emit();
      },
      err => console.log(err)
    );
  }

  cross(item) {
    this._shoppingService.edit({ disabled: true }, item.key).subscribe(
      data => item.disabled = true,
      err => console.log(err)
    );
  }

}
