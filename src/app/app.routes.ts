import { Routes } from '@angular/router';
import { SignUp } from './sign-up/sign-up';
import { SignIn } from './sign-in/sign-in';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
    { path: 'signup', component: SignUp },
    { path: 'signin', component: SignIn },
    { path: 'dashboard', component: Dashboard },
    { path: '**', redirectTo: 'signup', pathMatch: 'full' }
];
