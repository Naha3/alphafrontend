import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttensionComponent } from './componets/attension/attension.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ConcernsListComponent } from './componets/concerns-list/concerns-list.component';
import { ConcernItemComponent } from './componets/concern-item/concern-item.component';
import { EstimateComponent } from './componets/estimate/estimate.component';
import { AttentionComponent } from './componets/attention/attention.component';
import { SubmissionComponent } from './componets/submission/submission.component';
import { FooterComponent } from './componets/footer/footer.component';
import { ThankyouComponent } from './componets/thankyou/thankyou.component';
import { ConcernapprovedComponent } from './componets/concernapproved/concernapproved.component';
import { HeaderComponent } from './componets/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    AttensionComponent,
    ConcernsListComponent,
    ConcernItemComponent,
    AttentionComponent,
    EstimateComponent,
    SubmissionComponent,
    FooterComponent,
    ThankyouComponent,
    ConcernapprovedComponent,
    HeaderComponent,
  
    
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
