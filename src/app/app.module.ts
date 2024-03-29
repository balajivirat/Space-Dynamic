import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpaceDynamicComponent } from './space-dynamic/space-dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaceDynamicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
