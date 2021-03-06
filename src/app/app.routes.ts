import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthService } from './services/auth.service';

export const APP_ROUTES: Routes = [
    { path: 'about', component: AboutComponent, canActivate: [ AuthService ] },
    { path: 'list', component: ShoppingListComponent, canActivate: [ AuthService ] },
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: '**', component: ShoppingListComponent }
];
