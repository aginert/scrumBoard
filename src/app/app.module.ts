import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import  {FormsModule} from '@angular/forms';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';
import { RemoveButtonComponent } from './remove-button/remove-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TaskComponent,
    RemoveButtonComponent
  ],
  imports: [
    BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
