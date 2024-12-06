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

@NgModule({
  declarations: [
    AppComponent,
    AttensionComponent,
    ConcernsListComponent,
    ConcernItemComponent,
    AttentionComponent,
    SummeryComponent,
    EstimateComponent,
    SubmissionComponent
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
