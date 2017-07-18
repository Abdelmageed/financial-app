import { StoreModule } from "@ngrx/store";

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NewOperationComponent } from './new-operation/new-operation.component';
import { OperationListComponent } from './operation-list/operation-list.component';
import { CurrenciesComponent } from './currencies/currencies.component';

import { reducer } from "./reducers/index";

@NgModule({
  declarations: [
    AppComponent,
    NewOperationComponent,
    OperationListComponent,
    CurrenciesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    StoreModule.provideStore(reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
