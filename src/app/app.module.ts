import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ResultsPageComponent } from './components/results-page/results-page.component';

const appRoutes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'result/:symbol', component: ResultsPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    SearchBarComponent,
    ResultsPageComponent,
  ],
  imports: [
    BrowserModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
