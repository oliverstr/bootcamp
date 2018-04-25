import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header>
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <a routerLink="/list" class="nav-link">My Shopping Cart</a>
    </li>
    <li class="nav-item">
      <a routerLink="/about" class="nav-link">About</a>
    </li>
  </ul>
  </header>
  `,
  styles: [`
    header{
      background-color: #2c98be;
      margin-left: -15px;
      margin-right: -15px;
    }
    .nav-link{
      color: white;
    }
    `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
