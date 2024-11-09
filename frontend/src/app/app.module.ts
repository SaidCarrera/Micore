import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { SalesComponent } from './components/sales/sales.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Aquí importamos AppRoutingModule
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
