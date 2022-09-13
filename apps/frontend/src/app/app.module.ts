import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';

//ngrx components
import { repoUrlReducer } from './state/repoUrl/repoUrl.reducer';
import { paginatorIndexReducer } from './state/paginator/paginator.reducer';
import { issuesReducer } from './state/issues/issues.reducer';
import { errorReducer } from './state/error/error.reducer';
import { issueCountReducer } from './state/issues/issue-count.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { IssuesEffects } from './state/issues/issues.effects';

//Custom Components
import { IssuesListComponent } from './issues-list/issues-list.component';
import { GetIssuesComponent } from './get-issues/get-issues.component';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    IssuesListComponent,
    GetIssuesComponent,
    PaginatorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(
      {
        issues: issuesReducer,
        error: errorReducer,
        issueCount: issueCountReducer,
        paginatorIndex: paginatorIndexReducer,
        repoUrl: repoUrlReducer,
      },
      {}
    ),
    EffectsModule.forRoot([IssuesEffects]),
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
