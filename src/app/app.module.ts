import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";
import { NewOperationComponent } from './new-operation/new-operation.component';
import { OperationListComponent } from './operation-list/operation-list.component';
import { reducer } from "./reducers/index";

@NgModule({
  declarations: [
    AppComponent,
    NewOperationComponent,
    OperationListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.provideStore(reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
