import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { userAuthGuard } from './user-auth.guard';
import { ReativeComponent } from './reative/reative.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
    canActivate:[userAuthGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'reactive',
    component:ReativeComponent
  },
  {
    path:'Child-To-Patent',
    component:ChildToParentComponent
  },
  {
    path:'Patent-To-Child',
    component:ParentToChildComponent
  }

 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
