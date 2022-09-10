import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RandomUserModule } from '@nx-ng-ionic/random-user';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UsersComponent],
  imports: [BrowserModule, RandomUserModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
