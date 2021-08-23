import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { RegisterPageComponent } from './features/login/pages/register-page/register-page.component';
import { TaskPageComponent } from './features/tasks/pages/task-page/task-page.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'tasks',
    component: TaskPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
