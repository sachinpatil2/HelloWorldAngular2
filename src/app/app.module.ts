import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header.component';
import { BoldHoverDirective } from './directive/bold-hover.directive';

@NgModule({
  imports: [ BrowserModule ],
  providers: [],
  declarations: [
                  AppComponent ,
                  HeaderComponent,
                  BoldHoverDirective
                ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
