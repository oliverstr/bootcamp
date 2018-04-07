import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header class="jumbotron p-3 mt-3">
    <h1>Shopping Cart</h1>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mt-3">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a routerLink="/list" class="nav-link">My Shopping Cart</a>
          <a routerLink="/about" class="nav-link">About</a>
        </li>
      </ul>
    </nav>
  </header>
  `
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
