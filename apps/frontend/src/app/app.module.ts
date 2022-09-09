import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IssuesListComponent } from './issues-list/issues-list.component';
import { issuesReducer } from './state/issues.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { IssuesEffects } from './state/issues.effects';

@NgModule({
  declarations: [AppComponent, IssuesListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ issues: issuesReducer }, {}),
    EffectsModule.forRoot([IssuesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
