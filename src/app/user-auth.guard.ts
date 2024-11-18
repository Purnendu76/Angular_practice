import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';

export const userAuthGuard: CanActivateFn = (route, state) => {

  const _router=inject(Router)
 let isLogedIn=localStorage.getItem('isLogedIn')
 if(isLogedIn=='false'){
  alert("you have tgto login first")
  _router.navigate(['login'])
  return false
 }

  return true;
};
