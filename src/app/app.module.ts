import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailedArticleComponent } from './detailed-article/detailed-article.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { LogInComponent } from './log-in/log-in.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LatestArticleComponent } from './latest-article/latest-article.component';


  const appRoutes: Routes = [
    { path: '', redirectTo: '/start-page', pathMatch: 'full'},
    { path: 'start-page', component: DetailedArticleComponent},
    { path: 'latest-articles', component: LatestArticleComponent},
    { path: 'all-articles', component: AllArticlesComponent},
    { path: 'login', component: LogInComponent},
    { path: 'add-article', component: AddArticleComponent},
    { path: '**', component: PageNotFoundComponent }


  ];

@NgModule({
  declarations: [
    AppComponent,
    LatestArticleComponent,
    AllArticlesComponent,
    LogInComponent,
    AddArticleComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
