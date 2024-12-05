import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttensionComponent } from './componets/attension/attension.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ConcernsListComponent } from './componets/concerns-list/concerns-list.component';
import { ConcernItemComponent } from './componets/concern-item/concern-item.component';


@NgModule({
  declarations: [
    AppComponent,
    AttensionComponent,
    ConcernsListComponent,
    ConcernItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
