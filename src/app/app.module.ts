import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";
import { operationsReducer } from "./reducers/operations";
import { NewOperationComponent } from './new-operation/new-operation.component';
import { OperationListComponent } from './operation-list/operation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewOperationComponent,
    OperationListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.provideStore({ operations: operationsReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
