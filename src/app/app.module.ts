import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttensionComponent } from './componets/attension/attension.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ConcernsListComponent } from './componets/concerns-list/concerns-list.component';
import { ConcernItemComponent } from './componets/concern-item/concern-item.component';
import { AttentionComponent } from './componets/attention/attention.component';
import { SummeryComponent } from './componets/summery/summery.component';
import { EstimateComponent } from './componets/estimate/estimate.component';
import { SubmissionComponent } from './componets/submission/submission.component';
import { OwnerimagesComponent } from './componets/ownerimages/ownerimages.component';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { ConcernapprovedComponent } from './componets/concernapproved/concernapproved.component';
import { ThankyouComponent } from './componets/thankyou/thankyou.component';
import { EsumateViewComponent } from './esumate-view/esumate-view.component';

import { ButtonComponent } from './componets/button/button.component';
import { SignatureAuthComponent } from './signature-auth/signature-auth.component';
import { EstimateGalleryComponent } from './componets/estimate-gallery/estimate-gallery.component';
import { InspectionResultsComponent } from './componets/inspection-results/inspection-results.component';

@NgModule({
  declarations: [
    AppComponent,
    AttensionComponent,
    ConcernsListComponent,
    ConcernItemComponent,
    AttentionComponent,
    SummeryComponent,
    EstimateComponent,
    SubmissionComponent,
    OwnerimagesComponent,
    HeaderComponent,
    FooterComponent,
    ConcernapprovedComponent,
    ThankyouComponent,
    EsumateViewComponent,
    ButtonComponent,
    SignatureAuthComponent,
    EstimateGalleryComponent,
    InspectionResultsComponent
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
