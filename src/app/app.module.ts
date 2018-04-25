import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { ShoppingListService } from './services/shopping-list.service';
import { AboutComponent } from './about/about.component';
import { APP_ROUTES } from './app.routes';
import { AuthService } from './services/auth.service';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingItemComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFontAwesomeModule
  ],
  providers: [ ShoppingListService, AuthService ],
  bootstrap: [AppComponent],
})
export class AppModule { }
