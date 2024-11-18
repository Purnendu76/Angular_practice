import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AddColorDirective } from './add-color.directive';
import { ReativeComponent } from './reative/reative.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { ChildComponent } from './ChildToParent/child/child.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { Child1Component } from './parentToChild/child1/child1.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddColorDirective,
    ReativeComponent,
    ChildToParentComponent,
    ChildComponent,
    ParentToChildComponent,
    Child1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
